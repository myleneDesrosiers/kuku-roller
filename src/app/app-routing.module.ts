import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { HuntingComponent } from './components/hunting/hunting.component';
import { GatheringComponent } from './components/gathering/gathering.component';
import { ExcavatingComponent } from './components/excavating/excavating.component';
import { TravelingComponent } from './components/traveling/traveling.component';
import { BreedingComponent } from './components/breeding/breeding.component';
import { WelcomeComponent } from './components/welcome/welcome.component';

const routes: Routes = [
  { path: '', 
  component: WelcomeComponent,
  children: [
    {
      path: 'hunting',
      component: HuntingComponent
    },
    {
      path: 'gathering',
      component: GatheringComponent
    },
    {
      path: 'excavating',
      component: ExcavatingComponent
    },
    {
      path: 'traveling',
      component: TravelingComponent
    },
    {
      path: 'breeding',
      component: BreedingComponent
    }
  ] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
