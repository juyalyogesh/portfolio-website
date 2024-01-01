let buttongroup=document.querySelectorAll(".buttongroup button");
let card=document.querySelectorAll(".projectsecond .hcontainer");

let filltercard = e=>{
   console.log(e.target);
   e.target.classList.add("activebutton");
   document.querySelector(".activebutton").classList.remove("activebutton");
   card.forEach(hcontainer =>{
       hcontainer.classList.add("hide"); 
       if(hcontainer.dataset.name===e.target.dataset.name || e.target.dataset.name==="All"){
       hcontainer.classList.remove("hide"); 
       }
   });
}
buttongroup.forEach(button => button.addEventListener("click",filltercard));

function showdata(){
var menu = document.querySelectorAll('#navbarSupportedContent');
menu.forEach(function(menu) {
  menu.classList.remove('show'); 
});
}
