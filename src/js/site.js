import RandomFlipAnimation from "./modules/RandomFlipAnimation";
import SelectSection from './modules/SelectSection';

RandomFlipAnimation.init();
SelectSection.init();

particlesJS.load('particles-js', '/src/js/particles.json', function() {
    console.log('callback - particles.js config loaded');
});


// use for debug
document.querySelector('.four .circularContainer').click();
