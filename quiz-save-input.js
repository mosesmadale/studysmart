let topic = {
    type: ''
}

let pressed = document.querySelectorAll('.btn');
pressed.forEach(e => {
    e.onclick = function() {
        topic.type = `${e.firstElementChild.firstElementChild.innerHTML}${e.firstElementChild.lastElementChild.innerHTML}`;
        localStorage.setItem('currentPage', '1');
        localStorage.setItem('xps', '0');
        localStorage.setItem('topic', `${topic.type}`)
        console.log(localStorage.getItem('currentPage'));
    }
})