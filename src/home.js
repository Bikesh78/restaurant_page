export default function loadHomePage(){
    const content = document.querySelector('#content');
    const heading = document.createElement('div');
    const firstLine = document.createElement('p');
    const secondLine = document.createElement('p');

    heading.setAttribute('class','heading');
    heading.textContent = 'Tea And Tea';

    firstLine.textContent = 'Come on down for some delicious cuisine!';
    secondLine.textContent = 'Tasty and affordable!';

    content.appendChild(heading);
    content.appendChild(firstLine);
    content.appendChild(secondLine);
}