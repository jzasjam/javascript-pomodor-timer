(function() {
  // Setup
  let isBreak = false;

  // TODO: replace with user inputted start times
  let startingWorkSecs = 5;
  let startingBreakSecs = 3;

  let secs = startingWorkSecs;

  function setTimer(startSecs) {
    dispMins = Math.floor(startSecs / 60);
    dispSecs = startSecs % 60;

    document.getElementById("timer").innerHTML = String(dispMins).padStart(2, "0") + ":" + String(dispSecs).padStart(2, "0");
  }

  setTimer(secs);


  // Decrement
  function countdown() {
    if (secs != 0) {
      secs -= 1;
    } else {
      isBreak = !isBreak;

      if (isBreak) {
        secs = startingBreakSecs;
      } else {
        secs = startingWorkSecs;
      }
    }

    setTimer(secs);
  }

  let timer = setInterval(countdown, 1000);
}) ();