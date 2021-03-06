import { Component, OnInit } from '@angular/core';
import { Pony } from '../pony';
import { PonyService } from '../pony.service';

@Component({
  selector: 'app-ponies',
  templateUrl: './ponies.component.html',
  styleUrls: ['./ponies.component.css']
})
export class PoniesComponent implements OnInit {

  ponies: Pony[] = [];

  constructor(private ponyService: PonyService) { 
    this.ponyService.getAllPonies().subscribe(p => this.ponies = p);
  }

  ngOnInit(): void {
  }

}
