import { Component, EventEmitter } from '@angular/core';


import { NgForm } from "@angular/forms";
import { PostsService } from '../posts.service';
@Component({
    selector: 'app-patient-note',
  templateUrl: './patient-note.component.html',
  styleUrls: ['./patient-note.component.css']
})

export class PatientNote {
    enteredTitle='';
    enteredContent='';
    
   
   constructor(public postsService: PostsService) {}
    onAddPost(form: NgForm){
        if(form.invalid){
            return;
        }
     
this.postsService.addPost(
    form.value.title, form.value.content, form.value.diag,
 form.value.his_fin_1_1, form.value.his_fin_1_2, form.value.his_fin_1_3,
 form.value.phy_ex_1_1, form.value.phy_ex_1_2, form.value.phy_ex_1_3,

 form.value.diag2,
 form.value.his_fin_2_1, form.value.his_fin_2_2, form.value.his_fin_2_3,
 form.value.phy_ex_2_1, form.value.phy_ex_2_2, form.value.phy_ex_2_3,

 form.value.diag3,
 form.value.his_fin_3_1, form.value.his_fin_3_2, form.value.his_fin_3_3,
 form.value.phy_ex_3_1, form.value.phy_ex_3_2, form.value.phy_ex_3_3,

 form.value.diag_study1, form.value.diag_study2, form.value.diag_study3,
 form.value.email
   );
form.resetForm();
    }
}