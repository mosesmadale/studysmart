let topic = {
    type: ''
}



//resising the page accordingly

if (window.innerWidth < 1024) {
    document.querySelector('.nav-list').innerHTML = '10 Questions';
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
}


//resizing ends here


/*
function toggleqns(a) {
    $(a).css('background-color', 'rgb(56, 16, 94)');
    $(a).css('color', 'white');
    $(a).css('border', 'none');
}

function clearqns() {
    $('.choose>div').css('background-color', 'white');
    $('.choose>div').css('color', 'rgb(56, 16, 94)');
    $('.choose>div').css('border', 'solid rgb(20, 6, 34) 3px');
}

$('.choose>div').click(function() {
    clearqns();
    toggleqns(this);
    topic.type = $(this)[0].outerText;
    console.log($(this)[0].outerText);
    $('#start').css('transition', 'all .5s ease');
    $('#start').css('background-color', 'rgb(56, 16, 94)');
    $('#start').css('color', 'white');
    let link = document.createElement('a');
    link.setAttribute('href', 'q1.html');
    link.appendChild(document.querySelector('#start'));
    document.querySelector('.btn-cont').innerHTML = '';
    document.querySelector('.btn-cont').appendChild(link);
})

$('#start').click(function() {
    localStorage.setItem('currentPage', '1');
    localStorage.setItem('xps', '0');
    localStorage.setItem('topic', `${topic.type}`)
})*/