const API_KEY = "5a41ecbe9dcda92eefe6c45d7f636002";

function onGeoOk(position) {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    console.log(`현재 위치:`, lat, lon);
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
    fetch(url).then(response => response.json()).then(data => {
        const weather = document.querySelector('#weather span:first-child');
        const city = document.querySelector('#weather span:nth-child(2)');
        const celcius = document.querySelector('#weather span:last-child');
        city.innerText = data.name;
        weather.innerText = data.weather[0].main;
        celcius.innerText = data.main.temp;
    });
}
function onGeoError() {
    alert("날씨를 확인할 수 없습니다.");
}

// navigator.geolocation.getCurrentPosition() 브라우저가 현재 위치를 읽도록 함.
// 성공 시와 실패 시의 조건이 각각 있음
navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);

