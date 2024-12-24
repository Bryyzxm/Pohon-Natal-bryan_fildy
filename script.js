function playBackgroundMusic() {
  const audioContext = new (window.AudioContext || window.webkitAudioContext)();
  const audioElement = new Audio('main.mp3');
  const track = audioContext.createMediaElementSource(audioElement);
  track.connect(audioContext.destination);
  audioElement.loop = true;
  audioElement.play().catch(function (error) {
    console.log('Audio playback failed: ' + error);
  });
}

function playClickSound() {
  const clickSound = new Audio('click.mp3');
  clickSound.play().catch(function (error) {
    console.log('Click sound playback failed: ' + error);
  });
}
