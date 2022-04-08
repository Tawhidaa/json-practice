function displayPost() {
    fetch('https://jsonplaceholder.typicode.com/photos')
        .then(response => response.json())
        .then(data => photoshow(data))
}
displayPost();
function photoshow(data) {
    const section = document.getElementById('pic');
    for (const photo of data) {
        const div = document.createElement('div');
        div.innerHTML = ` ${photo.url}
        <h2>${photo.title}</h2>
        `;

        section.appendChild(div);
        console.log(photo.url);
    }

}




