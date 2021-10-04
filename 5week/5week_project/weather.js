function getLocation() {
    if (navigator.geolocation) { // GPS를 지원하면
        navigator.geolocation.getCurrentPosition(function (position) {
            getWeather(position.coords.latitude, position.coords.longitude);
        }, function (error) {
            console.error(error);
        }, {
            enableHighAccuracy: false,
            maximumAge: 0,
            timeout: Infinity
        });
    } else {
        alert('GPS를 지원하지 않습니다');
    }
}

function getWeather(lat, lon) {
    var apiURI = "http://api.openweathermap.org/data/2.5/weather?lat="+lat+"&lon="+lon+"&appid=&appid=9c21f269e57f935dc353ee3c1fe1d28f"
    $.ajax({
        url: apiURI,
        method: 'GET',
        success: (data) => {
            var temp = String((data.main.temp - 272)).substring(0, 3); // 온도
            var location = data.name; // 지역이름 
            $('#chatLog').append('지역 ：' + location + ' 온도　：' + temp + "도입니다. " + '\n');
            // 아이콘 취득 
            alert('지역 ：' + location + ' 온도　：' + temp + "도입니다. " + '\n');
            var imgURL = "http://openweathermap.org/img/w/" + data.weather[0].icon + ".png";
            // 아이콘 표시
            $('#img').attr("src", imgURL);
        }
    });
}