const navBar = (active) => {
    const navItems = ['home', 'menu', 'contact'];
    const nav = document.createElement('nav');
    nav.classList.add('nav');
    const ul = document.createElement('ul');

    navItems.forEach(item => {
        const li = document.createElement('li');
        const navItem = document.createElement('a');
        navItem.textContent = item;
        if(navItem.textContent === active) {
            navItem.classList.add('active');
        }
        li.appendChild(navItem);
        ul.appendChild(li);
    })

    nav.appendChild(ul);

    return nav;
}

export default navBar;