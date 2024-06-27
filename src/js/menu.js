const createRestaurantMenuPage = () => {
    const content = document.querySelector("#content");

    const pageContent = document.createElement('div');
    pageContent.classList.add('page-content')

    const menuContainer = document.createElement('div');
    menuContainer.classList.add('menu-container')

    const item1 = menuItem("bolinho.jpg", "Bolinho de Bacalahu", "$3.00 Each");
    const item2 = menuItem("farofa.jpg", "Farofa Dish", "$12.00");
    const item3 = menuItem("feijoada.jpeg", "Feijoada Dish", "$3.00 Each");
    const item4 = menuItem("paodequeijo.jpeg", "Pao de Queijo", "$2.00 Each");
    const item5 = menuItem("pastel.jpg", "Pastel", "$2.00 Each");
    const item6 = menuItem("picanha.jpg", "Picanha a la Bob", "$7.00 Each");
    const item7 = menuItem("vatapa.jpg", "Vatapa mystery Dish", "$0.99");

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
    imgElement.setAttribute("src", `../assets/images/${imgSrc}`)
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