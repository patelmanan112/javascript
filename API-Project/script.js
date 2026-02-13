var box1 = document.querySelector('.box1')
var box2 = document.querySelector('.box2')
var card1 = document.querySelector('.card1')
var btn = document.querySelector('.btn')
var i = 0;
function title(data) {
    // var img = document.createElement('img')
    // img.setAttribute('src', data.urlToImage);
    // img.style.height = "200px"
    // box1.appendChild(img);
    // var p1 = document.createElement('p');
    // p1.textContent = data.title
    // box2.appendChild(p1);
    var card = document.createElement('div')
    card.innerHTML = `
       <div class="box1">
                  <img class = "image" src = "${data.urlToImage}"/>
                </div>
                <div class="box2">
                <h3 class = "title" > ${data.title}</h3>
                <p> ${data.author}</p>
                <p class = "paragraph"> ${data.description} </p>
                </div>`;
    card1.appendChild(card)
    card.className = "card"

}

function loadData() {
    // loading.textContent = "Loading Data"
    fetch("https://newsapi.org/v2/everything?q=keyword&apiKey=9631a675593c4bdeacbe108a6d45ef99")
        .then((Response) => Response.json())
        .then((data) => {
            console.log(data)
            var article = data.articles;

            for (let j = 0; j <= 10; j++) {
                title(article[i]);
                i++;
            }
            if (i >= 99) {
                i = 0;
            }

        })
}
loadData()
btn.addEventListener('click', loadData);