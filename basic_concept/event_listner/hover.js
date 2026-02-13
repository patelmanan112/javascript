var card = document.querySelector(".container");

// mouse movmenent :  click , dblclcik , mousemove , mouseleave mouseenter 


// using css property hover in js we can use same hover through addEventListner using action mouseenter and mouseleave
// card.addEventListener("mouseenter", ()=>{
//     card.style.backgroundColor = "green";
//     card.style.color = "white";
// })

// card.addEventListener("mouseleave", function(){
//     card.style.backgroundColor = "white";
//     card.style.color = "black";

// })



// to make  a trace on whole html file we can use add event listner to document and make changes through them with the help of event and event.target 
// document.addEventListener("click", (event)=>{
//     // console.log(event.target.textContent = "Changed ");
//         // console.log(event.target.getAttribute("class"));
        

// })

// we can trace or get the actually live location or can say co-ordinate of mouse moving in browser or particular box on which we have added a movusemove
// card.addEventListener("mousemove", (event)=>{
//     console.log("Your current location is "+ event.clientX , "," + event.clientY)
// })

var nme = document.querySelector("#name1");
var btn = document.querySelector("#btn");


// through focus we can trace the focus as a user is in input or not  focus , focus were been only used in input  
// nme.addEventListener("focus", ()=>{
//     nme.style.border = "2px solid red"
// })


// by this wheel we can track the scroll as it is moving upward or downward or static  
// document.addEventListener("wheel", (event)=>{
//     if(event.deltaY>0){
//         console.log("Downward Direction")
//     }
//       else if(event.deltaY<0){
//         console.log("Upward Direction")
//     }
//     else{
//         console.log("static");
        
//     }
// })


// as we use + we can not get the element but as we use , the string format written has been print in the terminal 


// when we use + or can say concat we get error => [object HTMLHeadingElement]Used copied this 
document.addEventListener("copy", (event)=>{
    console.log(event.target ,"Used copied this ")
})