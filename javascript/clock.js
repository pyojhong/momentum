const clock = document.querySelector('#clock');

function getClock() {
    const date = new Date();
    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");
    const seconds = String(date.getSeconds()).padStart(2, "0");
    clock.innerText = `${hours}:${minutes}:${seconds}`;
}

// 하단과 같이 작성함으로써 getclock을 호출해서 1초를 먼저 보여주고, 1초 이후부터 동작하는 setInterval 이 동작한다. 이후 매 초 반복
getClock();
// 지정한 시간마다 동작을 반복하게 하는 함수
setInterval(getClock, 1000);

//.padStart(2, "0") = 글자를 2글자로 만들되, 2글자가 안 될 경우 0 을 앞에 추가