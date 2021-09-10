import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PoniesComponent } from './ponies/ponies.component';
import { RacesComponent } from './races/races.component';
import { LocationRacePipe } from './location-race.pipe';
import { RaceDetailComponent } from './race-detail/race-detail.component';
import { PonyDetailComponent } from './pony-detail/pony-detail.component';
import { AddPonyComponent } from './add-pony/add-pony.component';
import { MenuComponent } from './menu/menu.component';
import { AddRaceComponent } from './add-race/add-race.component';
import { AddPonyReactComponent } from './add-pony-react/add-pony-react.component';
import { HttpClientModule } from '@angular/common/http';

const ROUTES: Routes =[
  {path:'', component: PoniesComponent},
  {path:'races', component: RacesComponent},
  {path:'add-pony', component: AddPonyReactComponent},
  {path:'update-pony/:id', component: AddPonyComponent},
  {path:'add-race', component: AddRaceComponent},
  {path:'update-race/:id', component: AddRaceComponent},
];

@NgModule({
  declarations: [
    AppComponent,
    PoniesComponent,
    RacesComponent,
    LocationRacePipe,
    RaceDetailComponent,
    PonyDetailComponent,
    AddPonyComponent,
    MenuComponent,
    AddRaceComponent,
    AddPonyReactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot(ROUTES),
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
