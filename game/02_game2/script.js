var currentScore = document.querySelector('#currentScore');
var highScore  = document.querySelector('#highScore');
var timer = document.querySelector('#timer');
var clickButton = document.querySelector('#clickButton');
var startButton = document.querySelector('#startButton');
var resetButton = document.querySelector('#resetButton');
var statusMessage = document.querySelector('#statusMessage');
var pause_button = document.querySelector('#pause_button');
var resume_button = document.querySelector('#resume_button');
var userName = prompt("Enter username :");
var video = document.querySelector('.video')
var current = 0;
var high = 0;
var timer1 = 10;
var flag = false; 
var timeId = null;
var winner;
var subtitle = document.querySelector('.subtitle');
var container = document.querySelector('.container')
function onWebsite(){
    loadData();
    displayContent();
}
function loadData(){
    var temp = localStorage.getItem('highScore');
    if(temp!=null){
        high = temp;
    }
    else{
        high = 0;
    }
}


function displayContent(){
    currentScore.textContent = current;
    highScore.textContent  = high;
    timer.textContent = timer1;
    if(current>20){
        currentScore.style.color = "red";
    }
}
var value = 1.1;
function userClick(){
    if(flag){
        current++;
       if(value<2){
         value += 0.1;
       }
        displayContent();
        clickButton.style.transform = `scale(${value})`;
    }
}
function statusMsg(msg){
    statusMessage.textContent = msg;
}
function endgame(){
    clearInterval(timeId);
    clickButton.style.transform = scale(1);
    clickButton.disabled = true;
    startButton.disabled = false;

    flag = false;
    if(current>high){
        localStorage.setItem('highScore', current);
        highScore.textContent = current;
        statusMsg(` ${current/timer1}`);

        video.style.display = "inline";
    }
    else{
        statusMsg(`${current/timer1}`);
    }
}
function startGame(){
    clickButton.disabled = false;
    startButton.disabled = true;
    value =1;
    flag = true;
    timer1 = 10;
  
         video.style.display = "none";
    statusMsg("Click Me!");

      var startMsg = setTimeout( function(){
  statusMsg.textContent = "The game is begin";
    },1000);

 
    timeId = setInterval(()=>{
        
     timer1--;
        if(timer1<=0){
            endgame();
        }

       
         displayContent();
    },1000);

    // clickButton.style.color = 'red'; 
}
onWebsite();


function resetho(){
    localStorage.clear();
    current= 0;
    high= 0;
    displayContent();

}
function stopGame(){
     clickButton.disabled = true;
    
        clearInterval(timeId);

    flag = false;
    resume_button.disabled = false;
}
function runGame(){
    clickButton.disabled = false;
     timeId = setInterval(function(){
        
     timer1--;
        if(timer1<=0){
            endgame();
        }
         displayContent();
    },1000);
    
}

startButton.addEventListener('click', startGame);
clickButton.addEventListener('click', userClick);
resetButton.addEventListener('click',resetho);
pause_button.addEventListener('click',stopGame);
resume_button.addEventListener('click',runGame);