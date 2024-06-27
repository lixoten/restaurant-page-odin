

const createRestaurantAboutPage = () => {
    const content = document.querySelector("#content");

    const pageContent = document.createElement('div');
    pageContent.classList.add('page-content')

    const localContent = document.createElement('div');
    localContent.classList.add('about-page')

    const aboutHead = document.createElement('h1');
    aboutHead.setAttribute("class", "about-head")
    aboutHead.textContent = "About Us";
    localContent.appendChild(aboutHead);

    const story = document.createElement('p');
    story.textContent = "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt " +
        "ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea" +
        "te feugait nulla facilisi. Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh " +
        "euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Come see us soon!!!";
    localContent.appendChild(story);

    pageContent.appendChild(localContent);
    content.appendChild(pageContent);
}

export default createRestaurantAboutPage;