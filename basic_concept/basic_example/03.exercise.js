let hide = document.querySelector(".hide");
let btn = document.querySelector(".hidden");
    hide.style.display = "none";
    let count =1;
btn.addEventListener('click', ()=>{
    if(count%2==1){
    hide.style.display = "block";
    btn.textContent = "hide"
    count++;
    }
    else{
        hide.style.display = "none";
        btn.textContent = "show"
        count++; 
    }
})