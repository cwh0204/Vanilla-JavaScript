const title = document.querySelector("body");
const title2 = document.querySelector("h2")
const colors = ["yellow","purple","skyblue","tomato"];
title2.style.color = "white"
title.style.backgroundColor = colors[1];
function handleResize(){
    var wsize = window.innerWidth;
    console.log(wsize);
    if(wsize <= 400){
        title.style.backgroundColor = colors[2];
    }
    else if(wsize > 400 && wsize <= 800 ){
        title.style.backgroundColor = colors[1];
    }
    else if(wsize > 800 && wsize <= 1200 ){
        title.style.backgroundColor = colors[0];
    }
}

window.addEventListener("resize",handleResize);