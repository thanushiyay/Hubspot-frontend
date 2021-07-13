import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HeaderComponent } from './header/header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material';
import { MatSortModule } from '@angular/material/sort';
import { HomeComponent } from './Containers/home/home.component';
import { DeckComponent } from './Containers/deck/deck.component';
import { LoginComponent } from './Containers/login/login.component';
import { AuthGuard } from './services/authGaurd.service';
import { DatePipe } from '@angular/common';
// import * as hubspot from '@hubspot/api-client';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    DeckComponent,
    LoginComponent
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
