import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class DataService {
  selectedTeam = [];
  constructor(private http: HttpClient) { }

  // signinApiService(formData): Observable<User> {
  //   console.log(formData);
  //   return this.http.post<User>(api.signin, formData);
  // }
}
