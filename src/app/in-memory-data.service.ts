import { Injectable } from '@angular/core';
import { User } from './shared/models/user.model';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService {

  constructor() { }
  createDb() {
    const users = [
      { id: '1', email: 'aa@com', username: 'Andy', bio: 'hello' },
      { id: '2', email: 'bb@com', username: 'Abby', bio: 'hello' },
    ];
    const article = [
      {id: '1', slug : 'slug1', title: 'title1', description: 'description1' , body: 'body1' },
      {id: '2', slug : 'slug2', title: 'title2', description: 'description2' , body: 'body2' }
    ];
    return {users, article};
  }

}
