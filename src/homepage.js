import burger from './burgers.jpg';
import './style.css';

// const homePageTitle = () => {
//     const header = document.createElement('h1');
//     header.textContent = 'Restaurant Page';
//     return header;
// }

// const homePageImg = () => {
//     const img = document.createElement('img');
//     img.src = burger;
//     return img;
// }

// const homePageText = () => {
//     const text = document.createElement('p');
//     text.textContent = "This restaurant has the best food ever!";
//     return text;
// }

const homePage = () => {
    const homePage = document.createElement('div');
    homePage.classList.add('page');

    const header = document.createElement('h1');
    header.textContent = 'Restaurant Page';

    const img = document.createElement('img');
    img.src = burger;

    const text = document.createElement('p');
    text.textContent = "This restaurant has the best food ever!";

    homePage.append(header, img, text);

    return homePage;
}

export { homePage };
// export { homePageTitle, homePageImg, homePageText };