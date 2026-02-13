var btn = document.querySelector('.btn');
var card = document.querySelector('.card');


// API Application Programming Interface 
function createCard(data) {
      var div = document.createElement('div');
      div.style.width = '20vw';

      var img = document.createElement('img');
      img.setAttribute('src', data.strCategoryThumb);
      var p1 = document.createElement('p');
      p1.textContent = `id : ${data.idCategory}`

      var p2 = document.createElement('p');
      p2.textContent = data.strCategory;

      var p3 = document.createElement('p');
      p3.textContent = data.strCategoryDescription

      div.appendChild(img)
      div.appendChild(p1)
      div.appendChild(p2)
      div.appendChild(p3)
      card.appendChild(div)

}
function loadData() {
      fetch("https://www.themealdb.com/api/json/v1/1/categories.php")
            .then((Response) => Response.json())
            .then((data) => {
                  console.log(data);
                  for (let i = 0; i <= 13; i++) {
                        createCard(data.categories[i])
                  }
            })
}
btn.addEventListener('click', loadData)




fetch("https://www.themealdb.com/api/json/v1/1/categories.php")
      .then((Response) => Response.json())
      .then((data) => {

      })
