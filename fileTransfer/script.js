import {cm , Mile1 , feet1 , cal} from './allFn.js'


var btn2 = document.querySelector('#btn2');
var inp = document.querySelector('#inp');
var card = document.querySelector(".div");
var box = document.createElement('div');
var inp2 = document.querySelector('#txt');
var a;
var b;
btn2.addEventListener('click', ()=>{
    a = parseInt(inp.value);
    b = (inp2.value);
    cal(a , b);
    box.innerHTML = `
    <p> Kilometer to Centimeter : ${cm}</p>
        <p>Kilometer to Mile : ${Mile1}</p>
        <p>Kilometer to Feet : ${feet1}</p>`
        card.appendChild(box);
});

