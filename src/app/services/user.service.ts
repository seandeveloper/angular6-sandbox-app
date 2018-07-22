import { Injectable } from '@angular/core';
import { User } from "../models/User";
import { Observable } from 'rxjs';
import { of } from "rxjs"; //allows return of observalbe arrays

@Injectable({
  providedIn: 'root'
})
export class UserService {

  user: User[];
  data: Observable<any>;

  constructor() {
    this.user = [
      {
        firstName: 'Sean',
        lastName: 'Knowles',
        email: 'sean@awsome.com',
        isActive: true,
        registered: new Date('01/02/2018 08:30:00'),
        hide: true
      },
      {
        firstName: 'Jon',
        lastName: 'Bird',
        email: 'rudeboy@massive.com',
        isActive: false,
        registered: new Date('03/04/2018 09:20:48'),
        hide: true

      },
      {
        firstName: 'Toby',
        lastName: 'Austin-Lock',
        email: 'dadActor@fantastic.com',
        isActive: true,
        registered: new Date('12/05/2018 10:12:39'),
        hide: true
      }
    ];
   }

   getData() {
     this.data = new Observable(observer => {
       setTimeout(() => {
         observer.next(1);
       }, 1000);

       setTimeout(() => {
         observer.next(2);
       }, 2000);

       setTimeout(() => {
         observer.next(3);
       }, 3000);

       setTimeout(() => {
         observer.next(4);
       }, 4000);
     });
     return this.data
   }

   getUsers(): Observable<User[]> {
     return of(this.user);
   }

   addUser(user: User) {
     this.user.unshift(user);
   }
}
