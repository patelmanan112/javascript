var inp = document.querySelector('#txt');
var btn = document.querySelector('#btn');
var div = document.createElement('div')
var card = document.querySelector('.card');
var btn2 = document.querySelector('#api2')
var card1 = document.querySelector('.card1')
var div1 = document.createElement('div')
function createCard(data) {
    console.log(data.schemeCode);
    var p1 = document.createElement('p');
    p1.textContent = data.schemeCode;
    div.appendChild(p1)
    var p2 = document.createElement('p');
    p2.textContent = data.schemeName;
    div.appendChild(p2);
    card.appendChild(div);

    // using `` we get a last element created whyda
}

console.log(card)

function loadData() {
    div.innerHTML = ""
    fetch(`https://api.mfapi.in/mf/search?q=${inp.value}`)
        .then((Response) => Response.json())
        .then((data) => {
            // console.log(data);

            for (let i = 0; i < 14; i++) {
                createCard(data[i])

            }
        })
}


function createCard1(data) {
    console.log(data.schemeCode)
    console.log(data.schemeCode);
    var p3 = document.createElement('p');
    p3.textContent = data.schemeCode;
    div1.appendChild(p3)
    var p4 = document.createElement('p');
    p4.textContent = data.schemeName;
    div1.appendChild(p4);
    card1.appendChild(div1);
}


function loadApi2() {
    div.innerHTML = ""
    fetch(`https://api.mfapi.in/mf?limit=100&offset=0`)
        .then((Response) => Response.json())
        .then((data) => {
            // console.log(data);

            for (let i = 0; i < 14; i++) {
                createCard1(data[i])

            }
        })
}
btn.addEventListener('click', loadData)
btn2.addEventListener('click', loadApi2);