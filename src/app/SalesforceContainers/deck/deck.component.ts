import { Component, OnInit, OnDestroy } from '@angular/core';
import * as countapi from 'countapi-js';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { api } from 'src/environments/environment';
import { DataService } from 'src/app/services/data.service';
import { DatePipe } from '@angular/common'

@Component({
  selector: 'app-deck',
  templateUrl: './deck.component.html',
  styleUrls: ['./deck.component.scss']
})
export class DeckComponent implements OnInit, OnDestroy {
  totalVisit: number = 0;
  totalVisitByPerson: number = 0;
  deckViewed: string;
  dateOfDeckViewed: any;
  startTime: any;
  endTime: any;
  email: string;
  isOpened:boolean;
  constructor(private route: ActivatedRoute, private http: HttpClient,
    private router: Router, private dataService: DataService, public datepipe: DatePipe) { }

  ngOnInit() {
    console.log("deck");
      this.route.queryParams.subscribe(params => {
        this.email = params['email'];
        if (this.email) {
            this.deckViewed = "Sample";
            this.dateOfDeckViewed = this.datepipe.transform(new Date(), 'MMM d, yy, h:mm a z');
        }
        else {
          console.log("login from deck");
          this.router.navigateByUrl('salesforce/login');
        }
      })
    }

  diff(start, end) {
    
    var diff = end - start;
    var days = Math.floor(diff / (60 * 60 * 24 * 1000));
    var hours = Math.floor(diff / (60 * 60 * 1000)) - (days * 24);
    var minutes = Math.floor(diff / (60 * 1000)) - ((days * 24 * 60) + (hours * 60));
    var seconds = Math.floor(diff / 1000) - ((days * 24 * 60 * 60) + (hours * 60 * 60) + (minutes * 60));

    let difference = '';
    if (days > 0) {
      difference += (days === 1) ? `${days} day, ` : `${days} days, `;
    }

    if(hours > 0)
    {
      difference += (hours === 0 || hours === 1) ? `${hours} hr, ` : `${hours} hrs, `;
    }

    if(minutes > 0)
    {
      difference += (minutes === 0 || minutes === 1) ? `${minutes} min` : `${minutes} mins`;
    }
    
    difference += (seconds === 0 || seconds === 1) ? `${seconds} sec` : `${seconds} secs`;
    

    console.log("diff", difference);
    return difference;
  }

  stopTimer(){
    const time = this.diff(this.startTime, Date.now());
    console.log("endtime", Date.now());
    let requestBody = {
      "values": {
        "DeckViewed__c": this.deckViewed,
        "Email__c": this.email,
        "DateOfDeckViewed__c": new Date(this.dateOfDeckViewed),
        "Time__c": time,
        "Name": "Sample"
      }
    }
    console.log("time",requestBody);
    this.http.post(api.addSalesforceData, requestBody).subscribe(data => {
      console.log(data);
      alert("Activity Added");
    }), (error) => {
      console.log(error);
      alert("Error Occured");
    }
    this.isOpened = false;
  }


  startTimer(){
    console.log("start timer");
    this.startTime = Date.now();
    console.log("start timer", this.startTime);
    this.isOpened = true;

  }

  ngOnDestroy() {
    
  }
}