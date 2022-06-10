const loginForm = document.querySelector("#login-form");
const loginInput = loginForm.querySelector("input")
const loginButton = loginForm.querySelector("button");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = 'hidden';
const USERNAME_KEY = 'username';
//const loginInput = document.querySelector("#login-form input")
//const loginButton = document.querySelector("#login-form button") 이렇게 두줄로 요약 가능

// function onLoginSubmit() {
//     // console.log(loginInput.value);
//     // console.log("clicked!");

//     const username = loginInput.value;
//     // if(username === '') {
//     //     alert("please write your name");
//     // } else if (username.length >= 10) {
//     //     alert("your name is tooo long");
//     // }
//     console.log(username);
// }

function onLoginSubmit(event) {
    event.preventDefault();
    //event의 default 행동이 일어나지 않도록 막는 것
    loginForm.classList.add(HIDDEN_CLASSNAME);
    //입력하고 난 후 form이 사라지게 만듦
    localStorage.setItem(USERNAME_KEY, loginInput.value)
    //localStorage.setItem(key, value);
    paintGreetings();
}
// event 자리에 tomato가 들어가도 상관없다. (값을 받기위해)임의로 만든 바구니이기 때문이다

// loginButton.addEventListener("click", onLoginBtnClick);

loginForm.addEventListener("submit", onLoginSubmit)
//submit은 엔터 혹은 버튼을 누를 때 발생함
//입력값은 잡아내지만 새로고침 현상은 잡아내지 못함 => 새로고침 현상 막아야함

function paintGreetings() {
    const username = localStorage.getItem(USERNAME_KEY);
    greeting.innerText = `Hello ${username}`
    greeting.classList.remove(HIDDEN_CLASSNAME);
}

const savedUsername = localStorage.getItem(USERNAME_KEY);
console.log(savedUsername);

if(savedUsername === null) {
    //show the form
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit", onLoginSubmit)
} else {
    //show the greetings
    paintGreetings();
}