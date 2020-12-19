//important variable declarations...


//xps

let xp = 0;

let pointsDisplay = document.querySelector('.profile');

pointsDisplay.innerText = xp;


//page management

let currentPage = 0;

//end of important variable declarations

let questionPad = document.querySelector('.question-title');
if (window.innerWidth < 1024) {
    document.querySelector('.nav-list').innerHTML = 'Question: ' + (currentPage + 1);
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
    document.querySelectorAll('.nav')[currentPage].classList.add('selected');
}



let questionBigHolder = {
    questionsObtainedFromSever: '',
    relevantQuestions: ''
}

//fetching questions from the server

let xhr = new XMLHttpRequest();
xhr.open('GET', 'http://gearsoft.rf.gd/quiz_upload/questions.json', true);

xhr.onload = function() {
    if (this.status == 200) {
        questionBigHolder.questionsObtainedFromSever = JSON.parse(this.responseText);
        questionBigHolder.questionsObtainedFromSever.forEach(element => {
            console.log(element['quiz-name']);
            console.log(localStorage.getItem('topic'));
            console.log(localStorage.getItem('currentPage'));
            if (element['quiz-name'] == localStorage.getItem('topic')) {
                questionBigHolder.relevantQuestions = element.questions;
                console.log(element['quiz-name']);
                //modifying content

                questionPad.innerText = questionBigHolder.relevantQuestions[currentPage].question;
            }
        });
    }
}

xhr.send();


//validate listerner

$('.start').click(function() {
    $('.start').off();
    validate(currentPage, this);

})


//end of validate listener

function validate(currentLesson, e) {
    if (e.innerText == questionBigHolder.relevantQuestions[currentPage].isTrue) {
        xp++;
        let val = document.createElement('div');
        val.className = 'validation-correct';
        if (currentPage < 9) {
            val.innerHTML = `<p>Correct!</p><span>click to continue</span>`;
            val.setAttribute('onclick', `updateQuestions()`);
        } else if (currentPage == 9) {
            val.innerHTML = `<p>Correct!</p><span>click to continue</span>`;
            document.querySelector('.comments').onclick = function() {
                window.open('results.html', '_self')
            }
        }
        document.querySelector('.comments').appendChild(val);
    } else {
        let val = document.createElement('div');
        val.className = 'validation-incorrect';
        if (currentPage < 9) {
            val.innerHTML = `<p>Incorrect!</p><span>click to continue</span>`;
            val.setAttribute('onclick', `updateQuestions()`);
        } else if (currentPage == 9) {
            val.innerHTML = `<p>Incorrect!</p><span>click to continue</span>`;
            document.querySelector('.comments').onclick = function() {
                window.open('results.html', '_self')
            }
        }
        document.querySelector('.comments').appendChild(val);
    }

    currentPage++;
    localStorage.setItem('xps', `${xp}`)
}

function updateQuestions() {
    pointsDisplay.innerText = xp;
    document.querySelector('.comments').innerHTML = '';
    $('.start').click(function() {
        $('.start').off();
        validate(currentPage, this);

    })


    if (window.innerWidth < 1024) {
        document.querySelector('.nav-list').innerHTML = 'Question: ' + (currentPage + 1);
    } else if (window.innerWidth > 1024) {
        document.querySelectorAll('.nav')[currentPage].classList.add('selected');
    }


    //modifying content

    if (currentPage < 10) {

        questionPad.innerText = questionBigHolder.relevantQuestions[currentPage].question;
    }

}