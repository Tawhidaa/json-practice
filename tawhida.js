function loadData() {
    fetch('https://jsonplaceholder.typicode.com/comments')
        .then(response => response.json())
        .then(data => loadBody(data));
}
function loadBody(data) {
    const ul = document.getElementById('user');
    for (const user of data) {
        console.log(user.body);
        const li = document.createElement('li');
        li.innerHTML = `<h2>${user.body}</h2>`;
        ul.appendChild(li);
    }
}
function loadData2() {
    fetch('https://jsonplaceholder.typicode.com/comments')
        .then(response => response.json())
        .then(data => loadEmail(data));
}
function loadEmail(data) {
    const ul2 = document.getElementById('users');
    for (const users of data) {
        console.log(users.email);
        const li2 = document.createElement('li');
        li2.innerText = `email= ${users.email}`;
        ul2.appendChild(li2);
    }
}