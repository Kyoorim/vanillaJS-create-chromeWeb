const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.getElementById("todo-list"); 

const TODOS_KEY = "todos";

let toDos = [];

function saveToDos() {
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
    //array 형태로 localStorage에 저장해줌
}

function deleteToDo(event) {
    // console.dir(event.target.parentElement.innerText);
    const li = event.target.parentElement;
    // 우리가 삭제하고 싶은 li  
    // console.log(li.id);
    li.remove();
    toDos = toDos.filter(toDo => toDo.id !== Number(li.id));
    saveToDos();
    
}

function paintToDo(newToDo){
    // console.log("i will paint", newToDo);
    const list = document.createElement("li");
    list.id = newToDo.id;
    const makeSpan = document.createElement("span");
    makeSpan.innerText = newToDo.text;
    const btn = document.createElement("button");
    btn.innerText = "❌";
    btn.addEventListener("click", deleteToDo);
    list.appendChild(makeSpan);//list의 자식요소로 span을 넣기
    list.appendChild(btn);
    // console.log(list);
    toDoList.appendChild(list);
};

function handleToDoSubmit (event) {
    event.preventDefault();
    // console.log(toDoInput.value);
    const newToDo = toDoInput.value; 
    // toDoInput value를 새로운 변수에 저장/복사한 후
    toDoInput.value = '';// 엔터를 쳤을 때 칸이 공백이 되도록 한다
    // console.log(newTodo, toDoInput.value); //newTodo 값만 남고 toDoInput은 공백이 되었기 때문에 값이 출력되지 않음
    const newToDoObj = {
        text: newToDo,
        id: Date.now(), // 랜덤한 숫자를 줘서 구분하기 위하여
    };
    toDos.push(newToDoObj);
    paintToDo(newToDoObj);// 위에서 보내 호출한다
    saveToDos();
};

toDoForm.addEventListener("submit", handleToDoSubmit)

// function sayHello (item) {
//     console.log("hello");
// }
// forEach메쏘드에서 화살표함수로 간단하게 표현가능함

const savedToDos = localStorage.getItem(TODOS_KEY);

if(savedToDos) {
    // savedToDos !== null 과 동일한 말 
    const parsedToDos = JSON.parse(savedToDos);
    // parsedToDos.forEach((item) => console.log("this is the turn of", item));
    // //array에 있는 각각의 item에 대해서 함수를 실행하게 해줌
    toDos = parsedToDos; 
    //toDosa에 parsedToDos를 넣어서 전에 입력한 toDos를 저장한다
    parsedToDos.forEach(paintToDo);
    // array 각각에 대하여 paintToDo함수를 실행시킨다
}