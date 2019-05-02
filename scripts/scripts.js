var requestURL = 'scripts/data.json' //'https://lithial.github.io/scripts/data.json';
//change to scripts after when git push
var request = new XMLHttpRequest();
request.open('GET', requestURL);
request.responseType = 'json';
request.send();
request.onload = function () {
  var classes = request.response;
  console.log(classes);
  classes.forEach(element => {
    if (element.date != "") {
      createBlock(element.name, element.date, element.class);
    }
  });
}

function addElement(nameNodeID, textNodeText) {
  var genericElementNode = document.createElement('p');
  genericElementNode.setAttribute('id', nameNodeID);
  var textNode = document.createElement("span");
  textNode.innerText = textNodeText;
  genericElementNode.appendChild(textNode);
  return genericElementNode;
}

function createBlock(name, date, paper) {
  var newDiv = document.createElement("div");
  newDiv.appendChild(addElement("nameNode", name));
  newDiv.appendChild(addElement("paperNode", paper));
  newDiv.appendChild(addElement(name, ""));
  newDiv.appendChild(addElement("dateNode", date));
  document.body.appendChild(newDiv);

  var inputdate = new Date(date).getTime();
  var a = setInterval(function () {
    timer(a, inputdate, name);
  }, 1000);
}

function timer(a, counter, div) {
  // Get todays date and time
  var now = new Date().getTime();
  // Find the distance between now and the count down date
  var distance = counter - now;
  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  document.getElementById(div).innerHTML = days + "d " + hours + "h " +
    minutes + "m " + seconds + "s ";

  if (distance < 0) {
    clearInterval(a);
    document.getElementById(div).innerHTML = "EXPIRED";
  }
}