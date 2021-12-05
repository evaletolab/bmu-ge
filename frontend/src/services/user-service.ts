import { $config } from './config-service';

class UserService {
  private _STORAGE_USER = "milid-user";
  private _user: any =  { 
    id: $config.getDeviceID() 
  } ;

  get user(){
    return this._user;
  }

  async createUser(username: string) {
    const user = {
      id: $config.getDeviceID(),
      name: username,
      created: new Date()
    };
    
    this._user = user;
    console.log('---DBG user',user)
    return await $config.setStorage(this._STORAGE_USER,user);
  }


  async get() {
    if(this._user.name) {
      return this._user;
    }

    const user = await $config.getStorage(this._STORAGE_USER);
    return this._user = user || this._user;
  }
  
}

//
// service start with $
export const $user = new UserService();