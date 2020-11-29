let questionPad = document.querySelector('.question-title');
let currentPage = localStorage.getItem('currentPage');
if (window.innerWidth < 1024) {
    document.querySelector('.nav-list').innerHTML = 'Question: ' + currentPage;
    console.log('here');
} else if (window.innerWidth > 1024) {
    document.querySelector('.nav-list').innerHTML = `
					<div class="1 nav">1</div>
	                <div class="2 nav">2</div>
	                <div class="3 nav">3</div>
	                <div class="4 nav">4</div>
	                <div class="5 nav">5</div>
	                <div class="6 nav">6</div>
	                <div class="7 nav">7</div>
	                <div class="8 nav">8</div>
	                <div class="9 nav">9</div>
	                <div class="10 nav">10</div>
	                <div class="result nav">result</div>`;
    console.log(currentPage, 'this one');
    document.querySelectorAll('.nav')[currentPage - 1].classList.add('selected');
}





document.querySelector('.profile').innerText = localStorage.getItem('xps') + ' xp';

let points = localStorage.getItem('xps');

let questionBigHolder = {
    questionsObtainedFromSever: '',
    relevantQuestions: ''
}

//fetching questions from the server

let xhr = new XMLHttpRequest();
xhr.open('GET', 'questions.json', true);

xhr.onload = function() {
    if (this.status == 200) {
        //console.log(this.responseText);
        questionBigHolder.questionsObtainedFromSever = JSON.parse(this.responseText);
        questionBigHolder.questionsObtainedFromSever.forEach(element => {
            if (element.lesson == localStorage.getItem('topic')) {
                questionBigHolder.relevantQuestions = element.questions;

                //modifying content

                questionPad.innerText = questionBigHolder.relevantQuestions[currentPage - 1].question;
                currentPage++;
                localStorage.setItem('currentPage', `${currentPage}`);
            }
        });
    }
}

xhr.send();


$('.start').click(function() {
    $('.start').off();

    /*switch (localStorage.getItem('topic')) {
        case 'Geography':
            validate(geography, this);
            console.log(this);
            break;
        case 'Maths':
            validate(maths, this);
            break;
        case 'Biology':
            validate(biology, this);
            break;
        case 'Chemistry':
            validate(chemistry, this);
            break;
    }*/
    validate(currentPage, this);
    //console.log(currentPage);

})

function validate(currentLesson, e) {
    if (e.innerText == questionBigHolder.relevantQuestions[currentPage - 2].isTrue) {
        points++;
        localStorage.setItem('xps', `${points}`);
        document.querySelector('.profile').innerText = localStorage.getItem('xps') + ' xp';
        let val = document.createElement('div');
        let link = document.createElement('a');
        val.className = 'validation-correct';
        if (currentPage - 1 < 11) {
            val.innerHTML = `<p>Correct!</p><span>click to continue</span>`;
            link.setAttribute('href', `q${currentPage}.html`);
        } else if (currentPage - 1 == 11) {
            console.log('moses won')
            val.innerHTML = `<p>Correct!</p><span><a href=results.html>click to continue</a></span>`;
        }
        document.querySelector('.comments').appendChild(link);
        link.appendChild(val);
    } else {
        console.log('false');
        let val = document.createElement('div');
        let link = document.createElement('a');
        val.className = 'validation-incorrect';
        if (currentPage - 1 < 11) {
            val.innerHTML = `<p>Incorrect!</p><span>click to continue</span>`;
            link.setAttribute('href', `q${currentPage}.html`);
        } else if (currentPage - 1 == 11) {
            console.log('moses won');
            val.innerHTML = `<p>Incorrect!</p><span><a href=results.html>click to continue</a></span>`;
        }
        document.querySelector('.comments').appendChild(link);
        link.appendChild(val);
    }
}

console.log(currentPage - 1)

if (currentPage - 1 == 11) {
    console.log('moses won')
    document.querySelector('.number').innerHTML = `mark: ${points/10}`;
}