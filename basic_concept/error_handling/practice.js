var txt = document.querySelector('#input');
var btn = document.querySelector('#btn');
var para = document.querySelector('p');
console.log("hello")

function displayData(){
    var value1 = txt.value;
     console.log(value1)
    try{
        if(value1>='0' && value1<='9') throw "Number can not be a  input";
        if(value1>= 'A' && value1<='Z') throw "inpul value can not be capital "
     
        console.log(value1)
        para.textContent = value1
        
    }
    catch(error){
        console.log(error);
          para.textContent = error
    }
}
btn.addEventListener('click', displayData);
