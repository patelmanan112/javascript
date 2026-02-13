// diffrence between global and local variable : --> global variable is define and it will stored in memory and as in local it is defien in functional so as it's function will be closed then  it's variable memory will be eraised 

const colorDisplay = document.querySelector('#colorDisplay');


const messageDisplay = document.querySelector('#message');
const currentStreakDisplay = document.querySelector('#currentStreak');
const bestStreakDisplay = document.querySelector('#bestStreak');

const colorBoxes = document.querySelectorAll('.color-box');
console.log(colorBoxes);

const newRoundBtn = document.querySelector('#newRoundBtn');

const easyBtn = document.querySelector('#easyBtn');
const hardBtn = document.querySelector('#hardBtn');
const resetStreakBtn = document.querySelector('#resetStreakBtn');

var currentStreak = 0; // user -> track
var bestStreak = 0; // previous data fetch -> store
var pickCorrectColor = 0;  // -> random color 
var color = []; // empty array -> 6-color store index - by-index
var num = 6;  // loop control
var heart = document.querySelectorAll(".heart");
var tryAgain = 0;

function webLoad() { // it is made bcz to call function repeatedly is not possible first we call onLoad the it load data after that displaycontent has to load 
    onLoad();
    setGame();
    displayContent();
    //   messageDisplay.textContent = "Click button to start the game";
    //   heart.style.display= "flex";
}



// whenever the website will load then first it will load the entire data ....  
function onLoad() {
    var temp = localStorage.getItem('highBestStreak');
    if (temp != null) {
        bestStreak = parseInt(temp);      // -- > here the localstorage contains the data so it will return the data no
    }           // parseInt is used to convert a string to number as in  localStorage it will be written as in string 
    else {
        bestStreak = 0; // -- > if there is no data in localstorage so it wwill return null instead of number.
    }
}



// here we will define the display content message in a function format ... 
function displayContent() {
    currentStreakDisplay.textContent = currentStreak;
    bestStreakDisplay.textContent = bestStreak;

}



//  random color generator  math.random will have range of it is 0-1 and it will not exactly same after that multiply by 256 as it will convert the range from 0-1 to 0-256 and in decimal so math.floor so we gett only integer //
function colorGenerate() {
    var a = Math.floor(Math.random() * 256);
    var b = Math.floor(Math.random() * 256);
    var c = Math.floor(Math.random() * 256);
    return `rgb(${a}, ${b}, ${c})`
}


function generateColor(num) {
    const arr = []
    for (var i = 0; i < num; i++) {
        arr.push(colorGenerate());
    }
    return arr;
}



function pickGenerator() {
    const index = Math.floor(Math.random() * color.length);
    return color[index];
}

var winAgain = 0;

function winGuess(event) {
    var tempBox = event.target;
    if (pickCorrectColor === tempBox.style.backgroundColor) {
        messageDisplay.textContent = "You won 🥳🥳"
        currentStreak++;
  
        if (currentStreak > bestStreak) {
            bestStreak = currentStreak;
            localStorage.setItem('highBestStreak', bestStreak);
            webLoad();
        }
         heart[0].style.display = "block";
    heart[1].style.display = "block";
    heart[2].style.display = "block";
        colorBoxes.forEach(box => {
            box.style.backgroundColor = pickCorrectColor;
            box.style.visibilty = "visible";
        })
        tempBox.style.visibilty = "visible";
        setGame();


    }

    else {
        messageDisplay.textContent = "Try again ❌";
        displayContent();
        tempBox.style.visibilty = "hidden";
        tryAgain++;
        if (tryAgain == 1) {
            heart[0].style.display = "none";
        }
        else if (tryAgain == 2) {
            heart[0].style.display = "none"
            heart[1].style.display = "none";
        }
        else if (tryAgain == 3) {
            heart[2].style.display = "none";
            webLoad();
        }
        else {

            for (var j = 0; j < 6; j++) {
                colorBoxes[j].style.display = "none";
            }
        }

        //  colorBoxes.style.display = 'none';
    }
}

colorBoxes.forEach((box) => {
    box.addEventListener('click', winGuess);
})
function setGame() {

    color = generateColor(num);  // 
    pickCorrectColor = pickGenerator();
    // console.log(color);
    // console.log(pickCorrectColor);
    colorDisplay.textContent = pickCorrectColor;
    for (var i = 0; i < color.length; i++) {
        colorBoxes[i].style.backgroundColor = color[i];
    }
}
function resetStreak() {
    localStorage.clear();
    displayContent();
    currentStreak = 0;
    bestStreak = 0;
    webLoad();
}
function easy() {
    var num2 = 3;
    color = generateColor(num2);  // 
    pickCorrectColor = pickGenerator();
    // console.log(color);
    // console.log(pickCorrectColor);
    colorDisplay.textContent = pickCorrectColor;
    for(var i=0; i<=2;i++){
        colorBoxes[i].style.backgroundColor = color[i];
    }
    for (var i = 0; i < 4; i++) {
        colorBoxes[i].style.display = "block";
    }

}
function newRound() {
    heart[0].style.display = "block";
    heart[1].style.display = "block";
    heart[2].style.display = "block";


    for (var j = 0; j < 6; j++) {
        colorBoxes[j].style.display = "block";
    }


tryAgain =0;



  
    messageDisplay.textContent = "New Round Started";
    displayContent();
  

}

webLoad();
resetStreakBtn.addEventListener('click', resetStreak);
easyBtn.addEventListener('click', easy);
newRoundBtn.addEventListener('click', newRound);








