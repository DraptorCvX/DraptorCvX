const audioElement = document.createElement('audio');
audioElement.src = 'C:/Users/ASUS/Documents/GitHub/DraptorCvX/audio/ENHYPENFatalTrouble.mp3'; // Replace with your path
audioElement.loop = true; // Set loop playback by default

let isMusicPlaying = false;

const musicPlayPauseBtn = document.getElementById('music-play-pause-btn');

musicPlayPauseBtn.addEventListener('click', () => {
  if (isMusicPlaying) {
    audioElement.pause();
    musicPlayPauseBtn.textContent = 'Play Music';
  } else {
    audioElement.play();
    musicPlayPauseBtn.textContent = 'Pause Music';
  }
  isMusicPlaying = !isMusicPlaying;
});