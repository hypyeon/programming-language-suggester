function toNext() {
    let currentCardIndex = 0;
    const cards = document.getElementsByClassName('card');
    let next = document.getElementsByClassName('nextBtn');

    next.addEventListener('click', function() {
        cards[currentCardIndex].style.display = 'none';
        currentCardIndex++;
        if (currentCardIndex >= cards.length) {
            currentCardIndex = 0;
        }
        cards[currentCardIndex].style.display = 'block';
    });
    cards[0].style.display = 'block';
};

window.onload = function() {
    toNext();
}