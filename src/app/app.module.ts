import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { DatePipe } from '@angular/common';
import { AgePipe } from './age.pipe';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ReportsComponent } from './reports/reports.component';
import { PatientsService } from './patients.service';
import { FormatWidth } from '@angular/common';



@NgModule({
  declarations: [
    AgePipe,
    AppComponent,
    HomeComponent,
    ReportsComponent,
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [PatientsService, DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
