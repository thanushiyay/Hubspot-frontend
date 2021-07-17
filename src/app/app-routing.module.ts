import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent as HBHomeComponent } from './HubSpotContainers/home/home.component';
import {DeckComponent} from './HubSpotContainers/deck/deck.component';
import { LoginComponent } from './HubSpotContainers/login/login.component';
import { SurveryDeckComponent } from './HubSpotContainers/survery-deck/survery-deck.component';

import { HomeComponent as SalesForceHomeComponent } from './SalesforceContainers/home/home.component';
import {DeckComponent as SalesFroceDeckComponent} from './SalesforceContainers/deck/deck.component';
import { LoginComponent as SalesFroceLoginComponent } from './SalesforceContainers/login/login.component';
import { SurveryDeckComponent  as SalesForceSurveyDeckComponent } from './SalesforceContainers/survery-deck/survery-deck.component';

const routes: Routes = [
  { path: '', redirectTo: 'salesforce/home', pathMatch: 'full' },
  { path: 'hubspot/home', component: HBHomeComponent, pathMatch: 'full' },
  { path: 'hubspot/login', component: LoginComponent, pathMatch: 'full' },
  { path: 'hubspot/deck', component: DeckComponent},
  { path: 'hubspot/survey', component: SurveryDeckComponent},

  { path: 'salesforce/home', component: SalesForceHomeComponent, pathMatch: 'full' },
  { path: 'salesforce/login', component: SalesFroceLoginComponent, pathMatch: 'full' },
  { path: 'salesforce/deck', component: SalesFroceDeckComponent},
  { path: 'salesforce/survey', component: SalesForceSurveyDeckComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
