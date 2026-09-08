const API_KEY = "5a41ecbe9dcda92eefe6c45d7f636002";

function onGeoOk(position) {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    console.log(`현재 위치:`, lat, lon);
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
    fetch(url).then(response => response.json()).then(data => {
        const weatherIcon = document.querySelector('#weather-icon');
        const city = document.querySelector('#city');
        const temp = document.querySelector('#temp');

        const iconCode = data.weather[0].icon;
        weatherIcon.src = `https://openweathermap.org/img/wn/${iconCode}@2x.png`;
        weatherIcon.classList.remove('hidden');

        city.innerText = data.name;
        temp.innerText = `${data.main.temp}°C`;
    });
}
function onGeoError() {
    alert("날씨를 확인할 수 없습니다.");
}

// navigator.geolocation.getCurrentPosition() 브라우저가 현재 위치를 읽도록 함.
// 성공 시와 실패 시의 조건이 각각 있음
navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);

