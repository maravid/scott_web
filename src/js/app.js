import 'hover.css/css/hover-min.css';

/** Interacción en detalle.html **/

const actorTerms = document.querySelectorAll('.actor-list dt');
actorTerms.forEach(name => {
  name.addEventListener('click', () => {
    name.classList.toggle('active');
    name.classList.toggle('marked-actor');
  });
});


/** Controles de vídeo personalizados en index.html **/

const video = document.getElementById('myVideo');
const playPauseBtn = document.querySelector('.play-pause-btn');
const muteBtn = document.querySelector('.mute-btn');
const volumeBar = document.querySelector('.volume-bar');
const seekBar = document.querySelector('.seek-bar');
const currentTime = document.querySelector('.current-time');
const duration = document.querySelector('.duration');
const fullscreenBtn = document.querySelector('.fullscreen-btn');

playPauseBtn.addEventListener('click', function() {
  if (video.paused || video.ended) {
    video.play();
    playPauseBtn.innerHTML = '<i class="fa-solid fa-pause"></i>';
  } else {
    video.pause();
    playPauseBtn.innerHTML = '<i class="fa-solid fa-play"></i>';
  }
});

muteBtn.addEventListener('click', function() {
  if (video.muted) {
    video.muted = false;
    muteBtn.innerHTML = '<i class="fa-solid fa-volume-up"></i>';
    volumeBar.value = video.volume;
  } else {
    video.muted = true;
    muteBtn.innerHTML = '<i class="fa-solid fa-volume-mute"></i>';
    volumeBar.value = 0;
  }
});

volumeBar.addEventListener('input', function() {
  video.volume = volumeBar.value;
  if (volumeBar.value == 0) {
    muteBtn.innerHTML = '<i class="fa-solid fa-volume-mute"></i>';
  } else {
    muteBtn.innerHTML = '<i class="fa-solid fa-volume-up"></i>';
  }
});

video.addEventListener('timeupdate', function() {
  const currentTimeFormatted = formatTime(video.currentTime);
  currentTime.textContent = currentTimeFormatted;
  seekBar.value = (video.currentTime / video.duration) * 100;
});

video.addEventListener('loadedmetadata', function() {
  const durationFormatted = formatTime(video.duration);
  duration.textContent = durationFormatted;
});

seekBar.addEventListener('input', function() {
  video.currentTime = (seekBar.value * video.duration) / 100;
});

function formatTime(time) {
  const minutes = Math.floor(time / 60);
  const seconds = Math.floor(time % 60);
  return `${('0' + minutes).slice(-2)}:${('0' + seconds).slice(-2)}`;
}

fullscreenBtn.addEventListener('click', () => {
  if (video.requestFullscreen) {
    video.requestFullscreen();
  } else if (video.mozRequestFullScreen) {
    video.mozRequestFullScreen();
  } else if (video.webkitRequestFullscreen) { 
    video.webkitRequestFullscreen();
  } else if (video.msRequestFullscreen) {
    video.msRequestFullscreen();
  }
});

