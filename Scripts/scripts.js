// Set the date we're counting down to
var programmingassessment2date = new Date("May 3, 2019 17:00:00").getTime();
var ProgrammingAssessment3date = new Date("Friday, 7 June 2019, 17:00").getTime();
var IntroToMobile2date = new Date("Tuesday, 11 June 2019 08:15:00").getTime();
var IntrotoData1 = new Date("Friday, 24 May 2019 8:15:00").getTime();
var IntrotoData2 = new Date("Monday, 10 June 2019 17:00:00").getTime();
var InfoSystems1 = new Date("Thursday, May 30 2019 08:15:00").getTime();
//var IntrotoData2 = new Date().getTime();
//var InfoSystems2 = new Date().getTime();
//var InfoSystems3 = new Date().getTime();
//var IntroToMobile3date = new Date().getTime();

var countDownDate = new Date("Jan 5, 2021 15:37:25").getTime();

// Update the count down every 1 second
var a = setInterval(function(){timer(programmingassessment2date,"Programming Grader");}, 1000);
var b = setInterval(function(){timer(ProgrammingAssessment3date,"Programming Movie Database");}, 1000);
var c = setInterval(function(){timer(IntroToMobile2date, "Intro To Mobile Prototype");},1000);
var e = setInterval(function(){timer(IntrotoData1, "Data Sql Report");},1000);
var g = setInterval(function(){timer(IntrotoData3, "Data Test");},1000);
var h = setInterval(function(){timer(InfoSystems1, "Info Systems Report");},1000);
//var f = setInterval(function(){timer(IntrotoData2, "Data Ethics Report");},1000)
//var i = setInterval(function(){timer(InfoSystems2, "Info Systems Practical");},1000)
//var d = setInterval(function(){timer(IntroToMobile3date, "Intro To Mobile Test");},1000)
//var j = setInterval(function(){timer(InfoSystems3, "Info Systems Test");},1000)

function timer(counter, div) {

    // Get todays date and time
    var now = new Date().getTime();
  
    // Find the distance between now and the count down date
    var distance = counter - now;
  
    // Time calculations for days, hours, minutes and seconds
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);
  
    document.getElementById(div).innerHTML = days + "d " + hours + "h "
    + minutes + "m " + seconds + "s ";
  
    if (distance < 0) {
      clearInterval(x);
      document.getElementById(div).innerHTML = "EXPIRED";
    }
  }