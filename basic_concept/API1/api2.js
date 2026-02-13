var card = document.querySelector(".card");
var btn = document.querySelector("button");


function cardCreate(data){
    var p1 = document.createElement('p');
    var p2 = document.createElement('p');
    var div = document.createElement('div');
    var image = document.createElement('img');
    p1.textContent = data.type
    p2.textContent = data.id
    image.setAttribute('src', data.uri)
    image.style.height = "50vh"
    // image.style.weight = "25vw"

    div.appendChild(image)
    div.appendChild(p1)
    div.appendChild(p2)
    card.appendChild(div);
}
var i=0
function loadData(){
    fetch("https://facebook-scraper3.p.rapidapi.com/profile/photos?profile_id=100057864828042&rapidapi-key=0170cc2399mshc1e5aada443bde3p113caejsnad0fddd1c883")
    .then((Response)=>Response.json())
    .then((data)=>{
        
            cardCreate(data.results[i])
            i++
            
    })
}


btn.addEventListener('click', loadData);