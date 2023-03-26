var apiKey = "dc119b3a8e1dae4639fd809d8698a1d3";
var city;

function getApi() {
var apiUrl = 'https://api.openweathermap.org/data/2.5/forecast?q=houston&&units=imperial&appid=' + apiKey;
var body = $('<body>');
fetch(apiUrl)
.then(function (response) {
    return response.json();
})
.then(function (data) {
    console.log(data);
var inner = document.getElementById('inner');
var curTemp = document.getElementById('cur-temp');
var curWind = document.getElementById('cur-wind');
var curHum = document.getElementById('cur-hum');
var first = document.getElementById('first');
curTemp.innerHTML = "Current Temp: " + data.list[0].main.temp + "° F";
curWind.innerHTML = "Winds:" + data.list[0].wind.speed + " MPH";
curHum.innerHTML = "Humidity:" + data.list[0].main.humidity + "%";
inner.innerHTML = data.city.name + "  " + dayjs().format('(M/D/YYYY)');
first.innerHTML = data.city.name;
first.classList.add("active");
   
});
}
getApi();