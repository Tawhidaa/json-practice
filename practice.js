function album() {
    fetch('https://jsonplaceholder.typicode.com/albums/3')
        .then(response => response.json())
        .then(json => console.log(json));
}

function todos() {
    fetch('https://jsonplaceholder.typicode.com/todos/8')
        .then(response => response.json())
        .then(json => console.log(json.title));
}

function user() {
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(data => displayUsers(data));
}

function displayUsers(data) {
    const ul = document.getElementById('us');
    for (const user of data) {
        console.log(user.username);
        const picchi = document.createElement('li');
        picchi.innerText = ` user:${user.username} 
         address:${user.address}
        `;

        ul.appendChild(picchi);
    }



}