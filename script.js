// scroll reveal
const items = document.querySelectorAll(".reveal");

function reveal(){
items.forEach(el=>{
if(el.getBoundingClientRect().top < window.innerHeight - 80){
el.classList.add("active");
}
});
}

window.addEventListener("scroll",reveal);
window.addEventListener("load",reveal);

// smooth scroll fix
document.querySelectorAll("a[href^='#']").forEach(a=>{
a.addEventListener("click",function(e){
e.preventDefault();
document.querySelector(this.getAttribute("href"))
.scrollIntoView({behavior:"smooth"});
});
});

// typing
const text = "Laravel Developer";
let i=0;

function typing(){
if(i < text.length){
document.getElementById("typing").innerHTML += text.charAt(i);
i++;
setTimeout(typing,100);
}
}
typing();