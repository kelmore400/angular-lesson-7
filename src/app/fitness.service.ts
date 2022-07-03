import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FitnessService {

  constructor(private http: HttpClient) { }
  url: string = "api/exercises"
  getItems() {
    return this.http.get(this.url);
  }
  addItems(title: string) {
    return this.http.post(this.url, { title });
  }
  editItems(id: number, title: string) {
    return this.http.put(`${this.url}/${id}`, { title, id });
  }
  deleteItems(id: number) {
    return this.http.delete(`${this.url}/${id}`);
  }
}
