const audio = document.getElementById('background-music');
const audioControlIcon = document.getElementById('audio-control-icon');
const audioControlText = document.getElementById('audio-control-text');
const confirmationBox = document.getElementById('confirmation-box');
const confirmationTitle = document.getElementById('confirmation-title');
const confirmationText = document.getElementById('confirmation-text');
const confirmYes = document.getElementById('confirm-yes');
const confirmNo = document.getElementById('confirm-no');
let isPlaying = false;
let currentUrl = '';

const songs = [
    { src: 'music/indie/shameful.mp3', title: 'leverfall - shameful' },
    { src: 'music/indie/salem.mp3', title: 'leverfall - burning in salem' },
    { src: 'music/indie/une.mp3', title: 'leverfall - my life changed on june 8th' },
    { src: 'music/melodramatic/accessory.mp3', title: 'leverfall - accessory like option' },
    { src: 'music/indie/romance.mp3', title: 'leverfall - rom444nce' },
    { src: 'music/indie/nacitw.mp3', title: 'leverfall - not a care in the world' },
    { src: 'music/indie/freedom.mp3', title: 'leverfall - freed00m' },
    { src: 'music/indie/understand.mp3', title: 'leverfall - u have to understand' }
];
let currentSongIndex = 0;

function enterSite() {
    document.querySelector('.blackout').classList.add('hide');
    loadAndPlaySong();
}

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

document.querySelectorAll('.icon').forEach(icon => {
    icon.addEventListener('click', (event) => {
        event.preventDefault();
        currentUrl = icon.getAttribute('data-url');
        const site = icon.getAttribute('data-site');
        showConfirmation(site);
    });
});

function showConfirmation(site) {
    confirmationBox.style.display = 'block';
    confirmationBox.style.opacity = 0;
    setTimeout(() => { confirmationBox.style.opacity = 1; }, 10);
    confirmationText.innerHTML = `you are going to <span class="highlight-${site}">${site}</span>, proceed?`;
    applyHighlightStyle(site);
}

function applyHighlightStyle(site) {
    const highlightElement = document.querySelector(`.highlight-${site}`);
    if (site === 'github.com') {
        highlightElement.style.backgroundImage = 'linear-gradient(90deg, #000, #fff)';
        highlightElement.style.webkitBackgroundClip = 'text';
        highlightElement.style.color = 'transparent';
    } else if (site === 'discord.com') {
        highlightElement.style.backgroundImage = 'linear-gradient(90deg, #7289da, #fff)';
        highlightElement.style.webkitBackgroundClip = 'text';
        highlightElement.style.color = 'transparent';
    } else if (site === 'steamcommunity.com') {
        highlightElement.style.backgroundImage = 'linear-gradient(90deg, #1b2838, #66c0f4)';
        highlightElement.style.webkitBackgroundClip = 'text';
        highlightElement.style.color = 'transparent';
    }
}

confirmYes.addEventListener('click', () => {
    window.location.href = currentUrl;
});

confirmNo.addEventListener('click', () => {
    confirmationBox.style.opacity = 0;
    setTimeout(() => {
        confirmationBox.style.display = 'none';
    }, 500);
});
