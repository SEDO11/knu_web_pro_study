window.onload = function () {
    const clock = document.querySelector('.timeMin');

    function getTime() {
        const time = new Date();
        const hour = time.getHours();
        const minutes = time.getMinutes();
        const seconds = time.getSeconds();
        //clock.innerHTML = hour +":" + minutes + ":"+seconds;
        clock.innerHTML = `현재 시간: ${hour < 10 ? `0${hour}` : hour}:${minutes < 10 ? `0${minutes}` : minutes}`
    }

    function init() {
        setInterval(getTime, 1000);
    }

    init();
}