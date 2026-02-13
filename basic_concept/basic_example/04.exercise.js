let btn = document.querySelector("button");
let head = document.querySelector("h1");
let count =0;
btn.addEventListener('click', ()=>{
    count++;
    head.textContent = count;
})