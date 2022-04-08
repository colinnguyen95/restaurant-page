import tacos from './tacos.jpg';

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

const menu = () => {
    const menu = document.createElement('div');
    menu.classList.add('page');

    const header = document.createElement('h1');
    header.textContent = 'Menu Page';

    const img = document.createElement('img');
    img.src = tacos;

    const text = document.createElement('p');
    text.textContent = "This restaurant has the best food ever!";

    menu.append(header, img, text);

    return menu;
}

export { menu };