const urlParams = new URLSearchParams(window.location.search);
const canal = urlParams.get('canal');
const canalTitle = document.getElementById('canalTitle');
const video = document.getElementById('video');

let index = 1;

canalTitle.textContent = `🔴 Ao Vivo: ${canal.toUpperCase()}`;

function carregarVideo() {
  video.src = `videos/${canal}/${index}.mp4`;
  video.load();
  video.play();
}

video.addEventListener('ended', () => {
  index++;
  fetch(`videos/${canal}/${index}.mp4`)
    .then(res => {
      if (res.ok) {
        carregarVideo();
      } else {
        index = 1;
        carregarVideo();
      }
    });
});

function irParaPlayer(outroCanal) {
  window.location.href = `player.html?canal=${outroCanal}`;
}

carregarVideo();
