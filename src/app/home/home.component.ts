import { Component, OnInit } from '@angular/core';

import { PatientsService } from '../patients.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  output: any;  
  patients: any;
  searchTerm: any;

  constructor(private patientsService: PatientsService) { }

  ngOnInit() {
    this.getAllPatients()
  }

  getAllPatients() {
   // this.searchTerm=null;
    this.patientsService.getAllPatients()
      .subscribe((data) => this.output = data.patients);
  }
  searchPatients() {
    this.patientsService.searchPatients(this.searchTerm)
      .subscribe((data) => this.output = data.patients);
  }
}
