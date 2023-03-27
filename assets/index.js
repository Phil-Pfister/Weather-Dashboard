var apiKey = "dc119b3a8e1dae4639fd809d8698a1d3";
var city = "Houston";
var body = $('<body>');
var userCity = document.getElementById('userInput');
var submit = document.getElementById('submitBtn');
var list1 = document.getElementById('list-day1');
var list2 = document.getElementById('list-day2');
var list3 = document.getElementById('list-day3');
var list4 = document.getElementById('list-day4');
var list5 = document.getElementById('list-day5');



var now = dayjs();
var day1 = now.add(1, 'day').format('M/D/YYYY');
var day2 = now.add(2, 'day').format('M/D/YYYY');
var day3 = now.add(3, 'day').format('M/D/YYYY');
var day4 = now.add(4, 'day').format('M/D/YYYY');
var day5 = now.add(5, 'day').format('M/D/YYYY');
console.log(day5);

function getCurrent() {
    var currentUrl = 'https://api.openweathermap.org/data/2.5/weather?q=' + city + '&units=imperial&appid=' + apiKey;
    
    fetch(currentUrl)
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        console.log("current")
        console.log(data);

    var curData = {
        cityName: data.name,
        curIcon: data.weather[0].icon,
        curTemp: Math.round(data.main.temp),
        curHum: data.main.humidity,
        curWind: data.wind.speed,

    }  
    var inner = document.getElementById('inner');
    var curIconEl = document.getElementById('cur-icon')
    var curTempEl = document.getElementById('cur-temp');
    var curWindEl = document.getElementById('cur-wind');
    var curHumEl = document.getElementById('cur-hum');
    var first = document.getElementById('first');
    curIconEl.src =  "https://openweathermap.org/img/wn/" + curData.curIcon + ".png";
    curTempEl.innerHTML = "Current Temp: " + curData.curTemp + "° F";
    curWindEl.innerHTML = "Winds: " + curData.curWind + " MPH";
    curHumEl.innerHTML = "Humidity: " + curData.curHum + "%";
    inner.innerHTML = data.name + "  " + dayjs().format('(M/D/YYYY)');
    first.innerHTML = curData.cityName;
    
       
    });
    }




function getForecast() {
var forecastUrl = 'https://api.openweathermap.org/data/2.5/forecast?q=' + city + '&units=imperial&appid=' + apiKey;

fetch(forecastUrl)
.then(function (response) {
    return response.json();
})
.then(function (data) {
    console.log("forecast");
    console.log(data);
    console.log(data.list[6].weather[0].icon);

    var date1 = document.querySelector('#day1 .date');
    var date2 = document.querySelector('#day2 .date');
    var date3 = document.querySelector('#day3 .date');
    var date4 = document.querySelector('#day4 .date');
    var date5 = document.querySelector('#day5 .date');

    date1.textContent = day1;
    date2.textContent = day2;
    date3.textContent = day3;
    date4.textContent = day4;
    date5.textContent = day5;

        //lists for day 1
    var forTempEl1 = document.createElement('li');
    var forHumEl1 = document.createElement('li');
    var forWindEl1 = document.createElement('li');
    list1.appendChild(forTempEl1);
    list1.appendChild(forHumEl1);
    list1.appendChild(forWindEl1);
    
    var highTemp = "High temp: " + data.list[0].main.temp + "°F";
    var humForecast = "Humidity: " + data.list[0].main.humidity + "%" ;
    var windForecast = "Winds: " + data.list[0].wind.speed + " MPH";

    forTempEl1.textContent = highTemp;
    forHumEl1.textContent = humForecast;
    forWindEl1.textContent = windForecast;
    
        //lists for day 2
    var forTempEl2 = document.createElement('li');
    var forHumEl2 = document.createElement('li');
    var forWindEl2 = document.createElement('li');
    list2.appendChild(forTempEl2);
    list2.appendChild(forHumEl2);
    list2.appendChild(forWindEl2);
    
    var highTemp = "High temp: " + data.list[18].main.temp + "°F";
    var humForecast = "Humidity: " + data.list[18].main.humidity + "%";
    var windForecast = "Winds: " + data.list[18].wind.speed + " MPH";

    forTempEl2.textContent = highTemp;
    forHumEl2.textContent = humForecast;
    forWindEl2.textContent = windForecast;

    //lists for day three

    var forTempEl3 = document.createElement('li');
    var forHumEl3 = document.createElement('li');
    var forWindEl3 = document.createElement('li');
    list3.appendChild(forTempEl3);
    list3.appendChild(forHumEl3);
    list3.appendChild(forWindEl3);
    
    var highTemp = "High temp: " + data.list[14].main.temp + "°F";
    var humForecast = "Humidity: " + data.list[14].main.humidity + "%";
    var windForecast = "Winds: " + data.list[14].wind.speed + " MPH";

    forTempEl3.textContent = highTemp;
    forHumEl3.textContent = humForecast;
    forWindEl3.textContent = windForecast;
    
    //lists for day four
    var forTempEl4 = document.createElement('li');
    var forHumEl4 = document.createElement('li');
    var forWindEl4 = document.createElement('li');
    list4.appendChild(forTempEl4);
    list4.appendChild(forHumEl4);
    list4.appendChild(forWindEl4);
    
    var highTemp = "High temp: " + data.list[22].main.temp + "°F";
    var humForecast = "Humidity: " + data.list[22].main.humidity + "%";
    var windForecast = "Winds: " + data.list[22].wind.speed + " MPH";

    forTempEl4.textContent = highTemp;
    forHumEl4.textContent = humForecast;
    forWindEl4.textContent = windForecast;

    //lists for day 5
    var forTempEl5 = document.createElement('li');
    var forHumEl5 = document.createElement('li');
    var forWindEl5 = document.createElement('li');
    list5.appendChild(forTempEl5);
    list5.appendChild(forHumEl5);
    list5.appendChild(forWindEl5);
    
    var highTemp = "High temp: " + data.list[30].main.temp + "°F";
    var humForecast = "Humidity: " + data.list[30].main.humidity + "%";
    var windForecast = "Winds: " + data.list[30].wind.speed + " MPH";

    forTempEl5.textContent = highTemp;
    forHumEl5.textContent = humForecast;
    forWindEl5.textContent = windForecast;
 

    



   
});
}




getForecast();
getCurrent();

submit.addEventListener('click', function(event) {
    event.preventDefault;
    list1.replaceChildren();
    list2.replaceChildren();
    list3.replaceChildren();
    list4.replaceChildren();
    list5.replaceChildren();
    city = userCity.value.trim();
    getCurrent();
    getForecast();
});


    
