onmessage = respond;

function respond(event) {
    if (event.data === "") {
        postMessage("아무것도 입력되지 않았습니다.");
    }
}