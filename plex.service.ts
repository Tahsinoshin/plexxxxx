import { Injectable } from '@angular/core';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class PlexService {

  constructor() { }
  user= new User();

  setUser(user: User) {
    this.user=user;
  }
  
}
