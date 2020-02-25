import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PatientNoteComponent } from './patient-note/patient-note.component';
import { PatientExamineComponent } from './patient-examine/patient-examine.component';


const routes: Routes = [
  {
    path:'',
    redirectTo:'patientnote',
    pathMatch:'full'
  },{
    path:'patientnote',
    component:PatientNoteComponent
  },
  {
    path:'patientexamine',
    component:PatientExamineComponent
  },
  {
    path:'**',
    redirectTo:'patientnote'
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
