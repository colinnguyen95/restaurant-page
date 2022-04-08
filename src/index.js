// import navBar from './navbar';
// import { homePage, homePageTitle, homePageImg, homePageText } from './homepage';
import { homePage } from './homepage';
import { menu } from './menu';
import navBar from './navbar';

const content = document.querySelector('#content');
let pageChoice = 'home';
let navigationBar = navBar(pageChoice);
content.appendChild(navigationBar);

function myFunction(e) {
    console.log(e.target.text)
    pageChoice = e.target.text;
    content.textContent = '';
    navigationBar = navBar(pageChoice);
    content.appendChild(navigationBar);
    navigationBar.addEventListener('click', myFunction);

    /*** Loop content div, keep nav child and remove all others ***/
    // while(content.lastChild.className !== 'nav'){
    //     content.removeChild(content.lastChild);
    // }
    
    if(pageChoice === 'home'){
        content.appendChild(homePage());
    }
    if(pageChoice === 'menu'){
        content.appendChild(menu());
    }
    if(pageChoice === 'contact'){
        content.appendChild(menu());
    }
}
content.appendChild(homePage());


navigationBar.addEventListener('click', myFunction);


console.log('navy:', navBar().childNodes);
console.log(content.lastChild.childNodes);