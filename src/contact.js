import tacos from './tacos.jpg';

const contact = () => {
    const menu = document.createElement('div');
    menu.classList.add('page');

    const header = document.createElement('h1');
    header.textContent = 'Contact Page';

    const img = document.createElement('img');
    img.src = tacos;

    const text = document.createElement('p');
    text.textContent = "Contact us!";

    menu.append(header, img, text);

    return menu;
}

export { contact };