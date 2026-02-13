// // when we have to load the text content or any element through js we 

// document.addEventListener("DOMContentLoaded", () => {
//     document.querySelector("p").textContent = "hello";

// });


// // when we have to load text and added css we need to use load window
// window.addEventListener("load", () => {
//     document.querySelector("p").textContent = "hello";
//     document.querySelector("p").style.color = "red";
// })


// fetch("https://dummyjson.com/products")
//     .then((response) => response.json())
//     .then((posts) => {
//         console.log("all post :", posts);

//     })


var button = document.getElementById("loadPostsBtn");
var h1 = document.querySelector("h1");

var count = 0;

// task -> data in array -> 15th index -> "title" -
button.addEventListener("click", () => {
    
    fetch("https://dummyjson.com/products")
    .then((response) => response.json())
        .then((posts) => {
            // console.log(typeof(posts.products));
            // console.log("All posts:", posts.products);
            var arr = posts.products;
            // console.log(posts);

            var timeId = setInterval(() => {
                ++count;
                // console.log(count)
                if (count >= 30) {
                    clearInterval(timeId);
                }
                // arr.forEach(element => {
                //     console.log(element);
                // });

                console.log(arr[count]);
            }, 8000);

            h1.textContent = arr[15].dimensions.height;
            h1.style.color = "red";
        });
    //     .catch((error) =>{
    //         console.log("Error:",error);
    //     });
    })