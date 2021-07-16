import { Component, OnInit, OnDestroy } from '@angular/core';
import * as countapi from 'countapi-js';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { api } from 'src/environments/environment';
import { DataService } from 'src/app/services/data.service';
import { DatePipe } from '@angular/common'


@Component({
  selector: 'app-survery-deck',
  templateUrl: './survery-deck.component.html',
  styleUrls: ['./survery-deck.component.scss']
})
export class SurveryDeckComponent implements OnInit {

  totalVisit: number = 0;
  totalVisitByPerson: number = 0;
  deckViewed: string;
  completionDate: any;
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
            this.deckViewed = "AirDeck Survey";
            this.completionDate = this.datepipe.transform(new Date(), 'MMM d, yy, h:mm a z');
        }
        else {
          this.router.navigate(['login']);
        }
      })
    }

  navigate() {
    console.log('navigate');
    this.router.navigateByUrl('/deckview');
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
        "3": this.deckViewed,
        "2": this.email,
        "4": this.completionDate,
        "5": time
      }
    }
    console.log("time",time);
    this.http.post(api.addSurvey, requestBody).subscribe(data => {
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
