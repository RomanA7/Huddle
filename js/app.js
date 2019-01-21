//animating header onload
window.addEventListener("load", function(){

  function nav_anim() {
    var nav = document.querySelector("nav");
    nav.classList.add("animation");
  }
  function img_anim() {
    var img = document.querySelector(".main-img");
    img.classList.add("showing");
  }
  function main_anim() {
    var main = document.querySelector(".main h1");
    main.classList.add("h-show");
    var bigbtn = document.querySelector(".big-btn");
    bigbtn.classList.add("btn-show");
    var par = document.querySelector(".sub-title");
    par.classList.add("sub-showing");
  }

  setTimeout(main_anim, 500);
  setTimeout(nav_anim, 0);
  setTimeout(img_anim, 600);
});

//animating elements on scroll
window.addEventListener("scroll", function(){
   var element = document.querySelectorAll('.flexrow');
   var i = 0;

   for(i=0; i < element.length; i++){
    pos = element[i].getBoundingClientRect().top;
    var bottom = window.scrollY + window.innerHeight;
    var offset = bottom / 1.4;
    if(bottom > offset+pos){element[i].classList.add("scroll-reveal")}
    //else{element[i].classList.remove("scroll-reveal")}
   }
})
