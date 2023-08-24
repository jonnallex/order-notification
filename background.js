chrome.runtime.onMessageExternal.addListener(function(request, sender, sendResponse) {
    if (request.action === 'play_sound') {
        playSound('sound.ogg');
    }
});

async function playSound(audioPath) {
    await createOffscreen();
    await chrome.runtime.sendMessage({ play: { audioPath } });
}

async function createOffscreen() {
    if (await chrome.offscreen.hasDocument()) {
        return;
    }    

    await chrome.offscreen.createDocument({
        url: 'offscreen.html',
        reasons: ['AUDIO_PLAYBACK'],
        justification: 'play sound' 
    });
}           
