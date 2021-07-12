import { Component, OnInit, OnDestroy } from '@angular/core';
import * as countapi from 'countapi-js';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { api } from 'src/environments/environment';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-deck',
  templateUrl: './deck.component.html',
  styleUrls: ['./deck.component.scss']
})
export class DeckComponent implements OnInit, OnDestroy {
  totalVisit: number = 0;
  totalVisitByPerson : number = 0;
  deckViewed: boolean = false;
  dateOfDeckViewed: Date;
  startTime: Date;
  endTime: Date;
  email: string;
  constructor(private route: ActivatedRoute, private http: HttpClient,
     private router: Router, private dataService: DataService) { }

  ngOnInit() {
    this.startTime = new Date();
    this.dataService.data.subscribe(value => {
      console.log('data');
    })
    countapi.hit('deck').then(success => {
      
      this.route.queryParams.subscribe(params => {
        this.email = params['email'];
        countapi.hit('hubspot.com', params['email'].split('@')[0]).then(data => {
          this.deckViewed = true;
          this.dateOfDeckViewed = new Date();
          this.totalVisitByPerson= data.value;
          this.totalVisit = success.value;
        }, error => {
          console.log(error);
        })
      })
    })
  }

  navigate(){
    console.log('navigate');
    this.router.navigateByUrl('/deckview');
  }
  diff(start, end) {
    let diffInMilliSeconds = Math.abs(end - start) / 1000;

    // calculate days
    const days = Math.floor(diffInMilliSeconds / 86400);
    diffInMilliSeconds -= days * 86400;
    console.log('calculated days', days);

    // calculate hours
    const hours = Math.floor(diffInMilliSeconds / 3600) % 24;
    diffInMilliSeconds -= hours * 3600;
    console.log('calculated hours', hours);

    // calculate minutes
    const minutes = Math.floor(diffInMilliSeconds / 60) % 60;
    diffInMilliSeconds -= minutes * 60;
    console.log('minutes', minutes);

    let difference = '';
    if (days > 0) {
      difference += (days === 1) ? `${days} day, ` : `${days} days, `;
    }

    difference += (hours === 0 || hours === 1) ? `${hours} hour, ` : `${hours} hours, `;

    difference += (minutes === 0 || hours === 1) ? `${minutes} minutes` : `${minutes} minutes`; 

    return difference;
}

  ngOnDestroy(){
    const time = this.diff(this.startTime, new Date());
    console.log(time);
    let requestBody = {
      "values": {
        "1": this.email,
        "2": this.totalVisit,
        "3": this.totalVisitByPerson,
        "4": this.dateOfDeckViewed,
        "5": time
      }
    }
    this.http.post(api.addData, requestBody).subscribe(data=> {
      console.log(data);
      alert(data['message']);
    })
  }
}
