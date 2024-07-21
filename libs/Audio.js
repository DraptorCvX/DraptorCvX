const audioElement = document.createElement('audio');
audioElement.src = 'C:/Users/ASUS/Documents/GitHub/DraptorCvX/audio/ENHYPENFatalTrouble.mp3'; // Replace with your path
audioElement.loop = true; // Set loop playback by default

// Optional: Add a play/pause button functionality
const playPauseBtn = document.getElementById('play-pause-btn'); // Assuming a button exists with this ID

if (playPauseBtn) {
  playPauseBtn.addEventListener('click', () => {
    if (audioElement.paused) {
      audioElement.play();
      playPauseBtn.textContent = 'Pause';
    } else {
      audioElement.pause();
      playPauseBtn.textContent = 'Play';
    }
  });
} else {
  // Handle scenario where no button exists (audio plays automatically)
  console.log('No play/pause button found. Audio plays automatically in a loop.');
}

// Play the audio
audioElement.play();