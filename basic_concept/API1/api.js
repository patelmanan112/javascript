var btn = document.querySelector('#btn');
var txt = document.querySelector('#txt');
var card = document.querySelector('.card');
var para = document.querySelector('p');
var div = document.createElement('div');
var clr = document.querySelector('#clr');
card.appendChild(div);

function createCard(data) {
    var p1 = document.createElement('p');
    p1.textContent = `Name : ${data.location.name}`;
    div.appendChild(p1);
    var p2 = document.createElement('p');
    p2.textContent = `Region : ${data.location.region}`;
    div.appendChild(p2);
    var p3 = document.createElement('p');
    p3.textContent = `Country : ${data.location.country}`;
    div.appendChild(p3);
    var img = document.createElement('img');
    img.setAttribute('src', data.current.condition.icon)
    div.appendChild(img);
    var p4 = document.createElement('p');
    p4.textContent = `Temp : ${data.current.temp_c} °C`;
    div.appendChild(p4);
    var p5 = document.createElement('p');
    p5.textContent = `CO : ${data.current.air_quality.co}`;
    div.appendChild(p5);
}


function loadData() {
    var value1 = txt.value;
    div.innerHTML = ""
    fetch(`https://api.weatherapi.com/v1/current.json?key=2aeb667302524bd284a50751250912&q=${value1}&aqi=yes`)
        .then((Response) => Response.json())
        .then((data) => {
            createCard(data);


        })
}
btn.addEventListener("click", loadData);
clr.addEventListener("click", clearAll);

function clearAll() {
    div.innerHTML = ""
}
document.addEventListener('keypress', (event)=>{
    if(event.target = 'enter'){
        loadData()
    }
})