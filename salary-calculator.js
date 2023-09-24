//This part asks the user for their basic salary and benefits they earn.
"use strict";
const ps = require("prompt-sync");
const prompt = ps();

let basicSalary = prompt("Enter your salary:")
let benefits = prompt("Enter your benefits: ")




// This calculates the TAX of a citizen base on their basic salary.
function calculatePayee(basicSalary) {
    let payee = 0;
    if (basicSalary <= 24000) {
        payee = 0;
    } else if (basicSalary <= 32333) {
        payee = (basicSalary - 24000) * 0.1;
    } else if (basicSalary <= 48333) {
        payee = (basicSalary - 32333) * 0.15 + 833;
    } else if (basicSalary <= 60000) {
        payee = (basicSalary - 48333) * 0.2 + 2496;
    } else if (basicSalary <= 83333) {
        payee = (basicSalary - 60000) * 0.25 + 5833;
    } else {
        payee = (basicSalary - 83333) * 0.3 + 12458;
    }
    return payee;
}

// This function calculates how much a citizen will be deducted for NHIF according to their basic salary.
function calculateNHIF(basicSalary) {
    if (basicSalary <= 5999) {
        return 150;
    } else if (basicSalary <= 7999) {
        return 300;
    } else if (basicSalary <= 11999) {
        return 400;
    } else if (basicSalary <= 14999) {
        return 500;
    } else if (basicSalary <= 19999) {
        return 600;
    } else if (basicSalary <= 24999) {
        return 750;
    } else if (basicSalary <= 29999) {
        return 850;
    } else if (basicSalary <= 34999) {
        return 900;
    } else if (basicSalary <= 39999) {
        return 950;
    } else if (basicSalary <= 44999) {
        return 1000;
    } else if (basicSalary <= 49999) {
        return 1100;
    } else if (basicSalary <= 59999) {
        return 1200;
    } else if (basicSalary <= 69999) {
        return 1300;
    } else if (basicSalary <= 79999) {
        return 1400;
    } else if (basicSalary <= 89999) {
        return 1500;
    } else if (basicSalary <= 99999) {
        return 1600;
    } else {
        return 1700;
    }
}

// Function to calculate NSSF Deductions based on basic salary
function calculateNSSF(basicSalary) {
    const nssfRate = 0.06; 
    return basicSalary * nssfRate;
}

//This function calculates the Net slary based on all the deductions made to the basic salary
function calculateNetSalary(basicSalary, benefits) {
    const grossSalary = basicSalary + benefits;
    const payee = calculatePayee(grossSalary);
    const nhif = calculateNHIF(grossSalary);
    const nssf = calculateNSSF(basicSalary);
    const netSalary = grossSalary - payee - nhif - nssf;

    return {
        netSalary,
    };
}

const salary = calculateNetSalary(basicSalary, benefits);

console.log("Net Salary: " + salary.netSalary);