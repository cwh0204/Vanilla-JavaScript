const title = document.querySelector("h1");
const colors = ["skyblue", "blue" , "purple" , "tomato"];
const superEventHandler = {
    handleMouseEnter: function (){
        title.innerText = "mouse in here!"
        title.style.color=colors[0];
    },
    handleMouseLeave: function (){
        title.innerText = "mouse in gond!"
        title.style.color=colors[1];
    },
    handleWindowResize: function (){
        title.innerText = "You just resize!"
        title.style.color=colors[2];
    },
    handleTitleClick: function (){
        title.innerText = "That was a right click!"
        title.style.color=colors[3];
    }
};

title.addEventListener("mouseenter", superEventHandler.handleMouseEnter);
title.addEventListener("mouseleave", superEventHandler.handleMouseLeave);
window.addEventListener("resize", superEventHandler.handleWindowResize);
window.addEventListener("contextmenu", superEventHandler.handleTitleClick);