function loadMenu(){
    const menuContainer = document.createElement('div');
    const content = document.querySelector('#content');
    const menuCard = document.createElement('div');   //use cloneNode
    const textContainer =document.createElement('div');
    const dishName = document.createElement('p');
    const price = document.createElement('p');
    const ingredients = document.createElement('p');
    const headerContainer = document.createElement('div');
    // let counter = 0;

    function Dish(menuId, dishName, price, ingredients){
        this.dishName = dishName;
        this.price = price;
        this.ingredients = ingredients;
        // counter++;
    }
    const avocadoToast = new Dish('avocado-toast','Avocado Toast','Rs. 100', 'Avocado and black pepper with egg');
    const strawberryCake = new Dish('strawberryCake','Strawberry Shortcake', 'Rs. 100', 'Strawberry smothered on cake')
    const biscuitGravy = new Dish('biscuit-gravy','Biscuit Gravy', 'Rs. 125','BISCUIT SMOTHERED IN HOUSE MADE SAUSAGE GRAVY OR VEGETARIAN MUSHROOM GRAVY');
    const theDahlia = new Dish('dahlia','The Dahlia','Rs. 250','SAUSAGE PATTY, APPLE BUTTER, FRIED EGG, COVERED IN MAPLE SYRUP');
    // console.log('test to see if counter increases each time Dish is instantiated',counter);

    menuContainer.classList.add('menu-container');
    menuCard.classList.add('menu-card');
    textContainer.classList.add('text-container');
    dishName.classList.add('dish-name');
    price.classList.add('price');
    ingredients.classList.add('ingredients');
    headerContainer.classList.add('header-container');

    function createMenuCard(dish){
        dishName.textContent = dish.dishName;
        price.textContent = dish.price;
        ingredients.textContent = dish.ingredients;
    }

    
    // use this array to loop for 'counter' times to call createMenuCard function
    let dishArray = [avocadoToast,strawberryCake,biscuitGravy,theDahlia]; 

    for(let i = 0; i< dishArray.length; i++){
        createMenuCard(dishArray[i]);
        
        menuCard.appendChild(textContainer);
        textContainer.appendChild(headerContainer);
        headerContainer.appendChild(dishName);
        headerContainer.appendChild(price);
        textContainer.appendChild(ingredients);
        menuContainer.appendChild(menuCard.cloneNode(true));
    }

   

    content.appendChild(menuContainer);
    
}

export default loadMenu;