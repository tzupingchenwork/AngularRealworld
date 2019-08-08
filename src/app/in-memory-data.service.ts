import { Injectable } from '@angular/core';
import { User } from './shared/models/user.model';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService {

  constructor() { }
  createDb() {
    const users = [
      { email: 'aa@com', username: 'Andy', bio: 'hello' },
      { email: 'bb@com', username: 'Abby', bio: 'hello' },
    ];
    const article = [
      {slug : 'slug1', title: 'title1', description: 'description1' , body: 'body1' },
      {slug : 'slug2', title: 'title2', description: 'description2' , body: 'body2' }
    ];
    return {users, article};
  }

}
