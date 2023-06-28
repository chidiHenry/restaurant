const RestaurantPage = () =>{
let content = document.querySelector('#content');
let sidebar = document.createElement('div');
sidebar.id = 'sidebar';
sidebar.innerHTML = ` <div>Blog</div>
<div>News</div>
<div>Refences</div>
<div>Other Restaurants</div>
<div>Testimonials</div> `
content.appendChild(sidebar);

let main = document.createElement('div');
main.id = 'main';
let image = document.createElement('div');
image.id = 'image';



let lowerBody = document.createElement('div');
lowerBody.id = 'lower-body';

lowerBody.innerHTML = ` <h4>Green Restaurant is the best place to dine East of the Niger.Contact us for the best possible cuisines in this part of the world</h4>
<p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>`
main.appendChild(image);
main.appendChild(lowerBody);

content.appendChild(sidebar);
content.appendChild(main)


}
export {RestaurantPage};