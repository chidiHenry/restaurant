import { RestaurantPage } from "./RestaurantPage";
import Contact from "./Contact";
import Menu from "./Menu";

const createTabs = ()=>{
const top = document.querySelector('#top')

// const tabs = document.createElement('div');
// tabs.id = 'tabs';



const homeTab = document.createElement('button');
const menuTab = document.createElement('button');
const contactTab = document.createElement('button');

homeTab.id = 'homeTab';
menuTab.id = 'menuTab';
contactTab.id = 'contactTab';
homeTab.className = 'nav';
menuTab.className = 'nav';
contactTab.className = 'nav';

homeTab.textContent = 'Home';
menuTab.textContent = 'Menu';
contactTab.textContent = 'Contact Us'

top.appendChild(homeTab);
top.appendChild(menuTab);
top.appendChild(contactTab);

homeTab.addEventListener('click', function(){
    clearContent()
    RestaurantPage();
})

menuTab.addEventListener('click', function(){
    clearContent()
    Menu();
})

contactTab.addEventListener('click', function(){
    clearContent()
    Contact();
})

}

function clearContent(){
    const content = document.querySelector('#content');
    while(content.hasChildNodes()){
        content.firstChild.remove();
    }
}

export default createTabs;