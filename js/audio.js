const audio = document.getElementById('background-music');
const audioControlIcon = document.getElementById('audio-control-icon');
const audioControlText = document.getElementById('audio-control-text');
let isPlaying = false;

const songs = [
    { src: 'music/indie/shameful.mp3', title: 'leverfall - shameful' },
    { src: 'music/indie/salem.mp3', title: 'leverfall - burning in salem' },
    { src: 'music/indie/june.mp3', title: 'leverfall - my life changed on june 8th' },
    { src: 'music/melodramatic/accessory.mp3', title: 'leverfall - accessory like option' },
    { src: 'music/indie/romance.mp3', title: 'leverfall - rom444nce' },
    { src: 'music/indie/nacitw.mp3', title: 'leverfall - not a care in the world' },
    { src: 'music/indie/freedom.mp3', title: 'leverfall - freed00m' },
    { src: 'music/indie/understand.mp3', title: 'leverfall - u have to understand' }
];
let currentSongIndex = 0;

function loadAndPlaySong() {
    const currentSong = songs[currentSongIndex];
    audio.src = currentSong.src;
    updateAudioControlText(currentSong.title);
    audio.play();
    isPlaying = true;
    audio.onended = () => {
        currentSongIndex = (currentSongIndex + 1) % songs.length;
        fadeOutText(() => loadAndPlaySong());
    };
}

function updateAudioControlText(text) {
    audioControlText.style.opacity = 0;
    setTimeout(() => {
        audioControlText.innerHTML = `<i class='bx bx-${isPlaying ? 'pause' : 'play'}' id="audio-control-icon" onclick="toggleAudio()"></i> ${text}`;
        audioControlText.style.opacity = 1;
    }, 500);
}

function fadeOutText(callback) {
    audioControlText.style.opacity = 0;
    setTimeout(callback, 500);
}

function toggleAudio() {
    if (isPlaying) {
        audio.pause();
        isPlaying = false;
        audioControlIcon.classList.replace('bx-pause', 'bx-play');
    } else {
        audio.play();
        isPlaying = true;
        audioControlIcon.classList.replace('bx-play', 'bx-pause');
    }
}
