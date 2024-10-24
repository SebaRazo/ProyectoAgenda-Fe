
import { Injectable } from '@angular/core';
import { BACKEND_URL } from '../constants/backend';
import { iAuthRequest, iRegisterRequest } from '../interfaces/auth';
import { ISession } from '../interfaces/session.interface';

import { JwtHelperService } from '@auth0/angular-jwt'; 
import { IUser } from '../interfaces/user.interface';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor() {}

  private loggedIn: boolean = false;

  async login(authentication:iAuthRequest): Promise<boolean> {
    const res = await fetch(BACKEND_URL + '/api/authentication/authenticate', {
      method: "POST",
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(authentication),
    });
    if(!res.ok) return false
    const token = await res.text();
    console.log(token)

    const helper = new JwtHelperService();
    const decodedToken = helper.decodeToken(token);
    const sub = decodedToken.sub;
    console.log(sub); 

    if (!token) return false;
    this.setSession(token);
    this.setUserId(sub); 
    return true;
  }

  async addUser(user: IUser) {  
    const res = await fetch(BACKEND_URL+'/api/User', {
      method: 'POST',
      headers: { 'Content-type': 'application/json' },
      body: JSON.stringify(user)
    }).then()  ;
    console.log(res)
    
  }


  isLoggedIn(){
    return this.loggedIn;
  }

  getSession(): ISession {
    const item: string = localStorage.getItem('session') || 'invalid';
    if (item !== 'invalid') {
      this.loggedIn = true;
      return JSON.parse(item);
    }
    return { expiresIn: '', token: '' };
  }


  setUserId(id : string){
    localStorage.setItem('Id', id);
  }

  setSession(token: any, expiresTimeHours: number = 8) {
    const date = new Date();
    date.setHours(date.getHours() + expiresTimeHours);

    const session: ISession = {
      expiresIn: new Date(date).toISOString(),
      token,
    };

    this.loggedIn = true;
    localStorage.setItem('session', JSON.stringify(session));
   
  }


  async getMe() {
    const res = await fetch('', {
      headers: {
        Authorization: this.getSession().token!,
      },
    });
    return await res.json();
  }

  resetSession() {
    localStorage.removeItem('session');
    localStorage.removeItem('Id');
    this.loggedIn = false;

  }

}


