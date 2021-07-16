import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './Containers/home/home.component';
import {DeckComponent} from './Containers/deck/deck.component';
import { LoginComponent } from './Containers/login/login.component';
import { AuthGuard } from './services/authGaurd.service';
import { SurveryDeckComponent } from './Containers/survery-deck/survery-deck.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent, pathMatch: 'full' },
  { path: 'login', component: LoginComponent, pathMatch: 'full' },
  { path: 'deck', component: DeckComponent},
  { path: 'survey', component: SurveryDeckComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
