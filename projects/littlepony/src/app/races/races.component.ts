import { Component, OnInit } from '@angular/core';
import { RACES } from '../mock.races';
import { Race } from '../race';
import { PrimeNGConfig } from 'primeng/api';

@Component({
  selector: 'app-races',
  templateUrl: './races.component.html',
  styleUrls: ['./races.component.css']
})
export class RacesComponent implements OnInit {
  races : Array<Race>;

  constructor(private primengConfig: PrimeNGConfig) {
    this.races = RACES;
   }

  ngOnInit(): void {
    // this.primengConfig.ripple = true;
    this.races
  }

}
