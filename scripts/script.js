// JavaScript Document
console.log("hi");

const menuOpenButton = document.querySelector("li > button");
const deNav = document.querySelector("header nav");



menuOpenButton.onclick = openMenu;


function openMenu(){
  deNav.classList.add("toonMenu")
  
}


// sluiten button

const menuSluitButton = document.querySelector("nav button");


menuSluitButton.onclick = sluitMenu;



function sluitMenu() {
  deNav.classList.remove("toonMenu");
}
