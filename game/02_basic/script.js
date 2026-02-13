var heading1 = document.querySelector("h1")
var heading = document.getElementsByClassName("head");
console.log(heading1.textContent);
var btn = document.querySelector(".btn");


// heading1.style.backgroundColor = 'red';
// const obj = {
//    height : '50px',
//    color : 'red '
   
// };
// heading1.style.obj;
heading1.textContent = "good night"
btn.addEventListener('click', 
       function() {
        heading1.textContent="Good afternoon";
        heading1.style.color='lightBlue'
        this.style.cursor='pointer'
       }
  
) 

  var id = setInterval(add, 7000);

  var count =0;

function add(){
    count++;
    if(count<=3){
        
    var a = Number(prompt("Enter value"))
    var b =Number( prompt("Entre a value b "))
      console.log(id);
    heading1.textContent=(a+b);
    }
    else{
        clearInterval(id);
    }
    sessionStorage.setItem("name", "Manan");


}
