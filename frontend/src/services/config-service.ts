import Vue from "vue";
import axios from 'axios';

const defaultAxios = {
  headers: { 'Cache-Control': 'no-cache' }
};

class ConfigService {
  // More about store
  // https://fr.vuejs.org/v2/guide/reactivity.html
  private _store: any;
  private _baseUrl = process.env.BASE_URL;
  private _isInstalled = false;

  lang = 'fr';

 
  constructor() {
    this._store = Vue.observable({
      config: {}
    });

    if(window.location.pathname == '//'){
      window.location.href = '/';
    }

    //
    // i18n init, default is FR
    const lang = navigator.language || navigator['userLanguage'];   
    if (/^en\b/.test(lang)) {
      this.lang = "fr";
    }
    if (/^fr\b/.test(lang)) {
      this.lang = "fr";
    }
    if (/^de\b/.test(lang)) {
      this.lang = "de";
    }

    window.addEventListener('appinstalled', (evt) => {
      this._isInstalled = true;
    });    

  }

  get store() {
    return this._store;
  }

  get config() {
    return this._store.config;
  }


  public getStorage(key) {
    try {
      const str = localStorage.getItem(key);
      return str && JSON.parse(str);
    } catch (e) {
      return false;
    }
  }

  public setStorage(key, value) {
    try {
      localStorage.setItem(key, JSON.stringify(value));
      return true;
    } catch (e) {
      return false;
    }
  }
    

  i18n(key) {
    if(!this.config.i18n) {
      return '';
    }
    return this.config.i18n[this.lang][key];
  }

  async get(force?: boolean){
    if(!this._store.config.done && !force) {
      const res = await axios.get(this._baseUrl + 'config.json',defaultAxios);
      const config = this._store.config = res.data;
      this._store.config.done = true;

      const now = Date.now();
      //
      // update date fields
      // StockDateAdded_date => 2021-09-05T00:00:00.000Z  (3 months)
      const start = new Date(now - (3600000 * 24 * 100)).toISOString();
      //
      // DateOfPublicationSearch_date => 2019-12-05T00:00:00.000Z (24 months)
      const end = new Date(now - (3600000 * 24 * 354)).toISOString();

      const queries = Object.keys(config.queries);
      Object.keys(config.queries).forEach( key => {
        config.queries[key] = config.queries[key].replaceAll('__START__',start);
        config.queries[key] = config.queries[key].replaceAll('__END__',end);
      })

      

      // console.log('---DBG', JSON.stringify(this._store,null,2))
      //
      // generate root colors
      //this.generateColors(this._store.config.themes);
    }

    return this._store.config;
  }  
  
  generateColors(themes){
    const root = document.documentElement;
    Object.keys(themes).forEach(theme => {
      const primary = themes[theme].primary
      root.style.setProperty('--theme-'+theme+'-primary',primary);

      const secondary = themes[theme].secondary
      root.style.setProperty('--theme-'+theme+'-secondary',secondary);

      const tertiary = themes[theme].tertiary
      root.style.setProperty('--theme-'+theme+'-tertiary',tertiary);
      //console.log("'"+primary + "','"+secondary + "','"+tertiary+"'");
    });
  }

  isDesktop() {
    return false;
  }

  //
  // Detects if device is on iOS
  isIos() {
    const userAgent = window.navigator.userAgent.toLowerCase();
    return /iphone|ipad|ipod/.test( userAgent ) ;
  }

  //
  // is Safari
  isSafari() {
    const userAgent = navigator.userAgent.toLowerCase();
    return /^((?!chrome|android).)*safari/i.test(userAgent);
  }

  isAndroid() {
    const userAgent = navigator.userAgent.toLowerCase();
    return /android/i.test(userAgent);
  }

  //
  // Detects if device is in standalone mode
  isInStandaloneMode(){ 
    const $window = window as any;    
    const standalone = (window.matchMedia('(display-mode: standalone)').matches);
    return ($window.navigator.standalone) || standalone || this._isInstalled;
  }

  checksum(str:string) {
    let hash = 0;
    if (str.length == 0) return hash;
    for (let i = 0; i < str.length; i++) {
        const char = str.charCodeAt(i);
        hash = ((hash<<5)-hash)+char;
        hash = hash & hash;
    }
    return Math.abs(hash).toString(16);
  }  

  getDeviceID() {
    const screenInfo = window.screen;
    const navigatorInfo:any = window.navigator;
    let uid = this.getStorage('uid');
    if(uid) {
      return uid;
    }
    uid = this.checksum(Date.now() + '') + '-' + this.checksum(screenInfo.height+ navigatorInfo.userAgent.replace(/\D+/g, ''));
    this.setStorage('uid',uid);
    console.log('---- init device uid :', uid);
    return uid;
  }

}


//
// service start with $
export const $config = new ConfigService();