import { Component, OnInit } from '@angular/core';
import * as countapi from 'countapi-js';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { api } from 'src/environments/environment';

@Component({
  selector: 'app-deck',
  templateUrl: './deck.component.html',
  styleUrls: ['./deck.component.scss']
})
export class DeckComponent implements OnInit {
  totalVisit: number = 0;
  totalVisitByPerson : number = 0;
  deckViewed: boolean = false;
  dateOfDeckViewed: Date;
  constructor(private route: ActivatedRoute, private http: HttpClient) { }

  ngOnInit() {
    countapi.hit('deck').then(success => {
      this.totalVisit = success.value;
      this.route.queryParams.subscribe(params => {
        countapi.hit('hubspot.com', params['email'].split('@')[0]).then(success => {
          this.deckViewed = true;
          this.dateOfDeckViewed = new Date();
          this.totalVisitByPerson= success.value;
          let requestBody = {
            "values": {
              "1": params['email'],
              "2": this.totalVisit,
              "3": this.totalVisitByPerson,
              "4": this.dateOfDeckViewed
            }
          }
          this.http.post(api.addData, requestBody).subscribe(data=> {
            console.log(data);
            alert(data['message']);
          })
        }, error => {
          console.log(error);
        })
      })
    })
   
  }

}
