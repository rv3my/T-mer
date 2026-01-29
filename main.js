let timer;
let totalTime = 0;
let isCountdown = false;
let running = false;

function startTimer() {
  clearInterval(timer);
  const hours = document.getElementById("hourInput").value || 0;
const minutes = document.getElementById("minuteInput").value || 0;

totalTime = (hours * 3600) + (minutes * 60);
isCountdown = true;
  running = true;
  updateDisplay();
  timer = setInterval(() => {
    if (isCountdown) {
      if (totalTime > 0) {
        totalTime--;
        updateDisplay();
      } else {
        clearInterval(timer);
        running = false;
        document.getElementById("display").textContent = "Time's Up!";
        
        // Add sound here!
        const audio = new Audio('https://cdn.freesound.org/previews/320/320655_5260872-lq.mp3');
        audio.play();
      }
    } else {
      // Stopwatch just keeps going up
      totalTime++;
      updateDisplay();
    }
  }, 1000);
}

function resetTimer() {
  clearInterval(timer);
  running = false;
  totalTime = 0;
  document.getElementById("display").textContent = "00:00:00";
}

function updateDisplay() {
  let hours = Math.floor(totalTime / 3600);
  let minutes = Math.floor((totalTime % 3600) / 60);
  let seconds = totalTime % 60;

  document.getElementById("display").textContent =
    `${String(hours).padStart(2, '0')}:` +
    `${String(minutes).padStart(2, '0')}:` +
    `${String(seconds).padStart(2, '0')}`;
}