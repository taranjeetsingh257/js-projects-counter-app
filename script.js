// ------------
// first way
// ------------

// const count = document.querySelector(".count");
// const add = document.querySelector(".add");
// const reset_ = document.querySelector(".reset");
// const subt = document.querySelector(".subtract");

// add.addEventListener("click", () => {
//     count.innerHTML++;
// })

// subt.addEventListener("click", () => {
//     count.innerHTML--;
// })

// reset_.addEventListener("click", () => {
//     count.innerHTML = 0;
// })

// ------------
// better way to do it:
// ------------

const count = document.querySelector(".count");
const buttons = document.querySelector(".buttons");

// e is the event here
buttons.addEventListener("click", (e) => {
    if (e.target.classList.contains("add")){
        count.innerHTML++;
        setColor();
    }
    if (e.target.classList.contains("subtract")){
        count.innerHTML--;
        setColor();
    }
    if (e.target.classList.contains("reset")){
        count.innerHTML = 0;
        setColor();
    }
})

function setColor() {
    if(count.innerHTML > 0){
        count.style.color = "yellow";
    }
    else if(count.innerHTML < 0){
        count.style.color = "red";
    }
    else{
        count.style.color = "white";
    }
}