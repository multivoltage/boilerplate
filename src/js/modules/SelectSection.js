const COLLAPSED_SECTION_CLASS = 'collapsed';
const ACTIVE_SECTION_CLASS = 'active';

const SelectSection = {

    init(){

        this.watchClicks();
    },

    toogleNavigator(collapsed){
        // collapse navigator
        const navigator = document.getElementById('navigator');
        const main = document.getElementById('main');

        if(collapsed){
          navigator.classList += COLLAPSED_SECTION_CLASS;
          main.classList += COLLAPSED_SECTION_CLASS;
        } else {
          navigator.classList.toggle(COLLAPSED_SECTION_CLASS);
          main.classList.toggle(COLLAPSED_SECTION_CLASS);
        }
    },

    watchClicks(){

        const circularContainers = document.querySelectorAll('.circularBullet .circularContainer');
        circularContainers.forEach(element => {
            element.addEventListener("click", (e,el) => {
                const selectedSectionId = e.currentTarget.dataset.sectionid;
                const activeSection = document.querySelector('SECTION.'+ACTIVE_SECTION_CLASS);
                const selectedSection = document.querySelector('SECTION#'+selectedSectionId);

                if(!activeSection){
                  this.toogleNavigator();

                  selectedSection.classList += ACTIVE_SECTION_CLASS;

                } else {
                  this.toogleNavigator();
                  activeSection.classList -= ACTIVE_SECTION_CLASS;
                }


            });
        });
    }
};

export default SelectSection;
