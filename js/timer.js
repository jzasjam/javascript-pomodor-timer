(function() {
  // Setup
  let timerMins = 25;
  let timerSecs = 0;

  function setTimer(startMins, startSecs) {
    document.getElementById("timer").innerHTML = startMins + ":" + String(startSecs).padStart(2, "0");
  }

  setTimer(timerMins, timerSecs);

  

  // Decrement
  function countdown() {
    if (timerSecs != 0) {
      timerSecs -= 1;
    } else if (timerMins != 0) {
      timerMins -= 1;
      timerSecs = 59;
    } else {
      console.log("Timer finished!");
    }

    setTimer(timerMins, timerSecs);
  }

  let timer = setInterval(countdown, 1000);
}) ();