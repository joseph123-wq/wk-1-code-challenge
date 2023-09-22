let grade = prompt("Please enter your grade");


if(grade>=0 && grade<40){
    console.log("F")
  }
  else if(grade>=40 && grade < 50){
    console.log("D")
  }
  else if(grade>=50 && grade < 60){
    console.log("C")
  }
  else if( grade>=60 && grade < 80){
    console.log("B")
  }
  else if( grade>=80 && grade <=100){ 
    console.log("A")
  }
  else{
    console.log("ERROR! INVALID GRADE!")
  }