const clock = document.querySelector('h2#clock');

function getClock () {
    const date = new Date();
    const hours = String(date.getHours()).padStart(2,"0");
    const minutes = String(date.getMinutes()).padStart(2,"0");
    const seconds = String(date.getSeconds()).padStart(2,"0");
    clock.innerText = `${hours}:${minutes}:${seconds}`;
}
getClock();
// 새로고침하자마자 시간을 바로 보여주기 위한 함수
setInterval(getClock, 1000);
// setTimeout(sayHello, 5000);