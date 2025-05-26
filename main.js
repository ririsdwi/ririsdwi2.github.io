// alert('Halo!')
function startTimer(duration, display, callback) {
  let timer = duration, minutes, seconds;
  display.style.display = "block";
  
  const interval = setInterval(() => {
    minutes = String(Math.floor(timer / 60)).padStart(2, '0');
    seconds = String(timer % 60).padStart(2, '0');
    display.textContent = `Sisa Waktu: ${minutes}:${seconds}`;

    if (--timer < 0) {
      clearInterval(interval);
      display.textContent = "Waktu Habis!";
      if (callback) callback();
    }
  }, 1000);
}

