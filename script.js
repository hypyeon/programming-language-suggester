function toNext() {
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
    let name = document.getElementById('firstName').value;
    name = name.charAt(0).toUpperCase() + name.slice(1).toLowerCase;
    let nameResult = document.getElementById('name');

    const formName = document.getElementById('form-1');
    formName.addEventListener('submit', function(e) {
        e.preventDefault();
        nameResult.innerText = name;
    });

    let developerResult = document.getElementById('developer');
    let languageResult = document.getElementById('languages');

    const formStack = document.getElementById('form-3');
    formStack.addEventListener('submit', function(e) {
        e.preventDefault();
        let selectedStack = document.querySelector('input[name="stack"]:checked').value;
        if (selectedStack === 'front') {
            developerResult.innerText = 'Frontend Developer';
            languageResult.innerText = 'HTML, CSS, and JavaScript';
        } else if (selectedStack === 'back') {
            developerResult.innerText = 'Backend Developer';
            languageResult.innerText = 'Node.js, Ruby, Java';
        } else if (selectedStack === 'full') {
            developerResult.innerText = 'Fullstack Developer';
            languageResult.innerText = 'Python, C#, SQL';
        } else if (selectedStack === 'unknown') {
            const formStrengths = document.getElementById('form-5');
            formStrengths.addEventListener('submit', function() {
                let selectedStrength = document.querySelector('input[name="strength"]:checked').value;
                if (selectedStrength === 'creative') {
                    developerResult.innerText = 'Frontend Developer';
                    languageResult.innerText = 'HTML, CSS, and JavaScript';
                } else if (selectedStrength === 'organized') {
                    developerResult.innerText = 'Backend Developer';
                    languageResult.innerText = 'Node.js, Ruby, Java';
                } else if (selectedStrength === 'multi') {
                    developerResult.innerText = 'Fullstack Developer';
                    languageResult.innerText = 'Python, C#, SQL';
                };
            })
        } else {
            alert("Please choose an option.");
        };
    });
};

window.onload = function() {
    toNext();
    suggestion();
}