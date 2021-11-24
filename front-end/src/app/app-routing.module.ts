import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home/home.component';
import { InscriptionComponent } from './inscription/inscription/inscription.component';
import { InscriptionErrorComponent } from './_redirect-error/form-error/inscription-error/inscription-error.component';

const routes: Routes = [
  {path:"home", component:HomeComponent},
  {path:"inscription", component:InscriptionComponent},
  {path:"inscriptionError", component:InscriptionErrorComponent},
  {path:"", redirectTo:"home", pathMatch:"full"},
  // {path:"**", component:NotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
