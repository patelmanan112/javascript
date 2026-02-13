let unorder = document.querySelector('.add');
let btn  = document.querySelector('button');
let input = document.querySelector('.input');
// let head = document.querySelector('h1');



btn.addEventListener('click', ()=>{
    let list = document.createElement('li');
// head.textContent = list;
let content = input.value;
 list.textContent = content;
unorder.appendChild(list);
})

