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

export { homePageTitle, homePageImg };