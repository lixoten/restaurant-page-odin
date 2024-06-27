import storeFrontImage from '../../assets/images/store_front.jpg';

const createRestaurantHomePage = () => {
    const content = document.querySelector("#content");

    const pageContent = document.createElement('div');
    pageContent.classList.add('page-content')


    const localContent = document.createElement('div');
    localContent.classList.add('home-page')

    const image = document.createElement('img');
    image.src = storeFrontImage;
    image.classList.add("front-image");
    localContent.appendChild(image);

    const headline = document.createElement('h1');
    headline.textContent = "Welcome to a Taste of Brasil";
    localContent.appendChild(headline);

    const oneLiner = document.createElement('p');
    oneLiner.textContent = "Please enjoy. Food For All";
    localContent.appendChild(oneLiner);

    pageContent.appendChild(localContent);
    content.appendChild(pageContent);
}

export default createRestaurantHomePage;