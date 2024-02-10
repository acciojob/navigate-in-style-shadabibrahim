//your JS code here. If required.
// const nav = document.querySelector('nav');
let nav = document.createElement('nav');
nav.className = "container";

let list = ["Home","About","Contact","Itinerary"];
let ul = document.createElement('ul');

list.forEach((item)=>{
	let li =document.createElement('li');
	li.innerText = item;
	ul.appendChild(li);
})
nav.appendChild(ul);
document.body.appendChild(nav);
