  
  document.addEventListener('DOMContentLoaded', function () {
    let albumCover = document.querySelectorAll('.cover');
    let infoDivs = document.querySelectorAll('.audio-player');
  
    let blurContainers = document.querySelectorAll('.timeline-item.mb-5');
  
    blurContainers.forEach(function (container) {
      container.addEventListener('mouseover', function () {
        this.style.filter = 'blur(0)';
      });
  
      container.addEventListener('mouseout', function () {
        this.style.filter = 'blur(5px)';
      });
    });
  
    function hideAll() {
      infoDivs.forEach(function (el) {
        el.style.display = 'none';
      });
    }
  
    hideAll();
  
    albumCover.forEach(function (el) {
      el.onclick = (e) => {
        hideAll();
        pauseAllPlayers();
  
        let playerId = e.target.getAttribute('id');
        let playerToShow = document.querySelector(`#audio-player${playerId.charAt(playerId.length - 1)}`);
  
        if (playerToShow) {
          playerToShow.style.display = 'block';
          let currentActivePlayer = playerToShow.querySelector('audio');
          currentActivePlayer.play();
        }
      };
    });
  
    function pauseAllPlayers() {
      infoDivs.forEach(function (el) {
        let player = el.querySelector('audio');
        player.pause();
        player.currentTime = 0;
      });
    }
  });
