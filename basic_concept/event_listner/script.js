var nme = document.querySelector("#name1");
var btn = document.querySelector("#btn");



// uses of button as a addEventListner and type of function is three type of 


// btn.addEventListener('click', function () {
//     console.log("user pressed submit button and user name is " + nme.value);
//     nameCheck();
// });


nme.addEventListener('keypress', (event)=>{
    if(event.key== "Enter"){
        nameCheck();
    }
})


nme.addEventListener('input', (event)=>{
    console.log(event.target.value);
})
btn.addEventListener("dblclick", nameCheck);


// btn.addEventListener('click', ()=>{
//      console.log("user pressed submit button and user name is "+ nme.value);   
// })



// btn.addEventListener('click', printName);
// function printName(){
//      console.log("user pressed submit button and user name is "+ nme.value);   
// }
let namel;
function nameCheck() {
    namel = nme.value.split("");
    console.log(namel);
    namel.forEach((data) => {
        if (data != "|" && data != "#" && data != "@" && data != "&" && data != '!' && data != '%' && data != '*' && data != '~') {
            console.log("the given character dosen't contain any special symbols " + data);
        }
        else {
            console.log("the current character is equal to one of the given special character " + data);
        }
    })
    document.querySelector("#name1").value = "";
}