window.onload = function () {
        var worker = new Worker("worker.js");

        worker.postMessage("ping");
        worker.onmessage = function(event) {
            var msg = "Worker says" + event.data;
            alert(msg);
            document.getElementById("output").innerHTML = msg;
        }
    
    // This is in case of normal worker start
    // "window" is not defined in web worker
    // so if you load this file directly using `new Worker`
    // the worker code will still execute properly
}