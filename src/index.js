// import navBar from './navbar';
// import { homePage, homePageTitle, homePageImg, homePageText } from './homepage';
import { homePage } from './homepage';
import { menu } from './menu';
import navBar from './navbar';

const content = document.querySelector('#content');
let pageChoice = 'home';
content.appendChild(navBar(pageChoice));
// let test = content.appendChild(navBar(pageChoice));

// console.log('test', test)
console.log('test2:', navBar());

function myFunction(e) {
    console.log(e.target.text)
    // pageChoice = e.target.text;
    // content.textContent = '';
    // content.appendChild(navBar(pageChoice));
    // test = content.appendChild(navBar(pageChoice));
    // test.addEventListener('click', myFunction);

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

function funFunc(){
    navBar().addEventListener('click', myFunction);
}

funFunc();

console.log('navy:', navBar().childNodes);
console.log(content.lastChild.childNodes);