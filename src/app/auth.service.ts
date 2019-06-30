import { Injectable } from '@angular/core';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

 
  constructor() { }

  signIn() {
    // this.http.post('/login', {user, password})

    return of({
      succes: true,
      // TODO: set enum
      role: 'admin' // customer, user
    });
  }
}
