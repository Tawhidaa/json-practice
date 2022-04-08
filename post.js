function loadData() {
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => response.json())
        .then(data => displayPost(data))
}
loadData();
function displayPost(data) {
    const section = document.getElementById('posts');
    for (const post of data) {
        const picchu = document.createElement('div');
        div.classList.add('post');
        picchu.innerHTML = `
        <h3>${post.title}</h3>
        <p>${post.body}</p>
        `;
        section.appendChild(picchu);
        console.log(post.title);
    }
}