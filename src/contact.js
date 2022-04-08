import babyCat from './baby_cat.jpg';
import './style.css';

const homePageTitle = () => {
    const header = document.createElement('h1');
    header.textContent = 'Restaurant Page';
    return header;
}

const homePageImg = () => {
    const img = document.createElement('img');
    img.src = babyCat;
    return img;
}

const homePageText = () => {
    const text = document.createElement('p');
    text.textContent = "This restaurant has the best food ever!";
    return text;
}

export { homePageTitle, homePageImg, homePageText };