

const createRestaurantHomePage = () => {
    const content = document.querySelector("#content");

    const pageContent = document.createElement('div');
    pageContent.classList.add('page-content')


    const localContent = document.createElement('div');
    localContent.classList.add('home-page')

    const image = document.createElement('img');
    image.src = "../assets/images/store_front.jpg";
    image.classList.add("front-image");
    localContent.appendChild(image);

    const headline = document.createElement('h1');
    headline.textContent = "Welcome to a taste of Brasil";
    localContent.appendChild(headline);

    const oneLiner = document.createElement('p');
    oneLiner.textContent = "Please enjoy. Food For All";
    localContent.appendChild(oneLiner);

    pageContent.appendChild(localContent);
    content.appendChild(pageContent);
}

export default createRestaurantHomePage;