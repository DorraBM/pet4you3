import { TeamComponent } from './team/team.component';
import { Error404Component } from './error404/error404.component';
import { AccueilComponent } from './accueil/accueil.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateAnonceComponent } from './create-anonce/create-anonce.component';
import { AnnonceComponent } from './annonce/annonce.component';
import { MoreAdopComponent } from './more-adop/more-adop.component';
import { MoreAccoupComponent } from './more-accoup/more-accoup.component';

const routes: Routes = [
  {path:'accueil',component:AccueilComponent},
  {path:'annonce',component:AnnonceComponent},
  {path:'ajouter',component:CreateAnonceComponent},
  {path:'team',component:TeamComponent},
  {path:'plusAdop',component:MoreAdopComponent},
  {path:'plusAccoup',component:MoreAccoupComponent},
  {path:'',redirectTo:'accueil',pathMatch:'full'},
  {path:'**',component:Error404Component}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
