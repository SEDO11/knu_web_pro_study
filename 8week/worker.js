// onmessage = pingpong;

// function pingpong(event) {
//     if(event.data === "ping") {
//         postMessage("pong");
//     }
// }

var n = 1;
search: while(true) {
    n++;
    for (let i = 0; i < Math.sqrt(n); i++) {
        if(n% i === 0) continue search;
        
        postMessage(n);
    }
}