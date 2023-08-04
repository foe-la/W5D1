// Menu data structure
var menuLinks = [
    {text: 'about', href: '/about'},
    {text: 'catalog', href: '/catalog'},
    {text: 'orders', href: '/orders'},
    {text: 'account', href: '/account'},
  ];

let mainEl = document.querySelector("main");
mainEl.style.backgroundColor = "#4a4e4d";
mainEl.textContent = ('SEI Rocks!')
mainEl.classList.add("flex-ctr");

let topMenuEL = document.querySelector("#top-menu");
topMenuEL.style.height = "100%";
topMenuEL.style.backgroundColor = "#0e9aa7";
topMenuEL.classList.add("flex-around");

for(let i = 0; i < menuLinks.length; i++) {
    const menuLink = menuLinks[i];

    const aEl = document.createElement("a");
aEl.textContent = menuLink.text; 
aEl.setAttribute("href", menuLink.href);
topMenuEL.appendChild(aEl);
}