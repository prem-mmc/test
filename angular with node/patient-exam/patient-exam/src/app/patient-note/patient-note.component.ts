import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import {Router} from '@angular/router';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http'
import {  PatnserviceService } from '../patnservice.service'
import { FormBuilder, FormGroup, FormArray, FormControl, Validators } from '@angular/forms';
import {MDCTextField} from '@material/textfield';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import * as $ from 'jquery';
// const baseUrl = 'http://localhost:4202';
@Component({
  selector: 'app-patient-note',
  templateUrl: './patient-note.component.html',
  styleUrls: ['./patient-note.component.css']
})



export class PatientNoteComponent implements OnInit {
  [x: string]: any;
 
  @ViewChild('mTextArea',{static:true}) public mTextArea: ElementRef;
  Linecount: number;
  Linecount1
  mytexthistory = "";
  disableTextbox: boolean = true;
  myTextarea: any;
  pressEnter: boolean;
  maxlength: any;
  maxLineLength: number;
  myTextcommants = "";
  myTextcommants1="";
  

  constructor(private  router: Router,private patnoteservice:PatnserviceService) { }
  patientSection:FormGroup
  ngOnInit() {
    // this.patnoteservice.sendGetRequest().subscribe((data: any[])=>{
    //   console.log(data);
    //   this.patientSection = data;
    // })
    
    this.myTimer()
    this.patientSection = new FormGroup({
      history:new FormControl(''),
      physicalExamination:new FormControl(''),
      diagnosis1: new FormGroup({
        historyFinding: new FormControl(''),
        historyFinding1: new FormControl(''),
        historyFinding2: new FormControl(''),
        historyFinding3: new FormControl(''),
        phyexamFinding1:new FormControl(''),
        phyexamFinding2:new FormControl(''),
        phyexamFinding3:new FormControl('')
      }),
      diagnosis2: new FormGroup({
        historyFinding: new FormControl(''),
        historyFinding1: new FormControl(''),
        historyFinding2: new FormControl(''),
        historyFinding3: new FormControl(''),
        phyexamFinding1:new FormControl(''),
        phyexamFinding2:new FormControl(''),
        phyexamFinding3:new FormControl('')
      }),
      diagnosis3: new FormGroup({
        historyFinding: new FormControl(''),
        historyFinding1: new FormControl(''),
        historyFinding2: new FormControl(''),
        historyFinding3: new FormControl(''),
        phyexamFinding1:new FormControl(''),
        phyexamFinding2:new FormControl(''),
        phyexamFinding3:new FormControl('')
      }),
      diagnosis4: new FormGroup({
        historyFinding1: new FormControl(''),
        historyFinding2: new FormControl(''),
        historyFinding3: new FormControl(''),
        
      })
    });
  }
  onSubmit(){
    // this.createAndStorePost()
  }


  // private baseUrl = environment.endPoint;
  private async request(method: string, url: string, data?: any) {
    

    console.log('request ' + JSON.stringify(data));
    const result = this.http.request(method, url, {
      body: data,
      responseType: 'json',
      observe: 'body',
      headers: new HttpHeaders({
        'Content-Type' : 'application/json'
      })
    });
    return new Promise<any>((resolve, reject) => {
      result.subscribe(resolve as any, reject as any);
    });
  }

  // getProducts() {
  //   return this.request('get', `${baseUrl}/patientnote`);
  // }

  // getProduct(id: string) {
  //   return this.request('get', `${baseUrl}/patientnote/${id}`);
  // }

  // createProduct() {
  //   console.log('createProduct ' + JSON.stringify(this.patientSection));
  //   return this.request('post', `${baseUrl}/patientnote`, this.patientSection);
  // }

  // updateProduct() {
  //   console.log('updateProduct ' + JSON.stringify(this.patientSection));
  //   return this.request('post', `${baseUrl}/product/${product.id}`, product);
  // }

  // deleteProduct(id: string) {
  //   return this.request('delete', `${baseUrl}/product/${id}`);
  // }
// createAndStorePost() {
//   // const postData: Post = { title: title, content: content };
//   // Send Http request
//   this.http
//     .post(
//       'http://localhost:3006/api/posts',
//       JSON.stringify(this.patientSection)
//     )
//     .subscribe(
//       responseData => {
//         console.log(responseData);
//       },
//       error => {
//         this.error.next(error.message);
//       }
//     );
// }
  public checkStuff(pyexamine) {

    console.log('mTextArea is:',pyexamine);
    console.log(this.mTextArea);
  }
  generatePDF(){
    console.log(this.patientSection)
  }



  
  onKeydown(event) {
     if (event.key === "Enter") {
       this.pressEnter = true;
       this.maxlength += this.maxLineLength + 1;
     }
     else {
       this.pressEnter = false;
     }
  }
  
  handleTextareaChange(text) {
  
     var mainString = text;
     var allLines = mainString.split("\n");
  
     var len = mainString.length;
     var numberOfLines = allLines.length;
     var indexOfCurrentLine = allLines.length - 1;
  
     var previousLines = "";
     for (var i = 0; i < indexOfCurrentLine; i++) {
       previousLines += allLines[i];
     }
  }

  maxTextLineLength: number = 50;
  onKeyAction() {
      if (this.myTextarea) {
        var lines = this.myTextarea.split(/(\r\n|\n|\r)/gm);
        for (var i = 0; i < lines.length; i++) {
          if (lines[i].length >= this.maxTextLineLength) {
            lines[i] = lines[i].substring(0, this.maxTextLineLength);
          }
        }
        this.myTextarea = lines.join('');
      }
  }
////////////////////////////////////////////
// process(ta){
//   var maxLines = 15,maxCols=70;
// var ratLines = (this.Linecount/maxLines);
// var perLines = ((this.Linecount)/maxLines)*100;
// var perChars = (ta.length/maxCols);
// // console.log(perLines,"wertyui",ratLines);
//   // $(pb).css('background-image','url("pics/progress.png")');.addClass(".processed1")
// $("#txtComments_progressbar").css('background','url("pics/progress.png") 5');
// if (perLines > perChars) {
//   $("#txtComments_progressbar").animate({'width': perLines+'%'}, 1);
// }
// // else if(Math.round(perLines) === 100){
// //   $("#txtComments_progressbar").animate({'width': '100%'}, 1);
// // } 
// else  {
//   $("#txtComments_progressbar").animate({'width': perChars+'px'}, 1); 
//   // var charsCountfield = myTxt.getAttribute("name") + "_Chars";
//   // var linesCountfield = myTxt.getAttribute("name") + "_Lines";
//   // var pbfield = myTxt.getAttribute("name") + "_progressbar";
//   // countChars=document.getElementById(charsCountfield);
//   // countLines=document.getElementById(linesCountfield);
//   // pb=document.getElementById(pbfield);
// }

}
// textchg(ta){
//   // console.log("kasjnsajsa",ta);
//   this.process(ta);
//   // check new line
//   // if it's inc line count 
//   // define var linecount 
//   // ta.value.split
//   // last value of char ( if it's \n
//   // lessthan 15
//   // else continue
//   // r
//   var numberOfLines;
//   var calculateContentHeight = ( ta, scanAmount ) => {
//     var origHeight = ta.style.height,
//         height = ta.offsetHeight,
//         scrollHeight = ta.scrollHeight,
//         overflow = ta.style.overflow;
//     /// only bother if the ta is bigger than content
//     if ( height >= scrollHeight ) {
//         /// check that our browser supports changing dimension
//         /// calculations mid-way through a function call...
//         ta.style.height = (height + scanAmount) + 'px';
//         /// because the scrollbar can cause calculation problems
//         ta.style.overflow = 'hidden';
//         /// by checking that scrollHeight has updated
//         if ( scrollHeight < ta.scrollHeight ) {
//             /// now try and scan the ta's height downwards
//             /// until scrollHeight becomes larger than height
//             while (ta.offsetHeight >= ta.scrollHeight) {
//                 ta.style.height = (height -= scanAmount)+'px';
//             }
//             /// be more specific to get the exact height
//             while (ta.offsetHeight < ta.scrollHeight) {
//                 ta.style.height = (height++)+'px';
//             }
//             /// reset the ta back to it's original height
//             ta.style.height = origHeight;
//             /// put the overflow back
//             ta.style.overflow = overflow;
//             return height;
//         }
//     } else {
//         return scrollHeight;
//     }
// }
// var calculateHeight = () => {
//   // debugger;
//     var ta = document.getElementById("ta"),
//         style = (window.getComputedStyle) ?
//             window.getComputedStyle(ta) : document.getElementById("ta").style,
//         // This will get the line-height only if it is set in the css,
//         // otherwise it's "normal"
//        taLineHeight = parseInt(style.lineHeight, 10),
//         // Get the scroll height of the textarea
//         taHeight = calculateContentHeight(ta, taLineHeight);
//         console.log(taHeight,taLineHeight);
//         // calculate the number of lines
//         // numberOfLines = Math.ceil(taHeight / taLineHeight);
//         numberOfLines = Math.floor(taHeight / taLineHeight);
//         // [Math.floor(Math.random()*ta.value.length)]
//         // this.process(ta);
            
// }

// calculateHeight();
// this.Linecount >= 15 ? document.getElementById("txtalert").innerHTML = "you have reached the character or  line limit": '';
// if(this.Linecount >= 15){
  
//   // console.log(this.myTextcommants,"nnnnnnnnnnnnnnnnnnnnnnnnnnnnn");
//   // this.textchg(ta);
//   // if(ta.value == '\n'){

//   // }
//   // this.eventhander(this.myTextcommants);

//   // var a = parseInt(ta.split(/\n/g).length,10);
//   // console.log(a);              
//   // if(a >=3){
//   //   // ta.myText.value = ta.myText.value.join('\n'," ");
//   //   console.log(ta.value,"gggggggggggggggggggggggggg");
//   // }


// }else{

//   this.Linecount = numberOfLines;

// }

//   // debugger;
// if (ta.addEventListener) {
 
//     ta.addEventListener("mouseup", calculateHeight(), false);
//     ta.addEventListener("keyup", calculateHeight(), false);
//     ta.addEventListener("keydown", calculateHeight(), false);
// } else if (ta.attachEvent) { // IE
//     ta.attachEvent("onmouseup", calculateHeight());
//     ta.attachEvent("onkeyup", calculateHeight());
//     ta.attachEvent("onkeydown", calculateHeight());
// }

// }

  

// /////////////////////////////////////////
// limit(ta) {
//     if(this.mytexthistory.length < 15){
//       ta.value.slice('\n');
//     }
  
//   }
//   ////////////////////////////////////////for disable the text area
//   textenable(){
//     // console.log(this.disableTextbox,"sertgy");
//     this.disableTextbox = !this.disableTextbox;
//     var x = document.getElementById('ta').innerText ;
    
    
//   }
//   textalert(this){
//     return this.style.display = "none";
//   }
// //////////////////////////////////////////////////
// //////////////////////////////////////////////////////physical_examine
// process1(ta){
//   var maxLines = 15,maxChars=70;
// var ratLines = (this.Linecount1/maxLines);
// var perLines = ((this.Linecount1)/maxLines)*100;
// var perChars = (ta.length/maxChars);
//   // $(pb).css('background-image','url("pics/progress.png")');.addClass(".processed1")
// $("#txtComments_progressbar1").css('background','url("pics/progress.png") 5');
// if (perLines > perChars) {
//   $("#txtComments_progressbar1").animate({'width': perLines+'%'}, 1);
// }else if(Math.round(perLines) === 93){
//   $("#txtComments_progressbar1").animate({'width': '100%'}, 1);
// } 
// else  {
//   $("#txtComments_progressbar1").animate({'width': perChars+'px'}, 1); 
//   // var charsCountfield = myTxt.getAttribute("name") + "_Chars";
//   // var linesCountfield = myTxt.getAttribute("name") + "_Lines";
//   // var pbfield = myTxt.getAttribute("name") + "_progressbar";
//   // countChars=document.getElementById(charsCountfield);
//   // countLines=document.getElementById(linesCountfield);
//   // pb=document.getElementById(pbfield);
// }

// }
///////////////////////

// textchg1(ta){
  // console.log("kasjnsajsa",ta)
  // check new line
  // if it's inc line count 
  // define var linecount 
  // ta.value.split
  // last value of char ( if it's \n
  // lessthan 15
  // else continue
  // r
//   var numberOfLines1;
//   var calculateContentHeight = function( ta, scanAmount ) {
//     var origHeight = ta.style.height,
//         height = ta.offsetHeight,
//         scrollHeight = ta.scrollHeight,
//         overflow = ta.style.overflow;
//     /// only bother if the ta is bigger than content
//     if ( height >= scrollHeight ) {
//         /// check that our browser supports changing dimension
//         /// calculations mid-way through a function call...
//         ta.style.height = (height + scanAmount) + 'px';
//         /// because the scrollbar can cause calculation problems
//         ta.style.overflow = 'hidden';
//         /// by checking that scrollHeight has updated
//         if ( scrollHeight < ta.scrollHeight ) {
//             /// now try and scan the ta's height downwards
//             /// until scrollHeight becomes larger than height
//             while (ta.offsetHeight >= ta.scrollHeight) {
//                 ta.style.height = (height -= scanAmount)+'px';
//             }
//             /// be more specific to get the exact height
//             while (ta.offsetHeight < ta.scrollHeight) {
//                 ta.style.height = (height++)+'px';
//             }
//             /// reset the ta back to it's original height
//             ta.style.height = origHeight;
//             /// put the overflow back
//             ta.style.overflow = overflow;
//             return height;
//         }
//     } else {
//         return scrollHeight;
//     }
// }
// var calculateHeight = function() {
//   // debugger;
//     var ta = document.getElementById("ta1"),
//         style = (window.getComputedStyle) ?
//             window.getComputedStyle(ta) : document.getElementById("ta1").style,
//         // This will get the line-height only if it is set in the css,
//         // otherwise it's "normal"
//        taLineHeight = parseInt(style.lineHeight, 10),
//         // Get the scroll height of the textarea
//         taHeight = calculateContentHeight(ta, taLineHeight);
//         // calculate the number of lines
//         // numberOfLines = Math.ceil(taHeight / taLineHeight);
//         numberOfLines1 = Math.floor(taHeight / taLineHeight);
//         // [Math.floor(Math.random()*ta.value.length)]
        
          
// }

// calculateHeight();
// this.Linecount1 >= 15 ? document.getElementById("txtalert").innerHTML = "you have reached the character or  line limit":'';
// if(this.Linecount1 >= 15){
  
//   // console.log(this.myTextcommants1,"nnnnnnnnnnnnnnnnnnnnnnnnnnnnn");
//   // ta.addEventListener("keyup", calculateHeight(), true);

//   var a = parseInt(ta.split(/\n/g).length,10);
  


// }else{
  
//   // document.getElementById("lines").innerHTML = "Line : " + numberOfLines +"/15";
//   // this.texts = ta.target.value
//   this.Linecount1 = numberOfLines1;
//   // console.log(numberOfLines1);
//   // console.log(this.Linecount1);
// }
// this.process1(ta);
// // this.eventhander(ta);
//   // debugger;
//   if (ta.addEventListener) {
//     // debugger;
//     ta.addEventListener("mouseup", calculateHeight(), false);
//     ta.addEventListener("keyup", calculateHeight(), false);
//     ta.addEventListener("keydown", calculateHeight(), false);
// } else if (ta.attachEvent) { // IE
//     ta.attachEvent("onmouseup", calculateHeight());
//     ta.attachEvent("onkeyup", calculateHeight());
//     ta.attachEvent("onkeydown", calculateHeight());
// }

// }

//////////////////////////////////////////////
//*******************timer****************************** */

// startTimer(duration, display) {
//   var timer = duration, minutes, seconds,m,s;
//   var a = document.getElementById("form_active");
//   // if( a.className=== false){

//   var interval =  setInterval( ()=> {
//     // console.log(typeof(timer));
//     m = timer / 60;
//     s = timer % 60;
//       minutes = parseInt(m, 10)
//       seconds = parseInt(s, 10);
// // console.log(minutes,seconds);
//       minutes = minutes < 10 ? "0" + minutes : minutes;
//       seconds = seconds < 10 ? "0" + seconds : seconds;
// // console.log(minutes,seconds);
//       display.textContent = minutes + ":" + seconds;
//       if(minutes < 2){
//       display.style="background:yellow;color:black;";
//       }
//       // console.log(timer);
//       if (--timer < 0) {
//           timer = duration;
//           // console.log(timer);
//       }

//       if(timer == 0){
//         // this.redirect();
//     this.popup();
//         // stoptime(){
//           clearInterval(interval);
//           //document.getElementById('dash').innerHTML = `<app-dashboard></app-dashboard>`;
//           // this.router.navigate(['/dashboard'])
//           // this.router.navigate(['/dashboard']);
//         // }
//         a.className = "deactive";
//         // console.log(timer,"11111111111111111kmnjbgtvfrxs");
//         // this.onSubmit();
//       }
//   }, 1000);
// }
// /////////////////////for redirection
// // redirect(){
// //   this.router.navigate(['/dashboard']);
// // }
// popup(){

// }
// ///////////////////////////////////////
// myTimer() {
//   var TenMinutes = 60 * 10,
//   display = document.querySelector('#time');
//   // setTimeout(() => {
//     this.startTimer(TenMinutes, display);
//   // }, TenMinutes);
//   }
//////////////////////////////********************* */

// }
