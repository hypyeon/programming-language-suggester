function toNext() {
    const cards = document.getElementsByClassName('card');
    const intro = document.getElementById('opening');
    const card1 = document.getElementById('question-1');
    const card2 = document.getElementById('question-2');
    const card3 = document.getElementById('question-3');
    const card4 = document.getElementById('question-4');
    const card5 = document.getElementById('question-5');
    const result = document.getElementById('closing');

    let next = document.getElementById('toCard1');
    next.addEventListener('click', function() {
        card1.style.display = 'block';
        intro.style.display = 'none';
    });

    next = document.getElementById('toCard2');
    next.addEventListener('click', function() {
        card2.style.display = 'block';
        card1.style.display = 'none';
    });

    next = document.getElementById('toCard3');
    next.addEventListener('click', function() {
        card3.style.display = 'block';
        card2.style.display = 'none';
    });
};

window.onload = function() {
    toNext();
}