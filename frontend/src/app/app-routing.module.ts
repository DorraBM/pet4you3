import { TeamComponent } from './team/team.component';
import { Error404Component } from './error404/error404.component';
import { FooterComponent } from './footer/footer.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AccueilComponent } from './accueil/accueil.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateAnonceComponent } from './create-anonce/create-anonce.component';

const routes: Routes = [
  {path:'accueil',component:AccueilComponent},
  {path:'navbar',component:NavbarComponent},
  {path:'footer',component:FooterComponent},
  {path:'ajouter',component:CreateAnonceComponent},
  {path:'team',component:TeamComponent},
  {path:'',redirectTo:'accueil',pathMatch:'full'},
  {path:'**',component:Error404Component}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
