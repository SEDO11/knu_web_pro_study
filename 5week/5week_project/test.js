var n

function runCode() {
    n = document.getElementById('userInput').value;
    document.getElementById('test').textContent = n;
    location.href="test3.html" + n;
}

function print() {
    document.write(n);
}

function testJS() {
    var b = document.getElementById('name').value,
        url = 'http://path_to_your_html_files/next.html?name=' + encodeURIComponent(b);
    document.location.href = url;
}