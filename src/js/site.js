import RandomFlipAnimation from "./modules/RandomFlipAnimation";

RandomFlipAnimation.init();

particlesJS.load('particles-js', '/src/js/particles.json', function() {
    console.log('callback - particles.js config loaded');
});

