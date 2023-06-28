const Menu =()=>{
    const content = document.querySelector('#content');
    const menuDiv = document.createElement('div');
    menuDiv.id = 'menu';

    menuDiv.innerHTML = ` 
    <p>Menu Items</p>
    <ul>
    <li> Salads</li>
    <li> Shawarma</li>
    <li> Prawns</li>
    </ul>`

    content.appendChild(menuDiv);
}

export default Menu;