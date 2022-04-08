function displayAll() {
    fetch('https://jsonplaceholder.typicode.com/comments')
        .then(response => response.json())
        .then(data => comment(data))
}
displayAll();

function comment(data) {
    const section =
}