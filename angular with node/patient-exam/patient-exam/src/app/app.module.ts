import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// import {ActivatedRoute} from '@angular/router';
import { FormsModule,ReactiveFormsModule } from '@angular/forms'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PatientNoteComponent } from './patient-note/patient-note.component';
import { PatientExamineComponent } from './patient-examine/patient-examine.component';
import { HeaderComponent } from './header/header.component';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { TexthistoryDirective } from './directive/texthistory.directive';
import { TextpysexamDirective } from './directive/textpysexam.directive';
import { TimercountDirective } from './directive/timercount.directive';



@NgModule({
  declarations: [
    AppComponent,
    PatientNoteComponent,
    PatientExamineComponent,
    HeaderComponent,
    TexthistoryDirective,
    TextpysexamDirective,
    TimercountDirective,
    

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,

    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
