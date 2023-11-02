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
    next.addEventListener('click', function(e) {
        e.preventDefault();
        card2.style.display = 'block';
        card1.style.display = 'none';
    });

    next = document.getElementById('toCard3');
    next.addEventListener('click', function(e) {
        e.preventDefault();
        card3.style.display = 'block';
        card2.style.display = 'none';
    });

    next = document.getElementById('toCard4');
    next.addEventListener('click', function(e) {
        e.preventDefault();
        card4.style.display = 'block';
        card3.style.display = 'none';
    });

    next = document.getElementById('toCard5');
    next.addEventListener('click', function(e) {
        e.preventDefault();
        card5.style.display = 'block';
        card4.style.display = 'none';
    });

    next = document.getElementById('toResult');
    next.addEventListener('click', function(e) {
        e.preventDefault();
        result.style.display = 'block';
        card5.style.display = 'none';
    });
};

window.onload = function() {
    toNext();
}