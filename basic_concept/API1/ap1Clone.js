var inp = document.querySelector('#txt');
var btn = document.querySelector('#btn');
var card = document.querySelector('.card');

function createCard(data) {

    var div = document.createElement('div')
   div.innerHTML = `<p> ${data.schemeCode}</p>
    <p> ${data.schemeName} </p>`;

card.appendChild(div);
console.log(card)
}

console.log(card)

function loadData() {
    // div.innerHTML = ""
    fetch(`https://api.mfapi.in/mf/search?q=${inp.value}`)
        .then((Response) => Response.json())
        .then((data) => {
            // console.log(data);

            for (let i = 0; i < 14; i++) {
                createCard(data[i])

            }
        })
}
btn.addEventListener('click', loadData)