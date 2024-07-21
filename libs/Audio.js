const audioElement = document.getElementById('audio-element');
const playPauseBtn = document.getElementById('play-pause-btn');
const loopBtn = document.getElementById('loop-btn');

let isPlaying = false;
let isLooping = false;

playPauseBtn.addEventListener('click', () => {
  if (isPlaying) {
    audioElement.pause();
    playPauseBtn.textContent = 'Play';
  } else {
    audioElement.play();
    playPauseBtn.textContent = 'Pause';
  }
  isPlaying = !isPlaying;
});

loopBtn.addEventListener('click', () => {
  isLooping = !isLooping;
  audioElement.loop = isLooping;
  loopBtn.style.backgroundColor = isLooping ? '#4CAF50' : '#cccccc';
});