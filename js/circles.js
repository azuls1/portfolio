document.addEventListener('DOMContentLoaded', () => {
    particlesJS('particles-js', {
        particles: {
            number: {
                value: 200,
                density: {
                    enable: true,
                    value_area: 800
                }
            },
            color: {
                value: '#ffffff'
            },
            shape: {
                type: 'circle',
                stroke: {
                    width: 0,
                    color: '#000000'
                }
            },
            opacity: {
                value: 0.5
            },
            size: {
                value: 3,
                random: true
            },
            move: {
                enable: true,
                speed: 2
            },
            line_linked: {
                enable: false
            }
        },
        interactivity: {
            detect_on: 'canvas',
            events: {
                onclick: {
                    enable: true,
                    mode: 'push'
                }
            }
        },
        retina_detect: true
    });
});
