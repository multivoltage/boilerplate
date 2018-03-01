import { debug } from "util";

const COLLAPSED_SECTION_CLASS = 'collapsed';

const SelectSection = {

    init(){

        this.watchClicks();
    },

    watchClicks(){

        const circularContainers = document.querySelectorAll('.circularBullet .circularContainer');
        const main = document.getElementById('main');
        const sectionHome = document.getElementById('navigator');

        circularContainers.forEach(element => {
            element.addEventListener("click", (e) => {
                // this is SelectSelection
                sectionHome.classList.toggle(COLLAPSED_SECTION_CLASS);
                main.classList.toggle(COLLAPSED_SECTION_CLASS);
            });
        });
    }
};

export default SelectSection;
