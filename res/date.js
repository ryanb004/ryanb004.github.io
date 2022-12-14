// JavaScript Document

const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];

const nth = function(d) {
    if (d > 3 && d < 21) return 'th';
    switch (d % 10) {
        case 1:  return "st";
        case 2:  return "nd";
        case 3:  return "rd";
        default: return "th";
    }
};



let english1 = new Date('2022-10-12T09:50');
let english2 = new Date('10/13/2022');
let ext2 = new Date('10/20/2022');
let ext1 = new Date('10/24/2022');
let multimedia = new Date('10/28/2022');
let chemistry = new Date('10/31/2022');
let test;
let date = new Date();
var current_date = date.getDate()+"-"+(date.getMonth()+1)+"-"+date.getFullYear();
document.getElementById("p1").innerHTML = current_date +" " +english1;
if (english1 > date) {test = english1; 
document.getElementById("p1").innerHTML = "English Paper 1"+" "+ (weekday[test.getDay()] + " " + test.getDate()+nth(test.getDate) + " " + test.toLocaleString('default', { month: 'long' })+" at 9:50AM")}
else if (english2 > date) {test = english2; 
document.getElementById("p1").innerHTML = "English Paper 2"+" "+ (weekday[test.getDay()] + " " + test.getDate()+nth(test.getDate) + " " + test.toLocaleString('default', { month: 'long' }))+" at 9:25AM"}
else if (ext2 > date) {test = ext2; 
document.getElementById("p1").innerHTML = "Maths Extension 2"+" "+ (weekday[test.getDay()] + " " + test.getDate()+nth(test.getDate) + " " + test.toLocaleString('default', { month: 'long' })+ " at 1:50PM")}
else if (ext1 > date) {test = ext1;
document.getElementById("p1").innerHTML = "Maths Extension 1"+" "+ (weekday[test.getDay()] + " " + test.getDate()+nth(test.getDate) + " " + test.toLocaleString('default', { month: 'long' })+" at 9:30AM")}
else if (multimedia > date) {test = multimedia; 
document.getElementById("p1").innerHTML = "Multimedia"+" "+ (weekday[test.getDay()] + " " + test.getDate()+nth(test.getDate) + " " + test.toLocaleString('default', { month: 'long' })+" at 9:25AM")}
else if (chemistry > date) {test = chemistry; 
document.getElementById("p1").innerHTML = "Chemistry"+" "+ (weekday[test.getDay()] + " " + test.getDate()+nth(test.getDate) + " " + test.toLocaleString('default', { month: 'long' })+" at 9:25AM")}
else {document.getElementByID("p1").innerHTML = "All done!"}