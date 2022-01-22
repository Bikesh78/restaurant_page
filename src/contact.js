export default function loadContact(){
    const content = document.querySelector('#content');
    const contactContainer = document.createElement('div');
    const contactText = document.createElement('p');
    const name = document.createElement('input');
    const email = document.createElement('input');
    const message = document.createElement('textarea');
    const submit = document.createElement('input');

    contactContainer.setAttribute('class','contact-container');
    
    contactText.textContent = 'Contact Us'

    function setMultipleAttribute(variable,id,placeholder,type){
        variable.setAttribute('id',`${id}`);
        variable.setAttribute('placeholder',`${placeholder}`);
        variable.setAttribute('type',`${type}`);
    }
    setMultipleAttribute(name,'name','Name','text');
    setMultipleAttribute(email,'email','Email','email');
    setMultipleAttribute(message,'message','Your Message Here','text');
    message.setAttribute('row','10');
    setMultipleAttribute(submit,'submit','Submit','submit');



    content.appendChild(contactContainer);
    contactContainer.appendChild(contactText);
    contactContainer.appendChild(name);
    contactContainer.appendChild(email);
    contactContainer.appendChild(message);
    contactContainer.appendChild(submit);
}