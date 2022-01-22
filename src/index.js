import loadHomePage from './home';
import loadMenu from './menu';
import loadContact from './contact.js';
import './style.css';
import createWebsite from './skeleton';
import coffee from './coffee.jpg';


createWebsite();
loadHomePage();
const content = document.querySelector('#content');
let navLink = document.querySelectorAll('.nav-link');
navLink.forEach(navLink => {
    navLink.addEventListener('click',(e) => {
        e.preventDefault();
        let linkName = e.target.classList[1];
        content.lastChild.remove();
        if(linkName === 'home'){
            loadHomePage();
        }else if(linkName === 'menu'){
            loadMenu();
        }else if(linkName === 'contact'){
            loadContact();
        }
    });
});