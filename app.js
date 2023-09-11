const random = document.querySelector("#game");
const firstInputBox1 = document.querySelector("#game1");
const firstInputBox2 = document.querySelector("#game2");
const hidden = document.querySelector("#hiddenDiv")
const span1 = document.querySelector("#span1");
const span2 = document.querySelector("#span2");
function randomButtonClick(event){
    const randomNum1 = parseInt(firstInputBox1.value);
    const randomNum2 = parseInt(firstInputBox2.value);
    const randomNum = Math.floor(Math.random()* randomNum1 + 1);
    event.preventDefault();
    console.log(firstInputBox1.value);
    console.log(firstInputBox2.value);
    hidden.classList.remove("hidden")
    span1.innerText = "You chose: " + firstInputBox2.value + " ,the machine chose: " + randomNum +".";
    if (randomNum2 == randomNum){
        span2.innerText = "You Win!!"
    }
    else{
        span2.innerText = "You lose!!"
    }
}

random.addEventListener("submit", randomButtonClick);