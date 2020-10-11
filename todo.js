const toDoForm = document.querySelector(".js-toDoForm"),
    toDoInput = toDoForm.querySelector("input"),
    toDoList = document.querySelector(".js-toDoList");

const TODO_LS = "toDos";

const toDos = [];

function paintToDo(text){
    const li = document.createElement("li");
    const delBtn = document.createElement("button");
    const span = document.createElement("span");
    const newId = toDos.length + 1;
    delBtn.innerText = "❌";
    span.innerText = text;
    li.appendChild(delBtn);
    li.appendChild(span);
    toDoList.appendChild(li);
    const toDoObj = {
        text : text,
        id: 
    }
    toDos.push(toDoObj);
}


function handleSubmit(event){
    event.preventDefault();
    const currentValue = toDoInput.value;
    paintToDo(currentValue);
    toDoInput.value = "";
}

function loadToDos(){
    const toDos = localStorage.getItem(TODO_LS);
    if(toDos !== null){

    }
}

function init(){
    loadToDos();
    toDoForm.addEventListener("submit", handleSubmit)
}
init();