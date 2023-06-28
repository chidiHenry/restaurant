const Contact =()=>{

const content = document.querySelector('#content');
const contactDiv = document.createElement('div');
contactDiv.id = 'contact';
contactDiv.innerHTML = `
<input type = 'text' id='nameInput' placeholder= 'Enter your name'/>
<input type = 'email' id='emailInput' placeholder= 'Enter your email'/>
<input type = 'textarea' id='textarea' placeholder= 'Enter your address'/>
<button id='submitButton'>Submit</button>

`

content.appendChild(contactDiv);

}

export default Contact;