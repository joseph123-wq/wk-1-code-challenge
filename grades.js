// This first part asks user to input their marks.
"use strict";
const ps = require("prompt-sync");
const prompt = ps();

let marks = prompt("Enter your marks:")

// This part checks the marks and assigns the student their grade.
if(marks>=0 && marks<40){
    console.log("F")
  }
  else if(marks>=40 && marks < 50){
    console.log("D")
  }
  else if(marks>=50 && marks < 60){
    console.log("C")
  }
  else if( marks>=60 && marks < 80){
    console.log("B")
  }
  else if( marks>=80 && marks <=100){ 
    console.log("A")
  }
  else{
    console.log("ERROR! INVALID MARKS!")
  }