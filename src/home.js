export default function loadHomePage(){
    const content = document.querySelector('#content');
    const header = document.createElement('div');
    const heading = document.createElement('div');
    const firstText = document.createElement('p');
    const secondText = document.createElement('p');
    const nav = document.createElement('ul');
    const body = document.querySelector('body');
    let navItems = ['Home','Menu','Contact'];

    header.setAttribute('class','header');
    content.appendChild(header);
    header.appendChild(nav);

    for(let i=0; i<navItems.length; i++){
        let list = document.createElement('li');
        let link = document.createElement('a');
        link.setAttribute('href','');
        link.innerText = navItems[i];
        list.appendChild(link); 
        nav.appendChild(list);
    }
    

    heading.setAttribute('class','heading');
    heading.textContent = 'Tea And Tea';

    firstText.textContent = 'Come on down for some delicious cuisine!';
    secondText.textContent = 'Tasty and affordable!';

    content.appendChild(heading);
    content.appendChild(firstText);
    content.appendChild(secondText);
}