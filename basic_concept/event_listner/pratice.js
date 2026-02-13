var inn  = document.querySelector(".in");
var out = document.querySelector(".out");
var container = document.querySelector(".container");
var countIn =0;
var countOut =0;
var show = document.querySelector(".show");
var save = document.querySelector(".save");
container.addEventListener('mouseenter', ()=>{
  var a = Math.floor(Math.random() * 256);
    var b = Math.floor(Math.random() * 256);
    var c = Math.floor(Math.random() * 256);
    let color =  `rgb(${a}, ${b}, ${c})`;
    container.style.backgroundColor = color;
    countIn++;
    inn.textContent=  `In : ${countIn}`;
})

container.addEventListener('mouseleave', ()=>{
  var a = Math.floor(Math.random() * 256);
    var b = Math.floor(Math.random() * 256);
    var c = Math.floor(Math.random() * 256);
    let color =  `rgb(${a}, ${b}, ${c})`;
    container.style.backgroundColor = color;
      countOut++;
    out.textContent=  `Out : ${countOut}`;
})
save.addEventListener('click', ()=>{
    localStorage.setItem('In:', countIn);
    localStorage.setItem('Out', countOut);
})
show.addEventListener('click', ()=>{
    localStorage.setItem('In:', 0);
    localStorage.setItem('Out', 0);
    countIn.textContent = 0;
    
})
let view =   localStorage.getItem('In:');
   let view1 = localStorage.getItem('Out');
   inn.textContent = `In : ${view}`;
   out.textContent = `Out : ${view1}`