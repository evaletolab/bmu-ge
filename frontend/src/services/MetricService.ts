import { Vue } from 'vue-property-decorator';

import { $config } from "./config-service";


import axios from 'axios';
import { BehaviorSubject } from "rxjs";

const defaultAxios = {
  headers: { 
    'Cache-Control': 'no-cache',
    'Content-Type': 'application/json',
    'Authorization': 'Bearer abcd'
  }
};

export interface StatEvent {
  module: string;
  state: string;
  uid?: string;
  timestamp?: number;
}


class MetricService {
  public STORAGE_KEY = "PR-progression";

  public progressionState: any = Vue.observable({});

  private update$ = new BehaviorSubject<StatEvent|null>(null);


  async get() {
    const item = localStorage.getItem(this.STORAGE_KEY);
    const state = JSON.parse(item as string);
    const keys = Object.keys(state ||{});
    //
    // looking on Airtable
    await this.sync();
    localStorage.setItem(this.STORAGE_KEY, JSON.stringify(this.progressionState))

    Object.assign(this.progressionState,state);
    console.log('--DBG metrics',this.progressionState)
    return this.progressionState;
  }

  //
  // push usage 
  async event(params: StatEvent){

    //
    // extends params
    const fields = Object.assign({},params,{
      uid:$config.getDeviceID(), 
      timestamp: (params.timestamp || new Date())
    });

    //
    // check state before to continue 
    const current = this.progressionState[params.module];
    if(current &&
      (current.state == params.state || current.state == "DONE")) {
     return fields;
    } 

    //
    // save localStorage
    await this.set(fields);

    //
    // save php
    try{
      //await axios.post("/api/event", fields, defaultAxios);
    }catch(e){
      console.error("unable to update event", e);
    }
    return fields;
  }

  //
  // keep track of all lessons
  async set(params: StatEvent){
    this.progressionState[params.module] = {
      state: params.state,
      timestamp: params.timestamp,
      uid:params.uid,
    };
    
    //
    // notify observers 
    this.update$.next(params);
    localStorage.setItem(this.STORAGE_KEY, JSON.stringify(this.progressionState))
    return this.progressionState;
  }

  async sync() {
    const $id = await $config.getDeviceID();
    //
    // reset
    this.progressionState = {};

    //
    // basic check
    if(!$id) {
      throw new Error('Unauthorized sync()')
    }

    //
    try{
      // const res= await axios.get("/api/event?filter=" + $id, defaultAxios);
      // if(res.data && res.data.length) {
      //   res.data.forEach((params:any) => {
      //     this.progressionState[params.module] = {
      //       state: params.state,
      //       timestamp: params.timestamp,
      //       uid:params.uid,
      //     };          
      //   });
      // }
      // this.update$.next(null);
      // return res;
    }catch(e){
      console.error("unable to sync events", e);
      return null;
    }
  }

  async getStats(){
    try{
      // const res= await axios.get("/api/stats");
      // console.log('-- DBG',res);
      // return res.data;
    }catch(e){
      console.error("unable to get stats", e);
      return null;
    }
  }


  onUpdate() {
    return this.update$.asObservable();
  }
}

//
// service start with $
export const $metric = new MetricService();