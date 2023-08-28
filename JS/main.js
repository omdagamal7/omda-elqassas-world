
"use strict";
// SELECTORS ELEMENTS
let day = document.querySelector("#days");
let hour = document.querySelector("#hours");
let minute = document.querySelector("#minutes");
let second = document.querySelector("#seconds");

// END DATE
let counterDownDate = new Date("Dec 31,2025 23:59:59").getTime()

// TIMER
let counter = setInterval(function(){

  // NOW DATE
  let dateNow = new Date().getTime();

  // DIFFRINT TIME BETWEEN END DATE & NOW DATE
  let dateDiff = counterDownDate - dateNow;

  //  GET DAYS
  let days = Math.floor(dateDiff / (1000 * 60 * 60 * 24));

  // GET HOURS
  let hours = Math.floor(dateDiff % (1000 * 60 * 60 * 24) / (1000 * 60 * 60));

  // GET MINUTES
  let minutes = Math.floor(dateDiff % (1000 * 60 * 60) / (1000 * 60));

  // GET SECONDS
  let seconds = Math.floor(dateDiff % (1000 * 60) / 1000)

  // SET SECONDS
  if(seconds >= 10) {
    second.innerHTML = seconds;
  } else {
    second.innerHTML = `0${seconds}`;
  }

  // SET MINUTES
  if(minutes >= 10){
    minute.innerHTML = minutes;
  }else {
    minute.innerHTML = `0${minutes}`;
  }

  // SET HOURS
  if(hours >= 10){
    hour.innerHTML = hours;
  }else {
    hour.innerHTML = `0${hours}`;
  }

  // SET DAYS
  if(days >= 10){
    day.innerHTML = days;
  }else {
    day.innerHTML = `0${days}`;
  }

},1000)

// ------   END ------