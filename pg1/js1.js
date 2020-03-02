   /*
notes:
make a clock face
button dies

make coundown clock that sets time for the amount it is pressed down

*/ 




function showTime(){
  var date = new Date();
  var h = date.getHours();
  var m = date.getMinutes(); 
  var s = date.getSeconds();
  var time = "AM";

  if(h == 0){
      h = 12;
  }

  if(h > 12){
      h = h - 12;
      time = "PM"; 
  }


  h = (h < 10) ? "0" + h : h;
  m = (m < 10) ? "0" + m : m;
  s = (s < 10) ? "0" + s : s;

  var time = h + ":" + m + ":" + s + " " + time;
  document.getElementById("javascropt").innerText = time;
  document.getElementById("javascropt").textContent = time;

  setTimeout(showTime, 1000);

}

showTime();


function button() {

  alert("this is the end of the presentation.");

}


/*
MAIN CODE

function updateClock() {


var currentTime = new Date();

//declare variables for the clock
var currentHour = currentTime.getHours ();
var currentMinute = currentTime.getMinutes ();
var currentSecond = currentTime.getSeconds ();
//var currentMilisecond = currentTime.getMiliseconds ();

currentMinute = (currentMinute < 10 ? "0" : "") + currentMinute;
currentSecond = (currentSecond < 10 ? "0" : "") + currentSecond;
//currentMilisecond = (currentMilisecond < 10 ? "0" : "") + currentMilisecond;


//shorthand if statement.
//if condition is true, it returns the value before the colon.
//if condition is false, it returns the value after the colon.
var timeOfDay = ( currentHour < 12 ) ? "AM" : "PM";
currentHour = ( currentHour > 12 ) ? currentHour	- 12 : currentHour;
currentHour	= ( currentHour	== 0 ) ? 12 : currentHour;

//This is what the user sees
//ex: Hour:Minute:Second:Milisecond AM/PM
var currentTimeString = currentHour + ":" + currentMinute + ":" + currentSecond + /*":" + currentMilisecond +*/// " " + timeOfDay;

//shows the clock in index.html
//document.getElementById("clock").firstChild.nodeValue = currentTimeString;
/*document.getElementById("clock").firstChild.nodeValue = currentTimeString;


}

*/
/************************************************




function updateClock ( )
{
  var currentTime = new Date ( );

  var currentHours = currentTime.getHours ( );
  var currentMinutes = currentTime.getMinutes ( );
  var currentSeconds = currentTime.getSeconds ( );

  // Pad the minutes and seconds with leading zeros, if required
  currentMinutes = ( currentMinutes < 10 ? "0" : "" ) + currentMinutes;
  currentSeconds = ( currentSeconds < 10 ? "0" : "" ) + currentSeconds;

  // Choose either "AM" or "PM" as appropriate
  var timeOfDay = ( currentHours < 12 ) ? "Agit commit  : "PM";

  // Convert the hours component to 12-hour git commit rmat if needed
  currentHours = ( currentHours > 12 ) ? curgit commit ntHours - 12 : currentHours;

  // Convert an hours component of "0" to "1git commit 
  currentHours = ( currentHours == 0 ) ? 12 git commit currentHours;

  // Compose the string for display
  var currentTimeString = currentHours + ":"git commit  currentMinutes + ":" + currentSeconds + " " + timeOfDay;

  // Update the time display
  document.getElementById("clock").firstChilgit commit nodeValue = currentTimeString;
}


****************************************************************************/