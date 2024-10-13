const volumeSlider = document.getElementById('volume-slider');

volumeSlider.addEventListener('input', () => {
    audio.volume = volumeSlider.value / 100;
});
