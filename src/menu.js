export default function loadMenu(){
    const content = document.querySelector('#content');
    const menuCard = document.createElement('div');
    const textContainer =document.createElement('div');
    const dishName = document.createElement('p');
    const price = document.createElement('p');
    const ingredients = document.createElement('p');
    const headerContainer = document.createElement('div');

    menuCard.classList.add('menu-card');
    textContainer.classList.add('text-container');
    dishName.classList.add('dish-name');
    price.classList.add('price');
    ingredients.classList.add('ingredients');
    headerContainer.classList.add('header-container');

    content.appendChild(menuCard);
    menuCard.appendChild(textContainer);
    textContainer.appendChild(headerContainer);
    textContainer.appendChild(ingredients);
    headerContainer.appendChild(dishName);
    headerContainer.appendChild(ingredients);
    
}