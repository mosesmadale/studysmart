let val1, val2, val3, val4;
const t1 = document.querySelector('.t1');
const t2 = document.querySelector('.t2');
const t3 = document.querySelector('.t3');

function makeThemRandom(e) {
    val1 = Math.ceil(Math.random() * 100);
    val2 = Math.ceil(Math.random() * 100);
    val3 = Math.ceil(Math.random() * 100);
    val4 = Math.ceil(Math.random() * 100);
    e.style.borderRadius = `${val1}% ${val2}% ${val3}% ${val4}%`;

}

function updateObject() {
    makeThemRandom(t1);
    makeThemRandom(t2);
    makeThemRandom(t3);
}




setInterval(updateObject, 1000)

//end of cool animation

let bigFiveButtons = document.querySelectorAll('.big-one');
bigFiveButtons.forEach(e => {
    e.onclick = function() {
        let chosenBigFive = this.children[2].textContent;
        document.querySelector('#overlay-for-rendered-pages').style.display = 'flex';
        document.querySelector('#info-and-cancel-bar>p').innerHTML = chosenBigFive;
        if (chosenBigFive == 'Flashcards') {
            document.querySelector('iframe').setAttribute('src', './flashcards/index.html')
        } else if (chosenBigFive == 'Quizes') {
            document.querySelector('iframe').setAttribute('src', './quiz/index.html')
        } else if (chosenBigFive == 'Structured Papers') {
            document.querySelector('iframe').setAttribute('src', './other/index.html')
        }
        document.querySelector('.last').onclick = function() {
            document.querySelector('#overlay-for-rendered-pages').style.display = 'none';
            document.querySelector('iframe').setAttribute('src', '')
        }
    }
})