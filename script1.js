let startTime = 0;
    let elapsedTime = 0;
    let timerInterval;
    const display = document.getElementById("display");
    const laps = document.getElementById("laps");

    function formatTime(ms) {
      let totalSeconds = Math.floor(ms / 1000);
      let hours = Math.floor(totalSeconds / 3600);
      let minutes = Math.floor((totalSeconds % 3600) / 60);
      let seconds = totalSeconds % 60;

      return (
        String(hours).padStart(2, "0") + ":" +
        String(minutes).padStart(2, "0") + ":" +
        String(seconds).padStart(2, "0")
      );
    }

    document.getElementById("start").addEventListener("click", () => {
      if (!timerInterval) {
        startTime = Date.now() - elapsedTime;
        timerInterval = setInterval(() => {
          elapsedTime = Date.now() - startTime;
          display.textContent = formatTime(elapsedTime);
        }, 100);
      }
    });

    document.getElementById("pause").addEventListener("click", () => {
      clearInterval(timerInterval);
      timerInterval = null;
    });

    document.getElementById("reset").addEventListener("click", () => {
      clearInterval(timerInterval);
      timerInterval = null;
      elapsedTime = 0;
      display.textContent = "00:00:00";
      laps.innerHTML = "";
    });

    document.getElementById("lap").addEventListener("click", () => {
      if (elapsedTime > 0) {
        const li = document.createElement("li");
        li.textContent = formatTime(elapsedTime);
        laps.appendChild(li);
      }
    });