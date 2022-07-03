import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';

@Injectable({
  providedIn: 'root'
})
export class DataService implements InMemoryDbService{

  constructor() { }
  createDb() {
    return {exercises: [{id: 1, title: 'exercise 1'}, {id: 2, title: 'exercise 2'}, {id: 3, title: 'exercise 3'}]}
  }
}