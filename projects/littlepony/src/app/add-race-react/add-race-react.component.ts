import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Race } from '../race';
import { RaceService } from '../race-service';

@Component({
  selector: 'app-add-race-react',
  templateUrl: './add-race-react.component.html',
  styleUrls: ['./add-race-react.component.css']
})
export class AddRaceReactComponent implements OnInit {

  raceForm = this.fb.group({
    location: ['', Validators.required],
    date: ['', Validators.required],
    name: ['', Validators.required],
    poniesBool: [Boolean, Validators.required]
  });

  constructor(private fb: FormBuilder, private router:Router, private raceServcice: RaceService) { }

  ngOnInit(): void {
  }
  onSubmit() : void{
    let res: Race = this.raceForm.value;
    this.raceServcice.addRace(res);
    this.router.navigate(['']);
  }
}
