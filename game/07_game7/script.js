//DOM elements
var todolist = []
var comdoList = [];
var remList = [];
var addButton = document.getElementById("add-button")
var todoInput = document.getElementById("todo-input")
var deleteAllButton = document.getElementById("delete-all")
var allTodos = document.getElementById("all-todos");
var deletesButton = document.getElementById("delete-selected")
var saveWork = document.getElementById('save-work');
//event listners for add and delete

// onLoad();
function updateList(){
    comdoList = todolist.filter((data)=>{
        if(data.complete == true) return data.complete;
    });

    remList = todolist.filter((data)=>{
        if(data.complete == false) return !data.complete;
    })


    document.querySelector('#r-count').textContent = todolist.length;
//     console.log("the task is completed:I " + comdoList);
// console.log("All task is remaining: " + remList);
}



function appendTask(todolist){
    allTodos.innerHTML = ""; // empty... -> task

    todolist.forEach((element)=>{
        var x = `<li id=${element. id} class="todo-item">
            <p id="task"> ${element.complete ? `<strike>${element.content}</strike>` : element.content} </p>
            <div class="todo-actions">
                <button class="complete btn btn-success">
                    <i class=" ci bx bx-check bx-sm"></i>
                </button>

                <button class="delete btn btn-error" >
                     <i class="di bx bx-trash bx-sm"></i>
                </button>
            </div>
        </li>`


        allTodos.innerHTML += x;


    })
}

 // addTask <--> add

function add(){
    // take the content from input box...
    var text = todoInput.value;
    if(text== ""){
        alert('Please enter a task you have written nothing');
    }
    console.log(text);

    todolist.push({
        content : text,
        id : Date.now(),
        complete: false
    });

    todolist.forEach((value)=>{
        console.log(value);
    })
    todoInput.value = '';
    updateList(); // entire 2 remaining aray -> completion and remaning upfate and reflect variable

    appendTask(todolist);
}
addButton.addEventListener("click", add);
todoInput.addEventListener('keypress', (event) =>{
    if(event.key === 'Enter'){
        add();
    }
})

function deleteAll(){
    todolist = [];
    updateList();
    appendTask(todolist);
}
function deleteS(){
    todolist = todolist.filter((data)=>{
        if(data.complete === false){
            return data;
        }
    });
    updateList();
    appendTask(todolist);
}


deleteAllButton.addEventListener("click", deleteAll)
deletesButton.addEventListener("click", deleteS);

function deleteTask(event){
    var id = event.target.parentElement.parentElement.getAttribute('id');

    todolist = todolist.filter((data)=>{
        return data.id != id;
    })

    console.log(todolist);

    updateList();
    appendTask(todolist);
}

function completeTask(event){
  
       var id = event.target.parentElement.parentElement.getAttribute('id');
       
       todolist.forEach((data)=>{
         
        if(data.id == id){
            if(data.complete == false){
                data.complete = true;
                event.target.parentElement.parentElement.querySelector('#task').classList.add('line');
            }
            else{
                 data.complete = false;
                event.target.parentElement.parentElement.querySelector('#task').classList.remove('line');
               
            }
        }
       });

       updateList();
       appendTask(todolist);

}
function savedFun(){
  var savedData = JSON.stringify(remList);
  localStorage.setItem(taskData, savedData);

}
function onLoad(){
    var savedData = localStorage.getItem('taskData');
    todolist= JSON.parse('taskData');
    updateList();
    appendTask(todolist);
}
saveWork.addEventListener('click', savedFun());
document.addEventListener('click', (event)=>{
    if(event.target.classList.contains('delete') || event.target.classList.contains('di')){
        deleteTask(event);
    }
    if(event.target.classList.contains('complete') || event.target.classList.contains('ci')){
        completeTask(event);
    }
    if(event.target.classList.contains('all')){
        updateList();
        appendTask(todolist);
    }
    if(event.target.classList.contains('rem')){
        updateList();
        appendTask(remList);
    }
    if(event.target.classList.contains('com')){
        updateList();
        appendTask(comdoList);
    }

})