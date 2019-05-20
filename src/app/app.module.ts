import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HuntingModule } from './components/hunting/hunting.module';
import { GatheringModule } from './components/gathering/gathering.module';
import { TravelingModule } from './components/traveling/traveling.module';
import { ExcavatingModule } from './components/excavating/excavating.module';
import { BreedingModule } from './components/breeding/breeding.module';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { WelcomeModule } from './components/welcome/welcome.module';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HuntingModule,
    GatheringModule,
    TravelingModule,
    ExcavatingModule,
    BreedingModule,
    WelcomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
