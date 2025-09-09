(function() {
  // Setup
  let status = document.getElementById("status-text");
  let startButton = document.getElementById("start");
  let pauseButton = document.getElementById("pause");
  let resetButton = document.getElementById("reset");

  let isBreak = false;
  let isPaused = true;

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
    if (isPaused) {
      return;
    }

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

    if (!isPaused) {
      status.innerText = "Active: " + (isBreak ? "Break" : "Work");
    }
  }

  let timer = setInterval(countdown, 1000);

  // Controls
  startButton.addEventListener("click", () => {
    isPaused = false;
    status.innerText = "Active: " + (isBreak ? "Break" : "Work");
    startButton.setAttribute("disabled", true);
    pauseButton.removeAttribute("disabled");
    resetButton.removeAttribute("disabled");
  });

  pauseButton.addEventListener("click", () => {
    isPaused = true;
    status.innerText = "Paused: " + (isBreak ? "Break" : "Work");
    startButton.removeAttribute("disabled");
    pauseButton.setAttribute("disabled", true);
    resetButton.setAttribute("disabled", true);
  });
}) ();