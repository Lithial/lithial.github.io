var requestURL = 'https://lithial.github.io/scripts/data.json';
//change to scripts after when git push
var request = new XMLHttpRequest();
request.open('GET', requestURL);
request.responseType = 'json';
request.send();
request.onload = function() {
  var classes = request.response;
  console.log(classes);
  classes.forEach(element => {
    if(element.date != "")
    {
      createBlock(element.name, element.date, element.class);
    }
  });
}

function createBlock(name, date, paper){
  var newDiv = document.createElement("div");
  var brElement = document.createElement("br");
  var brElement2 = document.createElement("br");
  var countdown = document.createElement("p")
  countdown.setAttribute("id",name);

  var newContent = document.createTextNode(name);
  var classContent = document.createTextNode(paper);
  var dateContent = document.createTextNode(date);
  var inputdate = new Date(date).getTime();

  newDiv.appendChild(newContent);
  newDiv.appendChild(brElement);
  newDiv.appendChild(classContent);
  newDiv.appendChild(brElement2);
  newDiv.appendChild(countdown);
  newDiv.appendChild(dateContent);
  
  document.body.appendChild(newDiv);
  var a = setInterval(function(){timer(a,inputdate, name);},1000);

}
function timer(a,counter, div) {

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
      clearInterval(a);
      document.getElementById(div).innerHTML = "EXPIRED";
    }
  }