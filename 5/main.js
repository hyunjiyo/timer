$(document).ready(function () {
  //COUNTDOWN TIMER
  //edit ".25" below to change time in terms of day
  function progress(timeleft, timetotal, $element) {
    var progressBarWidth = (timeleft * $element.width()) / timetotal ;
    $element
      .find("div")
      .animate(
        { width: progressBarWidth },
        timeleft == timetotal ? 0 : 1000,
        "linear"
      );
    if (timeleft > 0) {
      setTimeout(function () {
        progress(timeleft - 1, timetotal, $element);
      }, 1000);
    }
  }
  //adjust these numbers to match time set
  //must be in seconds
  progress(1740, 1740, $("#progressBar"));
});

function searchParam(key) {
  return new URLSearchParams(location.search).get(key);
};

searchParam('id');

