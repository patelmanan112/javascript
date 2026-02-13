var btn = document.querySelector('#btn');
var txt = document.querySelector('#txt');
var card = document.querySelector('.card');
var para = document.querySelector('p');
var div = document.createElement('div');
var clr = document.querySelector('#clr');
card.appendChild(div);

function location1(data1, data2) {
    var p1 = document.createElement('p');
    p1.textContent = `${data1} : ${data2}`
    div.appendChild(p1);
}

function current(data3, data4) {
    var p2 = document.createElement('p');
    p2.textContent = `${data3} : ${data4}`
    div.appendChild(p2);
}

function condition(data5, data6) {
    var p3 = document.createElement('p');
}

function loadData() {
    var value1 = txt.value;
    div.innerHTML = ""
    fetch(`https://api.weatherapi.com/v1/current.json?key=2aeb667302524bd284a50751250912&q=${value1}&aqi=yes`)
        .then((Response) => Response.json())
        .then((data) => {
            var arr1 = Object.keys(data.location);
            var arr2 = Object.values(data.location);
            var arr3 = Object.keys(data.current);
            var arr4 = Object.values(data.current);
            var arr5 = Object.keys(data.current.condition);
            var arr6 = Object.values(data.current.condition);
            //console.log(arr5)
            for (let i = 0; i < arr1.length; i++) {
                location1(arr1[i], arr2[i]);
            }
            for (let i = 0; i < arr3.length; i++) {
                current(arr3[i], arr4[i]);
            }

        })
}
btn.addEventListener("click", loadData);
clr.addEventListener("click", clearAll);

function clearAll() {
    div.innerHTML = ""
}