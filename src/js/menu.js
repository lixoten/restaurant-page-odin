import item1Image from '../../assets/images/bolinho.jpg';
import item2Image from '../../assets/images/farofa.jpg';
import item3Image from '../../assets/images/feijoada.jpeg';
import item4Image from '../../assets/images/paodequeijo.jpeg';
import item5Image from '../../assets/images/pastel.jpg';
import item6Image from '../../assets/images/picanha.jpg';
import item7Image from '../../assets/images/vatapa.jpg';

const createRestaurantMenuPage = () => {
    const content = document.querySelector("#content");

    const pageContent = document.createElement('div');
    pageContent.classList.add('page-content')

    const menuContainer = document.createElement('div');
    menuContainer.classList.add('menu-container')

    const item1 = menuItem(item1Image, "Bolinho de Bacalahu", "$3.00 Each");
    const item2 = menuItem(item2Image, "Farofa Dish", "$12.00");
    const item3 = menuItem(item3Image, "Feijoada Dish", "$3.00 Each");
    const item4 = menuItem(item4Image, "Pao de Queijo", "$2.00 Each");
    const item5 = menuItem(item5Image, "Pastel", "$2.00 Each");
    const item6 = menuItem(item6Image, "Picanha a la Bob", "$7.00 Each");
    const item7 = menuItem(item7Image, "Vatapa mystery Dish", "$0.99");

    menuContainer.appendChild(item1);
    menuContainer.appendChild(item2);
    menuContainer.appendChild(item3);
    menuContainer.appendChild(item4);
    menuContainer.appendChild(item5);
    menuContainer.appendChild(item6);
    menuContainer.appendChild(item7);

    pageContent.appendChild(menuContainer);
    content.appendChild(pageContent);
}

function menuItem(imgSrc, name, price) {
    const menuItem = document.createElement('div');
    menuItem.classList.add('menu-item')

    const imgElement = document.createElement('img');
    imgElement.setAttribute("src", imgSrc)
    menuItem.appendChild(imgElement)

    const nameElement = document.createElement('p');
    nameElement.setAttribute("class", "name");
    nameElement.textContent = name;
    menuItem.appendChild(nameElement)

    const priceElement = document.createElement('p');
    priceElement.setAttribute("class", "name");
    priceElement.textContent = price;
    menuItem.appendChild(priceElement)

    return menuItem;
}


export default createRestaurantMenuPage;