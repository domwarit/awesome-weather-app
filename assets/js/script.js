$(document).ready(function () {


    //API Key e3d1da02af8cc7738ae271867b218cbf
    var api = {
        key: "e3d1da02af8cc7738ae271867b218cbf",
        base: "https://api.openweathermap.org/data/2.5/"
    }
    var searchbox = document.querySelector('.search-box');
    searchbox.addEventListener('keypress', gatherQuery);
    function gatherQuery(event) {
        if (event.keyCode === 13) {
            var city = searchbox.value;
            pullResults(city);
            makeRow(city);
            $(".search-box").val("");
        }

    }
    $(".history").on("click", "li", function(){
        pullResults($(this).text());
    })

    function makeRow(text) {
        var li = $("<li>").addClass("list-group-item list-group-item-action").text(text);
        $(".history").append(li);
    }
    function pullResults(query) {
        fetch(`${api.base}weather?q=${query}&units=imperial&APPID=${api.key}`)
            .then(weather => {
                return weather.json();
            }).then(showResults);
    }
    function showResults(weather) {
        console.log(weather);
        let city = document.querySelector('.location .city');
        city.innerText = `${weather.name}`;
        let time = new Date();
        let date = document.querySelector('.location .date')
        date.innerText = dateDisplay(time);
        let temp = document.querySelector('.current .temp');
        temp.innerHTML = `${Math.round(weather.main.temp)}<span>°F</span>`;
        let weatherElement = document.querySelector('.current .weather');
        weatherElement.innerText = weather.weather[0].main;
        let highLow = document.querySelector('.high-low');
        highLow.innerText = `${Math.round(weather.main.temp_min)}°F / ${Math.round(weather.main.temp_max)}°F`;
        let windspeed = document.querySelector('.windspeed');
        windspeed.innerHTML = `${(wind.speed)}<span>MPH</span>`;

    }
    function weatherDetails() {
        let weatherFiveElement = document.querySelector('.five-day .weather');
        weatherFiveElement.innerText = weather.weather[1, 2, 3, 4, 5];
    }

    // Five Day function attempt
    // var searchbox = document.querySelector('.search-box');
    // searchbox.addEventListener('keypress', gatherQuery);
    // function gatherQuery(event) {
    //     if (event.keyCode == 13) {
    //         pullFiveResults(searchbox.value);
    //         localStorage.setItem(time, activity);
    //     }

    // }
    // function pullFiveResults(query) {
    //     fetch(`${api.base}weather?q=${query}&units=imperial&APPID=${api.key}`)
    //         .then(weather => {
    //             return weather.json();
    //         }).then(showResults);
    // }
    // function showFiveResults(weather) {
    //     let time = new Date(+4);
    //     let date = document.querySelector('.location .date')
    //     date.innerText = dateDisplay(time);
    //     let temp = document.querySelector('.five-day .temp');
    //     temp.innerHTML = `${Math.round(weather.main.temp)}<span>°F</span>`;
    //     let weatherElement = document.querySelector('.fivecast .weather');


    // }
    // function weatherDetails() {
    //     let weatherFiveElement = document.querySelector('.five-day .weather');
    //     weatherFiveElement.innerText = weather.weather[1, 2, 3, 4, 5];
    // }




    // funtion showDetails {

    // }
    // function dateDisplay (dates) {
    //     // $("#currentDay").text(moment().format("dddd, MMMM Do"));
    //     let days = ["Sunday", "Monday", "Tuesday","Wednesday","Thursday","Friday"];
    //     let months = ["Jan","Feb","March","April","May", "June","July", "Aug","Sept","Oct","Nov", "Dec"];
    //     let day = days[dates.getDay()];
    //     let date = dates.getDate();
    //     let month = months[dates.getMonth()];
    //     let year = dates.getFullYear();
    //     return `${day} ${date} ${month} ${year}`
    function dateDisplay(d) {
        // $("#currentDay").text(moment().format("dddd, MMMM Do"));
        let months = ["January,", "February,", "March,", "April,", "May,", "June,", "July,", "August", "September,", "October,", "November", "December,"];
        let days = ["Sun", "Mon", "Tues", "Wed", "Thurs", "Fri", "Sat"];
        let day = days[d.getDay()];
        let date = d.getDate();
        let month = months[d.getMonth()];
        let year = d.getFullYear();
        return `${day} ${date} ${month} ${year}`;
    }
    // var span = document.getElementById('clock');
    // function time() {
    //   var s = d.getSeconds();
    //   var m = d.getMinutes();
    //   var h = d.getHours();
    //   span.textContent = h + ":" + m + ":" + s;
    // }
    // setInterval(time, 1000);
})