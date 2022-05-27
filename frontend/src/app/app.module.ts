import { TeamComponent } from './team/team.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { AccueilComponent } from './accueil/accueil.component';
import { Error404Component } from './error404/error404.component';
import {HttpClientModule} from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CreateAnonceComponent } from './create-anonce/create-anonce.component';
import { AnnonceComponent } from './annonce/annonce.component';
import { CarousselComponent } from './caroussel/caroussel.component';
import { MoreAdopComponent } from './more-adop/more-adop.component';
import { MoreAccoupComponent } from './more-accoup/more-accoup.component';



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    AccueilComponent,
    Error404Component,
    CreateAnonceComponent,
    AnnonceComponent,
    TeamComponent,
    CarousselComponent,
    MoreAdopComponent,
    MoreAccoupComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
