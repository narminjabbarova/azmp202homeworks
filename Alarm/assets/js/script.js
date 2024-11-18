document.addEventListener('DOMContentLoaded', () => {
    const hoursInput = document.getElementById('hours');
    const minutesInput = document.getElementById('minutes');
    const secondsInput = document.getElementById('seconds');
    const startButton = document.getElementById('start-btn');
    const countdownText = document.getElementById('countdown-text');
    const celebration = document.getElementById('celebration');
    const alarmSound = document.getElementById('alarm-sound');
  
    let countdownInterval;
  
    function playAudio() {
      alarmSound.play();
    }
  
    function pauseAudio() {
      alarmSound.pause();
    }
  
    startButton.addEventListener('click', () => {
      let hours = parseInt(hoursInput.value) || 0;
      let minutes = parseInt(minutesInput.value) || 0;
      let seconds = parseInt(secondsInput.value) || 0;
  
      if (hours < 0 || hours > 24 || minutes < 0 || minutes > 59 || seconds < 0 || seconds > 59) {
        alert('Please enter the right time value.');
        return;
      }

      startButton.disabled = true; 
      celebration.style.display = 'none';
  
      let totalSeconds = hours * 3600 + minutes * 60 + seconds;
  
      countdownInterval = setInterval(() => {
        const h = Math.floor(totalSeconds / 3600);
        const m = Math.floor((totalSeconds % 3600) / 60);
        const s = totalSeconds % 60;
  
        countdownText.textContent = `${h} hr: ${m} min: ${s} sec`;
  
        if (totalSeconds <= 0) {
          clearInterval(countdownInterval);
          countdownText.textContent = 'Time over!';
          celebration.style.display = 'block';
          playAudio(); 
          startButton.disabled = false;
          startButton.style.backgroundColor = "rgb(255, 231, 111)";
        }
  
        totalSeconds--;
      }, 1000);
    });
  });