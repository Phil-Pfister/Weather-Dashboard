// universal variables

var apiKey = "dc119b3a8e1dae4639fd809d8698a1d3";
var city = localStorage.getItem('savedCity');
var body = $('<body>');
var cityList = document.getElementById('city-list');
var userCity = document.getElementById('userInput');
var submit = document.getElementById('submitBtn');
var list1 = document.getElementById('list-day1');
var list2 = document.getElementById('list-day2');
var list3 = document.getElementById('list-day3');
var list4 = document.getElementById('list-day4');
var list5 = document.getElementById('list-day5');
var cardBodyDay1 = document.getElementById('day1')
var dataArray =[];
var lat = "";
var lon = "";


//dayjs to display date on screen
var now = dayjs();

var day1 = now.add(1, 'day').format('M/D/YYYY');
var day2 = now.add(2, 'day').format('M/D/YYYY');
var day3 = now.add(3, 'day').format('M/D/YYYY');
var day4 = now.add(4, 'day').format('M/D/YYYY');
var day5 = now.add(5, 'day').format('M/D/YYYY');



//geocoding api
function getCoordinates() {
    
       
    
   
    var coordinateUrl = "http://api.openweathermap.org/geo/1.0/direct?q=" + city + "&limit=5&appid=f9d22422fd45eb626a5df5f3314e320e"
   
    fetch(coordinateUrl)
    .then(function (response) {
        return response.json();
    })
    .then(function (corData) {
        console.log(corData);
        console.log("lat and lon");
        lat = corData[0].lat;
        lon = corData[0].lon;
        
       
       
       
       console.log(lat);
        
  
       console.log(lat, lon);
       getCurrent();
       getForecast();
    })
   
};




//handles the current weather api and displays info on the screen
function getCurrent() {
    

  
    var currentUrl =` https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=imperial&appid=${apiKey}`;
    
    fetch(currentUrl)
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        console.log("current")
        console.log(data);

        // object for current info
    var curData = {
        cityName: data.name,
        curIcon: data.weather[0].icon,
        curTemp: Math.round(data.main.temp),
        curHum: data.main.humidity,
        curWind: data.wind.speed,

    }  
  
    // dom traversal
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
    inner.innerHTML = data.name + "  "  + data.sys.country + "  " + dayjs().format('(M/D/YYYY)');
    first.innerHTML = curData.cityName;
    
       
    });
    }


// gets api information for 5 day forecast and displays it on the screen

function getForecast() {
    var forecastUrl = 'https://api.openweathermap.org/data/2.5/forecast?lat=' + lat + '&lon=' + lon + '&units=imperial&appid=' + apiKey;

    fetch(forecastUrl)
    .then(function (response) {
        if(response.ok) {
        return response.json();
        } else {
      
            alert("please try again");
        
        };
})
.then(function (newData) {
    console.log("forecast city");
    console.log(newData.city);
    for (i=0; i<40; i++) {
        
        if (newData.list[i].dt_txt.includes("15:00:00")) {
            dataArray.push(newData.list[i]);
        }
    }
    return dataArray;
    
})
.then(function (data) {
    console.log("forecast");
    console.log(data);
    
    
    // handles date element in forecast boxes
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
    var forIconEl1 = document.createElement('img');
    forIconEl1.setAttribute('id', 'icon1');    
    var forTempEl1 = document.createElement('li');
    var forHumEl1 = document.createElement('li');
    var forWindEl1 = document.createElement('li');
    list1.appendChild(forIconEl1);
    list1.appendChild(forTempEl1);
    list1.appendChild(forHumEl1);
    list1.appendChild(forWindEl1);

    forIconEl1.src =  "https://openweathermap.org/img/wn/" + data[0].weather[0].icon + ".png";
    var highTemp = "Temp: " + Math.round(data[0].main.temp) + "°F";
    var humForecast = "Humidity: " + data[0].main.humidity + "%" ;
    var windForecast = "Winds: " + data[0].wind.speed + " MPH";

    forTempEl1.textContent = highTemp;
    forHumEl1.textContent = humForecast;
    forWindEl1.textContent = windForecast;
    
        //lists for day 2
    var forIconEl2 = document.createElement('img');
    forIconEl2.setAttribute('id', 'icon2');    
    var forTempEl2 = document.createElement('li');
    var forHumEl2 = document.createElement('li');
    var forWindEl2 = document.createElement('li');
    list2.appendChild(forIconEl2);
    list2.appendChild(forTempEl2);
    list2.appendChild(forHumEl2);
    list2.appendChild(forWindEl2);
    
    forIconEl2.src =  "https://openweathermap.org/img/wn/" + data[0].weather[0].icon + ".png";
    var highTemp = "Temp: " + Math.round(data[1].main.temp) + "°F";
    var humForecast = "Humidity: " + data[1].main.humidity + "%";
    var windForecast = "Winds: " + data[1].wind.speed + " MPH";

    forTempEl2.textContent = highTemp;
    forHumEl2.textContent = humForecast;
    forWindEl2.textContent = windForecast;

    //lists for day three
    var forIconEl3 = document.createElement('img');
    forIconEl3.setAttribute('id', 'icon3');    
    var forTempEl3 = document.createElement('li');
    var forHumEl3 = document.createElement('li');
    var forWindEl3 = document.createElement('li');
    list3.appendChild(forIconEl3);
    list3.appendChild(forTempEl3);
    list3.appendChild(forHumEl3);
    list3.appendChild(forWindEl3);

    forIconEl3.src =  "https://openweathermap.org/img/wn/" + data[0].weather[0].icon + ".png";
    var highTemp = "Temp: " + Math.round(data[2].main.temp) + "°F";
    var humForecast = "Humidity: " + data[2].main.humidity + "%";
    var windForecast = "Winds: " + data[2].wind.speed + " MPH";

    forTempEl3.textContent = highTemp;
    forHumEl3.textContent = humForecast;
    forWindEl3.textContent = windForecast;
    
    //lists for day four
    var forIconEl4 = document.createElement('img');
    forIconEl4.setAttribute('id', 'icon4');    
    var forTempEl4 = document.createElement('li');
    var forHumEl4 = document.createElement('li');
    var forWindEl4 = document.createElement('li');
    list4.appendChild(forIconEl4);
    list4.appendChild(forTempEl4);
    list4.appendChild(forHumEl4);
    list4.appendChild(forWindEl4);
    
    forIconEl4.src =  "https://openweathermap.org/img/wn/" + data[0].weather[0].icon + ".png";
    var highTemp = "Temp: " + Math.round(data[3].main.temp) + "°F";
    var humForecast = "Humidity: " + data[3].main.humidity + "%";
    var windForecast = "Winds: " + data[3].wind.speed + " MPH";

    forTempEl4.textContent = highTemp;
    forHumEl4.textContent = humForecast;
    forWindEl4.textContent = windForecast;

    //lists for day 5
    var forIconEl5 = document.createElement('img');
    forIconEl5.setAttribute('id', 'icon5');    
    var forTempEl5 = document.createElement('li');
    var forHumEl5 = document.createElement('li');
    var forWindEl5 = document.createElement('li');
    list5.appendChild(forIconEl5);
    list5.appendChild(forTempEl5);
    list5.appendChild(forHumEl5);
    list5.appendChild(forWindEl5);
    
    forIconEl5.src =  "https://openweathermap.org/img/wn/" + data[0].weather[0].icon + ".png";
    var highTemp = "Temp: " + Math.round(data[4].main.temp) + "°F";
    var humForecast = "Humidity: " + data[4].main.humidity + "%";
    var windForecast = "Winds: " + data[4].wind.speed + " MPH";

    forTempEl5.textContent = highTemp;
    forHumEl5.textContent = humForecast;
    forWindEl5.textContent = windForecast;
 
});

};


// retrieves saved item from last visit and makes it the active city
function getLast() {
   city =  localStorage.getItem('savedCity');
   var newCity = document.createElement('li');
    newCity.setAttribute('class', 'list-group-item list-group-item-action new-city');
    cityList.appendChild(newCity);
    newCity.textContent = city;
}
// on page load - these functions run
getLast();
getCoordinates();

// this handles search for particular city
submit.addEventListener('click', function() {
    // event.preventDefault;
    //clears text from forecast boxes
    list1.replaceChildren();
    list2.replaceChildren();
    list3.replaceChildren();
    list4.replaceChildren();
    list5.replaceChildren();
    

    //sets new city by user input
    city = userCity.value.trim();
    getCoordinates();
    userCity.value = "";
    var newCity = document.createElement('li');
    newCity.setAttribute('class', 'list-group-item list-group-item-action new-city');
    cityList.appendChild(newCity);
    newCity.textContent = city;
    localStorage.setItem('savedCity', city);
    dataArray = [];
    
});

// this code handles the click on past searches
var cityListEl = $('#city-list');
var newCityEl = $('.new-city')
cityListEl.on('click', '.new-city', function(event){
    //clears data from the forecast boxes
    list1.replaceChildren();
    list2.replaceChildren();
    list3.replaceChildren();
    list4.replaceChildren();
    list5.replaceChildren();
    // sets the city as the clicked item
    city = event.target.innerHTML; 
    console.log(city);
    //clears the array from the previous api call
    dataArray = [];
    getCoordinates();
});


    
