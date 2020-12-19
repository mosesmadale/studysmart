let topic = {
    type: ''
}

let pressed = document.querySelectorAll('.flashcard');

console.log(pressed);

pressed.forEach(e => {
    console.log(e);
    e.onclick = function() {
        topic.type = `${e.firstElementChild.nextElementSibling.firstElementChild.innerHTML}`;

        localStorage.setItem('currentPage', `${e.firstElementChild.nextElementSibling.firstElementChild.innerHTML}`);
        localStorage.setItem('xps', '0');
        localStorage.setItem('topic', `${topic.type}`)
        console.log(localStorage.getItem('currentPage'));
    }
})