let percentage = ((localStorage.getItem('xps')) / 10) * 100;

document.querySelector('.number').innerHTML = `mark: ${percentage}%`;

if (percentage < 20) {
    document.querySelector('.grade').innerHTML = `grade: F*`;
    document.querySelector('.description').innerHTML = `You haven't Revised!`;
} else if (percentage < 40) {
    document.querySelector('.grade').innerHTML = `grade: E`;
    document.querySelector('.description').innerHTML = `Atleast Try!`;
} else if (percentage < 50) {
    document.querySelector('.grade').innerHTML = `grade: D`;
    document.querySelector('.description').innerHTML = `You can do better next time!`;
} else if (percentage < 66) {
    document.querySelector('.grade').innerHTML = `grade: C`;
    document.querySelector('.description').innerHTML = `Try again!`;
} else if (percentage < 80) {
    document.querySelector('.grade').innerHTML = `grade: B`;
    document.querySelector('.description').innerHTML = `Almost there!`;
} else if (percentage < 95) {
    document.querySelector('.grade').innerHTML = `grade: A`;
    document.querySelector('.description').innerHTML = `Impressive`;
} else {
    document.querySelector('.grade').innerHTML = `grade: A*`;
    document.querySelector('.description').innerHTML = `You are Fire!!!`;
}

document.querySelectorAll('.nav')[10].classList.add('selected')