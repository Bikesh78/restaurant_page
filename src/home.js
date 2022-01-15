export default function loadHomePage(){
    const content = document.querySelector('#content');
    const home = document.createElement('div');
    const header = document.createElement('h1');
    const aboutUs = document.createElement('h2');
    const longParagraph = document.createElement('p');
    const bannerImage = document.createElement('img');

    home.classList.add('section-home');
    longParagraph.classList.add('long-paragraph');
    bannerImage.classList.add('banner-image');
    
    bannerImage.src = '8dc1be4db51cced64881.jpg';
    header.textContent = ' Welcome to Tea and Tea';
    aboutUs.textContent = 'About US';
    longParagraph.textContent = ` Established in 2020, we are located in Buddhanagar, New Baneshwor. 
    At Tea and Tean you will find real, whole food prepared fresh daily. 
    Everything we serve from breakfast to our sandwiches, 
    salads, soups & more are made to order using only the freshest, highest quality ingredients.`
    
    content.appendChild(home);
    home.appendChild(bannerImage);
    home.appendChild(header);
    home.appendChild(longParagraph);
  
    console.log('testing');
  
    /*   const content = document.querySelector('#content');
    const header = document.createElement('div');
    const heading = document.createElement('div');
    const firstText = document.createElement('p');
    const secondText = document.createElement('p');
    const nav = document.createElement('ul');
    const body = document.querySelector('body');
    let navItems = ['Home','Menu','Contact'];

    header.setAttribute('class','header');
    body.insertBefore(header,content);
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
    content.appendChild(secondText); */
}