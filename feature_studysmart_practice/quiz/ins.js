let xhr = new XMLHttpRequest();

xhr.open('GET', 'load-object.json', true);

xhr.onload = function() {
    if (this.status == 200) {
        let arrayOfFlashcards = JSON.parse(this.responseText);
        arrayOfFlashcards.forEach(e => {
            document.querySelector('.flashcards-list').innerHTML += `
                <div class="flashcard">
                        <div class="flashcard-icon">
                            <img src="question.svg" alt="">
                        </div>
                        <div class="flashcard-description">
                            <p class="flashcard-name">${e.main}</p>
                            <hr>
                            <p class="flashcard-author">${e.sub}</p>
                        </div>
                        <div class="flashcards-stats">
                            <div class="flashcard-likes">
                                <p class="numbers">10</p>
                                <img src="heart.svg" alt="">
                            </div>
                            <div class="flashcard-dislikes">
                                <p class="numbers">0</p>
                                <img style="transform: rotate(180deg);" src="heart.svg" alt="">
                            </div>
                        </div>
                    </div>
            `;

        });
        setEventListeners();
        addSearchFunctionality();
    }
}




xhr.send();



//handling features that are still in construction:

document.querySelector('.create-new').onclick = function() {
    addPopup(this);
}


function addPopup(element) {
    element.style.position = 'relative';
    element.innerHTML += `
    <div class="in-construction-message">
                    <p class="message">
                        Sorry, this feature is still in construction!
                    </p>
                </div>
    `;
    //adding timeout

    setTimeout(function() {
        element.style.position = '';
        element.removeChild(document.querySelector('.in-construction-message'))
    }, 2000)
}

function setEventListeners() {
    let topic = {
        type: ''
    }

    let pressed = document.querySelectorAll('.flashcard');


    pressed.forEach(e => {
        e.onclick = function() {
            topic.type = `${e.firstElementChild.nextElementSibling.firstElementChild.innerHTML}`;
            localStorage.setItem('topic', `${topic.type}`)
            window.open('./quiz/index.html', '_self');
        }


    })


}

function addSearchFunctionality() {
    //selection of all elements
    let shop = document.querySelectorAll('.flashcard');

    //selection of shop
    let filteredShop = document.querySelector('.flashcards-list');

    document.querySelector('.search').oninput = () => {
        filter(document.querySelector('.search').value);
    }

    function filter(criteria) {
        filteredShop.innerHTML = '';
        shop.forEach(e => {



            let raw = [];
            criteria.split('').forEach(e => {
                raw.push(e.toLowerCase());
            })


            if (raw.length == 0) {
                filteredShop.innerHTML = '';
                shop.forEach(e => {
                    filteredShop.innerHTML += e.outerHTML;
                })
                setEventListeners();

            }
            let i = 0;
            let verify = 0;


            let comp = [];

            console.log(e.firstElementChild.nextElementSibling.firstElementChild.innerHTML);

            e.firstElementChild.nextElementSibling.firstElementChild.innerHTML.split('').forEach(e => {

                comp.push(e.toLowerCase());
            })
            let comp2 = [];
            e.firstElementChild.nextElementSibling.lastElementChild.innerHTML.split('').forEach(e => {
                comp2.push(e.toLowerCase());
            })



            while (i < raw.length) {
                //code
                if (raw[i] == comp[i] || raw[i] == comp2[i]) {
                    verify++;
                }
                if (verify == raw.length) {
                    filteredShop.innerHTML += e.outerHTML;
                }
                i++;

                setEventListeners();
            }

        })
    }
}