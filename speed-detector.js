//This part asks for the speed of the car.
"use strict";
const ps = require("prompt-sync");
const prompt = ps();

let speed = prompt("Enter the speed of your car in km/h:")
calculateDemeritPoints(speed);

//This part calculates whether the driver has passed the speed limit and if they have it gives them demerit points.
//It then checks if the demerit points are more than 12, then the driver's lisense is suspended.
function calculateDemeritPoints(speed) {
    const speedLimit = 70;
    let demeritPoints = 0;
  
    if (speed <= speedLimit) {
      console.log("Ok");
    } else {
      demeritPoints = Math.floor((speed - speedLimit) / 5);
  
      if (demeritPoints > 12) {
        console.log("License suspended");
      } else {
        console.log("Points: " + demeritPoints);
      }
    }
  }
  

  