document.getElementById('play_sound_btn').addEventListener('click', function() {
   const audio = new Audio('sound.ogg');
   audio.play();
      // window.postMessage({ type: "FROM_EXTENSION", data: "Hello from the extension!" }, "*");
});
