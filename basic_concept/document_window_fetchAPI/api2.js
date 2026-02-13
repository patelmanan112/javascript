var card = document.querySelector(".card");
var btn = document.querySelector("button");
var input1 = document.querySelector("#input1");

function cardMaker(data) {
    var div = document.createElement('div');
    div.style.width = '30vw';
    div.style.border = "2px solid black"
    div.style.padding = "10px";
    div.style.marginBottom = "30px"
    var img = document.createElement('img');
    img.setAttribute('src', data.strMealThumb)
    img.style.height = "29vw"
    var p1 = document.createElement('p');
    p1.textContent = `id : ${data.idMeal}`
    var p2 = document.createElement('p');
    p2.textContent = data.strInstructions
    var p3 = document.createElement('p');
    p3.textContent = data.strArea;
    p3.style.fontWeight = "bold";
    div.appendChild(img);
    div.appendChild(p1);
    div.appendChild(p3)
    div.appendChild(p2);

    card.appendChild(div);
}
var inputValue
var j = 0;
function loadAPI() {
    inputValue = input1.value;
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?f=${inputValue}`)

        .then((Response) => Response.json())
        .then((data) => {
            console.log(data)

            for (var i = 0; i <= 5; i++) {

                cardMaker(data.meals[j]);
                j++;

                btn.textContent = "Load More"
                if (j >= 23) {
                    j = 0;
                    btn.textContent = "click me "
                }
            }




        })

}
btn.addEventListener('click', () => {
    //    btn.disabled = true
    loadAPI()
})