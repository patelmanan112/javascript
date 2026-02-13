// var para = document.querySelector("p");
// para.classList.add('win');
var nxtBtn = document.querySelector("button");

var image = document.querySelector('.image');
var imgContainer = [
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStMhiPGFuu8n2PuapqGNGpx-5N7VFw12I32w&s",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdtKGN5PsyLJ5H8NSmQgpEhbfbngbGIRk6pg&s",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3kprXSmAqpSeDBVP9vmHZpvCbB_WNcxn8Eg&s",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQktl_Ye5-VOHcuGKl1F9mt-hFxGeG1nwZwfA&s",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqNtYj8Lp7gJqnJKLS38Naivpp33STMQnBXA&s"
];
var index =0;
nxtBtn.addEventListener('click', nexImg);
function nexImg(){
    if(index>4){
        index =0;
    }
    image.setAttribute('src', imgContainer[index]);
    index++;
};