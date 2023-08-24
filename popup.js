window.addEventListener("DOMContentLoaded", (event) => {
    const btn = document.getElementById('play_sound_btn');
    if (btn) {
      btn.addEventListener('click', function () {
            const audio = new Audio('sound.ogg');
            audio.play();
      }, false);
    }
});