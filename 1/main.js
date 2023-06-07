var dueDate = new Date(2023, 7, 30, 20, 30);
var refreshRate = 1000;
var timeElem = document.querySelector(".countdown-timer");



function render(time) {
  timeElem.innerHTML =
    padTwo(time.days.toString()) +
    ":" +
    padTwo(time.hours.toString()) +
    ":" +
    padTwo(time.minutes.toString()) +
    ":" +
    padTwo(time.seconds.toString());
}

function updateTime() {
  var seconds = calculateSecondsBetweenDates(new Date(), dueDate);
  if (seconds >= 0) {
    var objectTime = convertSecondsToObjectTime(seconds);
    render(objectTime);
    window.setTimeout(updateTime, refreshRate);
  } else {
    render({
      seconds: 0,
      minutes: 0,
      hours: 0,
      days: 0
    });
  }
}

function calculateSecondsBetweenDates(d1, d2) {
  var ms = d2.getTime() - d1.getTime();
  return Math.floor(ms / 1000);
}

function fillZeros(str, n, dir) {
  if (typeof str == "string") {
    while (str.length < n) {
      str = dir ? str + "0" : "0" + str;
    }
  }
  return str;
}

function padTwo(str) {
  return str.length == 0 ? "00" : str.length == 1 ? "0" + str : str;
}

function convertSecondsToObjectTime(s) {
  var objTime = {
    seconds: 0,
    minutes: 0,
    hours: 0,
    days: 0
  };

  if (s < 60) {
    objTime["seconds"] = s;
    return objTime;
  }

  var m = Math.floor(s / 60);
  objTime["seconds"] = s % 60;

  if (m < 60) {
    objTime["minutes"] = m;
    return objTime;
  }

  var h = Math.floor(m / 60);
  objTime["minutes"] = m % 60;

  if (h < 24) {
    objTime["hours"] = h;
    return objTime;
  }

  var d = Math.floor(h / 24);
  objTime["hours"] = h % 24;
  objTime["days"] = d;
  return objTime;
}
	
	


setTimeout(updateTime, refreshRate);
