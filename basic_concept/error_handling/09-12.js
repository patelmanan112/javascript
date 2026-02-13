var txt = document.querySelector('#input');
var btn = document.querySelector('#btn');
var para = document.querySelector('p');
var arr = [10,20,30,40,50];


function displayData() {
    var index = parseInt(txt.value);

    try {
        if (index > 4) throw "User defined error which is out of bound array index"
        console.log(arr[index]);
        para.textContent = arr[index];
        para.style.color = "green"
    }
    catch(error){
        console.log(error);
        para.textContent = error;
        para.style.color = "red";
    }
    finally{
        txt.value = ""
    }
}
btn.addEventListener('click', displayData);

