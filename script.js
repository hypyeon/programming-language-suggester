function scrollToNext() {
    function toNextCard(page) {
        let windowHeight = window.innerHeight * page;
        window.scrollTo({
            top: windowHeight,
            behavior: "smooth", 
        });
    }
    const toCard1 = document.getElementById("toCard1");
    const toCard2 = document.getElementById("toCard2");
    const toCard3 = document.getElementById("toCard3");
    const toCard4 = document.getElementById("toCard4");
    const toCard5 = document.getElementById("toCard5");
    const toResult = document.getElementById("toResult");
    const toIntro = document.getElementById("toIntro");

    toCard1.addEventListener("click", () => {
        toNextCard(1);
    });
    toCard2.addEventListener("click", (e) => {
        e.preventDefault();
        toNextCard(2);
    });
    toCard3.addEventListener("click", (e) => {
        e.preventDefault();
        toNextCard(3);
    });
    toCard4.addEventListener("click", (e) => {
        e.preventDefault();
        toNextCard(4)
    });
    toCard5.addEventListener("click", (e) => {
        e.preventDefault();
        toNextCard(5);
    });
    toResult.addEventListener("click", (e) => {
        e.preventDefault();
        toNextCard(6);
    });
    toIntro.addEventListener("click", (e) => {
        e.preventDefault();
        toNextCard(0);
    });
}

const result = document.getElementById('result');
let jobTitle;

function renderOnSubmit() {
    const formThree = document.getElementById('form-3');
    formThree.addEventListener('submit', () => {
        jobTitle = document.querySelector('input[type="radio"]:checked').value;;
    });
    return jobTitle;
};

window.onload = function(e) {
    e.preventDefault();
    scrollToNext();
    renderOnSubmit();
    result.innerHTML = jobTitle;
}