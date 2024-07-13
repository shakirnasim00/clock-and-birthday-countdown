const myBirthday = new Date("2024-11-23 00:00").getTime();

const milliseconds6Months = 6 * 30.44 * 24 * 60 * 60 * 1000;

const milliseconds30Days =  30.44 * 24 * 60 * 60 * 1000;

const elements = document.getElementsByClassName("unit-container");

// updates every second with the correct time information
var update = setInterval(function() {

    //Get the time and date of Today, right now, and finding the difference.
    let now = new Date().getTime();

    let differenceOfDate =  myBirthday - now;

    // Time calculations 
    var days = Math.floor(differenceOfDate / (1000 * 60 * 60 * 24));
    var hours = Math.floor((differenceOfDate % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((differenceOfDate % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((differenceOfDate % (1000 * 60)) / 1000);

    //Putting the time to display into the correct divs
  document.getElementById("countdown-timer-days").innerHTML = days;
  document.getElementById("countdown-timer-hours").innerHTML = hours;
  document.getElementById("countdown-timer-minutes").innerHTML = minutes;
  document.getElementById("countdown-timer-seconds").innerHTML = seconds;

  for (let element of elements) { //For loop to run through each element of the class("unit-container") and edit multiple elements
    if (differenceOfDate < milliseconds30Days) {
        element.style.color = "red";
    } else if (differenceOfDate < (milliseconds30Days * 6) && differenceOfDate >= milliseconds30Days) {
        element.style.color = "green";
    } else {
        element.style.color = "blue";
    }
}

}, 1000)


