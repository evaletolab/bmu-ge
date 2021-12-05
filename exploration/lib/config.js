"use strict";
//
// https://googlechrome.github.io/samples/classes-es6/



//
// more details on https://github.com/louischatriot/nedb
var Datastore     = require('nedb');  
var moment        = require('moment');
var fs            = require('fs');
var nodemailer    = require('nodemailer');
var md5           = require('crypto');
var VERSION       = require('../package.json').version;
var transporter;
//
// keep track on instance
global["configService"]=null;

class ConfigService{

  constructor(configPath){
    let smtpConfig={};

    //
    // manage singleton
    if(global["configService"]){
      throw new Error("ConfigService instance already exists");
    }

    this.VERSION=VERSION;
    this.now=new Date();
    this.crypto=new SimpleCipher();
    this.config={};
    this.path=configPath;
    this.get();

    //
    // configure mail
    if(this.config.mail){
      smtpConfig = {
        host: this.config.mail.host,
        port: this.config.mail.port,
        secure: false,
        requireTLS:true,
        auth: {
            user: this.config.mail.username,
            pass: this.config.mail.password
        }
      };      
      transporter = nodemailer.createTransport(smtpConfig);      
    }    

    global["configService"]=this;
  }

  static exists(path){
    return fs.existsSync(__dirname+'/'+path);
  }

  static instance(path){
    if(!global["configService"]){
      if(!path) throw new Error("le service de configuration n'est pas disponible");
      new ConfigService(path);
    }
    return global["configService"];
  }

  get(){
    this.config = JSON.parse(fs.readFileSync(__dirname+'/'+this.path, 'utf8'));
    this.config.VERSION=VERSION;
    
  }

  saveObject(content, file){
    fs.writeFileSync(__dirname+'/'+file,JSON.stringify(content,0,2));
  }

  saveHtml(content,file){
    fs.writeFileSync(__dirname+'/'+file,content);
  }

  public(){
    let str=JSON.stringify(this.config.shared);
    let cryptostr=this.crypto.encode(this.config.shared.finger,str.split(""));
    return {
      finger:this.config.shared.finger,
      image:cryptostr,
      timestamp:(new Date())      
    };
  }
}


// SimpleCipher - Super simple encryption using XOR and Base64
//
// Depends on [Underscore](http://underscorejs.org/).
//
// As a warning, this is **not** a secure encryption algorythm. It uses a very
// simplistic keystore and will be easy to crack.
//
// The Base64 algorythm is a modification of the one used in phpjs.org
// * http://phpjs.org/functions/base64_encode/
// * http://phpjs.org/functions/base64_decode/
//
// Examples
// --------
//
//     SimpleCipher.encode("test", "foobar");   // => "EgocFhUX"
//     SimpleCipher.decode("test", "EgocFhUX"); // => "foobar"
//
// Copyright © 2013 Devin Weaver <suki@tritarget.org>
//
// This program is free software. It comes without any warranty, to
// the extent permitted by applicable law. You can redistribute it
// and/or modify it under the terms of the Do What The Fuck You Want
// To Public License, Version 2, as published by Sam Hocevar. See
// http://www.wtfpl.net/ for more details.

var b64_table = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";

class SimpleCipher{
  constructor(){

  }

  encode(key, data) {
    data = this.xor_encrypt(key, data);
    return this.b64_encode(data);
  }

  decode(key, data) {
    data = this.b64_decode(data);
    return this.xor_decrypt(key, data);
  }


  b64_encode(data) {
    var o1, o2, o3, h1, h2, h3, h4, bits, r, i = 0, enc = "";
    if (!data) { return data; }
    do {
      o1 = data[i++];
      o2 = data[i++];
      o3 = data[i++];
      bits = o1 << 16 | o2 << 8 | o3;
      h1 = bits >> 18 & 0x3f;
      h2 = bits >> 12 & 0x3f;
      h3 = bits >> 6 & 0x3f;
      h4 = bits & 0x3f;
      enc += b64_table.charAt(h1) + b64_table.charAt(h2) + b64_table.charAt(h3) + b64_table.charAt(h4);
    } while (i < data.length);
    r = data.length % 3;
    return (r ? enc.slice(0, r - 3) : enc) + "===".slice(r || 3);
  }

  b64_decode(data) {
    var o1, o2, o3, h1, h2, h3, h4, bits, i = 0, result = [];
    if (!data) { return data; }
    data += "";
    do {
      h1 = b64_table.indexOf(data.charAt(i++));
      h2 = b64_table.indexOf(data.charAt(i++));
      h3 = b64_table.indexOf(data.charAt(i++));
      h4 = b64_table.indexOf(data.charAt(i++));
      bits = h1 << 18 | h2 << 12 | h3 << 6 | h4;
      o1 = bits >> 16 & 0xff;
      o2 = bits >> 8 & 0xff;
      o3 = bits & 0xff;
      result.push(o1);
      if (h3 !== 64) {
        result.push(o2);
        if (h4 !== 64) {
          result.push(o3);
        }
      }
    } while (i < data.length);
    return result;
  }

  keyCharAt(key, i) {
    return key.charCodeAt( Math.floor(i % key.length) );
  }

  xor_encrypt(key, data) {
    return data.map((c, i)=> {
      return c.charCodeAt(0) ^ this.keyCharAt(key, i);
    });
  }

  xor_decrypt(key, data) {
    return data.map((c, i)=>{
      return String.fromCharCode( c ^ this.keyCharAt(key, i) );
    }).join("");
  }
    
} 


module.exports.SimpleCipher=SimpleCipher;
module.exports.ConfigService=ConfigService;