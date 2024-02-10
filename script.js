//your JS code here. If required.
const nav = document.querySelector('nav');

let list = ["Home","About","Contact","Itinerary"];
let ul = document.createElement('ul');
let li =document.createElement('li');
list.forEach((item)=>{
	li.innerText += item;
	
})
ul.appendChild(li);

nav.appendChild(ul);

