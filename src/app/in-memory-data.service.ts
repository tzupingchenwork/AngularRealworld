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
    return {users};
  }
}


