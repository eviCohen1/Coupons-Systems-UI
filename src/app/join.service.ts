import { Injectable } from '@angular/core';
import { of, Subject, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class JoinService {

  constructor() { }
  
  subject = new BehaviorSubject([false, false, false, false]);

}
