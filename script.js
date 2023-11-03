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

    next = document.getElementById('toIntro');
    next.addEventListener('click', function(e) {
        e.preventDefault();
        intro.style.display = 'block';
        result.style.display = 'none';
    });
};

function suggestion() {
    const name = document.querySelector('input[name="firstName"]').value;
    let nameResult = document.getElementById('name');

    const formName = document.getElementById('form-1');
    formName.addEventListener('submit', function() {
        nameResult.innerText = name;
    });

    let developerResult = document.getElementById('developer');

    const formStack = document.getElementById('form-3');
    formStack.addEventListener('submit', function() {
        let selectedStack = document.querySelector('input[name="stack"]:checked').value;
        if (selectedStack === 'front') {
            developerResult.innerText = 'Frontend Developer';
        } else if (selectedStack === 'back') {
            developerResult.innerText = 'Backend Developer';
        } else if (selectedStack === 'full') {
            developerResult.innerText = 'Fullstack Developer';
        } else if (selectedStack === 'unknown') {
            const formStrengths = document.getElementById('form-5');
            formStrengths.addEventListener('submit', function() {
                let selectedStrength = document.querySelector('input[name="strength"]:checked').value;
                if (selectedStrength === 'creative') {
                    developerResult.innerText = 'Frontend Developer';
                } else if (selectedStrength === 'organized') {
                    developerResult.innerText = 'Backend Developer';
                } else if (selectedStrength === 'multi') {
                    developerResult.innerText = 'Fullstack Developer';
                    return;
                };
            })
        } else {
            alert("Please choose an option.");
            return;
        };
    });

    let languageResult = document.getElementById('languages');

    const frontEnd = 'HTML, CSS, and JavaScript';
    const backEnd = 'Node.js, Ruby, Java';
    const fullStack = 'Python, C#, SQL';

    if (developerResult === 'Frontend Developer') {
        languageResult.innerText = frontEnd;
    } else if (developerResult === 'Backend Developer') {
        languageResult.innerText = backEnd;
    } else if (developerResult === 'Fullstack Developer') {
        languageResult.innerText = fullStack;
        return;
    };
};

window.onload = function() {
    toNext();
    suggestion();
}