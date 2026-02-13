var btn = document.querySelector('#btn');
var card = document.querySelector('.card');
var inp = document.querySelector('#inp')
function loadData(){
    fetch("https://imdb232.p.rapidapi.com/api/news/get-by-category?limit=25&category=CELEBRITY&rapidapi-key=0170cc2399mshc1e5aada443bde3p113caejsnad0fddd1c883")
    .then((Response)=> Response.json())
    .then((data)=>{
        var para = document.createElement('p');
        // url.setAttribute('href',data.data.news.edges[1].node.source.homepage.url );
      
        // url.textContent = "click me"
        // console.log(url)
        for(let i=0; i<10; i++){
       if(data.data.news.edges[0].node.byline.includes(inp.value)){
        para.textContent = data.data.news.edges[0].node.byline
        console.log(para);
        
       }
         card.appendChild(para)
    }
    console.log( data.data.news.edges[0].node.byline)
    })
}
btn.addEventListener('click' , loadData)