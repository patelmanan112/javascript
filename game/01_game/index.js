//monitor button
var player1 = prompt("Enter your name :");
console.log(player1);
var player2 = prompt("Enter your name :");
console.log(player2);
const boxes = document.querySelectorAll(".box");
console.log(boxes);
let player = true;

const winner = [
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 4, 8],
  [2, 4, 6]

];
function checkwinner() {
  for (let data of winner) {
    const btn1 = boxes[data[0]].innerHTML;
    const btn2 = boxes[data[1]].innerHTML;
    const btn3 = boxes[data[2]].innerHTML;

    if (btn1 != "" && btn2 != "" && btn3 != "") {
      if (btn1 === btn2 && btn2 === btn3) {
        if (btn1 === "O") {
          console.log("The winner is " + player1);

        }
        else {
          console.log("The winner is " + player2);
        }
        for (let box of boxes) {
          box.disabled = true;
        }
      }
    }
  }
}
boxes.forEach((box) => {
  box.addEventListener("click", () => {
    // console.log(box.innerHTML);
    if (player) {
      box.innerHTML = "O";
      player = false;
    }
    else {
      box.innerHTML = "X";
      player = true;
    }
    box.disabled = true;
    checkwinner();


  });
});

boxes.addEventListener("click", function () {
  localStorage.setItem("cityLocal", "X");
  outputParagraph.textContent = "X";
});


saveLocalButton.addEventListener("click", function () {
  localStorage.setItem("cityLocal", "Mumbai");
  outputParagraph.textContent = "City saved to Local Storage: Mumbai";
});

//   boxes.forEach((box)=>{
//         box.addEventListener("click",()=>{
//             box.disabled = false;
//         });
//     });





const saveLocalButton = document.getElementById("saveLocalBtn");
const retrieveLocalButton = document.getElementById("retrieveLocalBtn");
const saveSessionButton = document.getElementById("saveSessionBtn");
const retrieveSessionButton = document.getElementById("retrieveSessionBtn");
const outputParagraph = document.getElementById("output");

saveLocalButton.addEventListener("click", function () {
  localStorage.setItem("cityLocal", "Mumbai");
  outputParagraph.textContent = "City saved to Local Storage: Mumbai";
});

retrieveLocalButton.addEventListener("click", function () {
  const savedCityLocal = localStorage.getItem("cityLocal");
  if (savedCityLocal) {
    outputParagraph.textContent = "City retrieved from Local Storage: " + savedCityLocal;
  } else {
    outputParagraph.textContent = "City not found in Local Storage.";
  }
});

saveSessionButton.addEventListener("click", function () {
  sessionStorage.setItem("citySession", "Delhi");
  outputParagraph.textContent = "City saved to Session Storage: Delhi";
});

retrieveSessionButton.addEventListener("click", function () {
  const savedCitySession = sessionStorage.getItem("citySession");
  if (savedCitySession) {
    outputParagraph.textContent = "City retrieved from Session Storage: " + savedCitySession;
  } else {
    outputParagraph.textContent = "City not found in Session Storage.";
  }
});