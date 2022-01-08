function createWebsite(){
    let body = document.querySelector('body');
    let content = document.querySelector('#content');
    let navBar = document.createElement('div');
    let navList = document.createElement('ul');
    let navItems = ['Home', 'Menu', 'Contact'];

    navBar.classList.add('nav-bar');
    navList.classList.add('nav-list');

    for(let i=0; i<navItems.length; i++){
        let list = document.createElement('li');
        let link = document.createElement('a');

        list.classList.add('nav-item')
        link.setAttribute('href','');
        link.classList.add('nav-link')
        link.classList.add(`${navItems[i]}`);
        link.innerText = navItems[i];
        list.appendChild(link); 
        navList.appendChild(list);
    }

    content.appendChild(navBar);
    navBar.appendChild(navList);
}

export default createWebsite();