chrome.runtime.onMessage.addListener(msg => {
    if ('play' in msg) {
            playAudio(msg.play);
        setTimeout(() => {
    }, 3000);
    }
});

function playAudio({audioPath}) {
    const audio = new Audio(audioPath);
    audio.play();


}