function divide(a,b){
  
    try{
        var c = a/b;
         h1.textContent = `Answer : ${c}`

    }
    catch(error){
        alert(error.message);
        h1.textContent  = "Error found"
    }
    finally{
        console.log(c);
        if(c != 'Infinity'){
        h1.textContent = `Answer : ${c}`
        }
    }
       
}
var h1 = document.querySelector('h1')
var a = prompt(`enter the value of a`);
var b =  prompt(`enter the value of b`);
divide(a,b);