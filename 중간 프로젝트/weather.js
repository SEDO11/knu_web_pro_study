function weather() {
    var p = document.getElementById('schoolWeather');
    var xhr = new XMLHttpRequest();
    var url = 'http://apis.data.go.kr/1360000/MidFcstInfoService/getMidFcst'; /*URL*/
    var queryParams = '?' + encodeURIComponent('serviceKey') + '=' + 'FWh87%2FqaLEma7tme7KUMsUs6zp6rbczh1uHDI88B80cXFV29f1uSbPx5tCvgP3eH8jf1vxJ1i0vWZbPXUpGelQ%3D%3D'; /*Service Key*/
    queryParams += '&' + encodeURIComponent('pageNo') + '=' + encodeURIComponent('1'); /**/
    queryParams += '&' + encodeURIComponent('numOfRows') + '=' + encodeURIComponent('10'); /**/
    queryParams += '&' + encodeURIComponent('dataType') + '=' + encodeURIComponent('JSON'); /**/
    queryParams += '&' + encodeURIComponent('regId') + '=' + encodeURIComponent('133'); /**/
    queryParams += '&' + encodeURIComponent('tmFc') + '=' + encodeURIComponent('202110250600'); /**/
    xhr.open('GET', url + queryParams);
    xhr.onreadystatechange = function () {
        if (this.readyState == 4) {
            alert('Status: ' + this.status + 'Headers: ' + JSON.stringify(this.getAllResponseHeaders()) + 'Body: ' + this.responseText);
        }
    };

    xhr.send('');
    p.innerHTML(xhr.send(''));
}