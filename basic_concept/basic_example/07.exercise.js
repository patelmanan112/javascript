let unorder = document.querySelector('.added');
let add = document.querySelector('.add');
let input = document.querySelector('.input');
let clear = document.querySelector('.clear');
// let head = document.querySelector('h1');
var list;
var count =0;

add.addEventListener('click', () => {
    list = document.createElement('li');
    // head.textContent = list;
    let content = input.value;
    list.textContent = content;
    unorder.appendChild(list);
    console.log(unorder);
    count++;
})

clear.addEventListener('click', () => {
    // list.textContent = "";
    
    // unorder.innerHTML= "";
  for(let i=count; i>0; i--){
      unorder[i].removeChild(list)
    console.log(unorder);
  }

})