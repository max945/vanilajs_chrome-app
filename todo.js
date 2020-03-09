const toDoForm = document.querySelector(".js-toDoForm"),
    toDoInput = toDoForm.querySelector("input"),
    toDoList = document.querySelector(".js-toDoList");

const TODOS_LS = "toDos";

function loadToDos() {
    const toDos = localStorage.getItem(TODOS_LS);
    if (toDos !== null) {

    }
}

function paintToDo(text) {
    const li = document.createElement("li") //비어있는 li를 만든 것
    const delBtn = document.createElement("button"); //버튼을 만든 것
    delBtn.innerText = "ⓧ";
    const span = document.createElement("span"); //span을 만든 것
    span.innerText = text;
    li.appendChild(span);  //span을 li안에 넣은 것
    li.appendChild(delBtn); //버튼을 li 안에 넣은 것
    toDoList.appendChild(li);
}

function handleSubmit(event) {
    event.preventDefault();
    const currentValue = toDoInput.value;
    paintToDo(currentValue);
    toDoInput.value = "";
}

function init() {
    loadToDos();
    toDoForm.addEventListener("submit", handleSubmit)
}

init();