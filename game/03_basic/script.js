// var heading = document.querySelector('.head');
// console.log(heading);
// const headStyle = {
//     fontSize :'40px',
//     backgroundColor : 'green',
// }
// Object.assign(heading.style,headStyle);
// heading.style.headStyle;




// var paraCreat = document.createElement('h2');
// paraCreat.textContent = "hello";
// document.body.appendChild(paraCreat);


// var div = document.querySelector(".div");
// var headCreate = document.createElement('h2');
// headCreate.textContent = "through javaScript";
// div.appendChild(headCreate);
var grandFather = document.querySelector('.main');
var paraCreate = document.createElement('h4');
var h2 = document.querySelector('.h2')
paraCreate.textContent= "Through insert before";
document.body.insertBefore(paraCreate,h2);



