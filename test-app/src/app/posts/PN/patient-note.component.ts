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
     
this.postsService.addPost(form.value.title, form.value.content);
form.resetForm();
    }
}