import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { Route } from '@angular/router';

const routes: Routes = [
  
  {
    path: "", redirectTo: "pokemons", pathMatch:"full"
  },
  {
    path: "**", component: PageNotFoundComponent //tjr declarer en dernier
  }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
