let image = document.querySelector('#image');
let btn = document.querySelector('button');
var count =0;
let obj =[
"https://imgs.search.brave.com/CoLSDDd4sRXHQwG05k4g_45rfq8Ci813CnD_tKV3pEM/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTIy/MTgwMDQ4MS9waG90/by9uZXctbm9ybWFs/LWFmdGVyLWNvcm9u/YXZpcnVzLW5ldy1u/b3JtYWwtcm9hZC1z/aWduLmpwZz9zPTYx/Mng2MTImdz0wJms9/MjAmYz1sOS1Ua2wt/WTVrb2ZGRGlWTDFr/RkFKaW9ycGFCM01k/NEJoZjJ6Q1NrbmtF/PQ",
"https://imgs.search.brave.com/GClVrZN3EeOuNYlaULfRpK43UE_0DdEnPwIfEPNlYp0/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTI0/ODQxMTY3Ni92ZWN0/b3IvbmV3LW5vcm1h/bC1vZmZpY2Utd29y/ay1saWZlLWJhbGFu/Y2Utc2l0dWF0aW9u/LXdpdGgtbWFzay1h/bmQtc29jaWFsLWRp/c3RhbmNlLWNvbmNl/cHQtd2l0aC5qcGc_/cz02MTJ4NjEyJnc9/MCZrPTIwJmM9bm02/czVhNUlnYUttZ2Zo/c1Nma1JtOVhZNmJp/QzdBUGNKWDJQaGJN/Z3otQT0",
"https://imgs.search.brave.com/p-ezAy2u_XvoEbifSkuYk7y-jVE1rPgJbhJ9QEfpDN8/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTY4/MTEwNTIwNS9waG90/by90aGVyYXB5LWNs/aWVudC1saXN0ZW5z/LXRvLXRoZXJhcGlz/dC1kaXNjdXNzLWNv/cGluZy1zdHJhdGVn/eS5qcGc_cz02MTJ4/NjEyJnc9MCZrPTIw/JmM9T04waTE0MmZ3/bndOaU5sWnNnR2Y2/YTRBZkdNMDMwakot/Q0FFTDdwUzVYOD0",
"https://imgs.search.brave.com/gGcGJKil2WFG_NxgKf4IyT8yAGtCqjKCYprWjPb4sxI/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvODU0/NzE2NzYvcGhvdG8v/d29tYW4tbG9va2lu/Zy1pbi1iYXRocm9v/bS1taXJyb3ItdG91/Y2hpbmctbmVjay5q/cGc_cz02MTJ4NjEy/Jnc9MCZrPTIwJmM9/c2F0LTZCRURvc0Jh/OG1xYWN1RjRHV291/d1lZQTluX1lMeWlJ/cHhCOVRidz0"
]
console.log(obj[1]);
btn.addEventListener('click', ()=>{

image.setAttribute('src' , obj[count]);
count++;
if(count==3){
    count =0;
}

})