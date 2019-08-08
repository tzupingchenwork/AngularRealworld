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
    const articles = [
      {id: '1', title: '我是標題1', description: '描述1' , body: '本體1' },
      {id: '2', title: '我是標題2', description: '描述2' , body: '本體2' }
    ];
    return {users, articles};
  }

}
