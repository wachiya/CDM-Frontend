import { Component, OnInit } from '@angular/core';
import { RouterLinkWithHref } from '@angular/router';
import { ReportsService } from '../reports.service';
import { PatientsService } from '../patients.service';

@Component({
  selector: 'app-reports',
  templateUrl: './reports.component.html',
  styleUrls: ['./reports.component.css']
})
export class ReportsComponent implements OnInit {

  output: any;
  reports: any;

  constructor(private reportsService: ReportsService) { }

  ngOnInit() {
    this.getMonthlyReport()
  }

  getMonthlyReport() {
    this.reportsService.getMonthlyReport()
      .subscribe((data) => this.output = data.report);
      }
}
