import createRestaurantHomePage from './restaurant.js';
import createRestaurantMenuPage from "./menu.js";
import createRestaurantAboutPage from "./about-page.js";

function initialLoad() {
    const elements  = {
        menu1: document.getElementById('home-btn'),
        menu2: document.getElementById('menu-btn'),
        menu3: document.getElementById('about-btn')
    }

    const clearContent = () => {
        const content = document.getElementById('content');
        const pageContent = document.querySelector('.page-content');
        if (pageContent) {
            content.removeChild(pageContent);
        }
    }
    const makeActive = (menuItem) => {
        allMenus.forEach(menu => menu.classList.remove('active'));
        menuItem.classList.add('active');
    }
    const allMenus = [elements.menu1, elements.menu2, elements.menu3];


    elements.menu1.addEventListener("click", () => {
        clearContent();
        createRestaurantHomePage();
        makeActive(elements.menu1);
    })
    elements.menu2.addEventListener("click", () => {
        clearContent();
        createRestaurantMenuPage();
        makeActive(elements.menu2);
    })
    elements.menu3.addEventListener("click", () => {
        clearContent();
        createRestaurantAboutPage();
        makeActive(elements.menu3);
    })

    makeActive(elements.menu1);
    createRestaurantHomePage();
}

initialLoad();

export default  initialLoad;