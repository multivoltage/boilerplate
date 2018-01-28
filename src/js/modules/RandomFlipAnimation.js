const DELTA_TIME = 3*1000;
const ANIMATION_CLASS = 'rotateYmirrorON';

var RandomFlipAnimation = {

    
    init(){
        
        let circularContainers = document.querySelectorAll('.rotationWrapper .circularContainer');
        circularContainers.forEach(el => {
            setInterval(()=>{

                const seconds = Math.floor((Math.random() * 5) + 1);
                el.style.animationDelay =  seconds+"s";
                el.classList.toggle(ANIMATION_CLASS);

                this.animEl(el);

            },8000);

            this.animEl(el);
        })
    },

    animEl(el){
        const seconds = Math.floor((Math.random() * 5) + 1);
        el.style.animationDelay =  seconds+"s";
        el.classList.toggle(ANIMATION_CLASS);
    }
};

export default RandomFlipAnimation;
