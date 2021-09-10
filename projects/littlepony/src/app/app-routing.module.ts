import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PoniesComponent } from './ponies/ponies.component';
import { RacesComponent } from './races/races.component';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
