import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class DataService {
  selectedTeam = [];
  data = new BehaviorSubject({
    dateOfDeckViewed: new Date(),
    totalVisitByPerson: 0,
    totalVisit: 0,
    no_of_hours: 0
  });

  constructor(private http: HttpClient) { }

  // signinApiService(formData): Observable<User> {
  //   console.log(formData);
  //   return this.http.post<User>(api.signin, formData);
  // }
}
