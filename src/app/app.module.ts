import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HeaderComponent } from './HubSpotContainers/header/header.component';
import { HeaderComponent  as SalesForceHeader} from './SalesForceContainers/header/header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material';
import { MatSortModule } from '@angular/material/sort';
import { HomeComponent } from './HubSpotContainers/home/home.component';
import { DeckComponent } from './HubSpotContainers/deck/deck.component';
import { LoginComponent } from './HubSpotContainers/login/login.component';
import { AuthGuard } from './services/authGaurd.service';
import { DatePipe } from '@angular/common';
import { SurveryDeckComponent } from './HubSpotContainers/survery-deck/survery-deck.component';
// import * as hubspot from '@hubspot/api-client';

import { HomeComponent as SalesForceHomeComponent } from './SalesforceContainers/home/home.component';
import {DeckComponent as SalesFroceDeckComponent} from './SalesforceContainers/deck/deck.component';
import { LoginComponent as SalesFroceLoginComponent } from './SalesforceContainers/login/login.component';
import { SurveryDeckComponent  as SalesForceSurveyDeckComponent } from './SalesforceContainers/survery-deck/survery-deck.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    DeckComponent,
    LoginComponent,
    SurveryDeckComponent,
    SalesForceHomeComponent,
    SalesFroceDeckComponent,
    SalesFroceLoginComponent,
    SalesForceSurveyDeckComponent,
    SalesForceHeader
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatPaginatorModule,
    MatButtonModule,
    MatDialogModule,
    MatSortModule
  ],

  providers: [AuthGuard, DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
