function suggestionMaker() {
    const name = document.getElementById("firstName").value;
    if (name.trim() === "") {
        alert("Please write your name.");
        return;
    }

    const stack = document.querySelector('input[type="radio"]:checked').value; 
    const selectedStrength = document.querySelector('input[name="strength"]:checked').value;

    const frontDev = 'Frontend Developer';
    const backDev = 'Backend Developer';
    const fullStack = 'Fullstack Developer';

    const langFront = 'HTML, CSS, and JavaScript';
    const langBack = 'Node.js, Ruby, Java';
    const langFull = 'Python, C#, SQL';

    const formStack = document.getElementById("form-3");
    formStack.addEventListener("submit", function(e) {
        e.preventDefault();
        let developer;
        let language;
        if (stack === 'front') {
            developer = frontDev;
            language = langFront;
        } else if (stack === 'back') {
            developer = backDev;
            language = langBack;
        } else if (stack === 'full') {
            developer = fullStack;
            language = langFull;
        } else if (stack === 'unknown') {
            const formStrengths = document.getElementById('form-5');
            formStrengths.addEventListener("submit", function() {
                if (selectedStrength === 'creative') {
                    developer = frontDev;
                    language = langFront;
                } else if (selectedStrength === 'organized') {
                    developer = backDev;
                    language = langBack;
                } else if (selectedStrength === 'multi') {
                    developer = fullStack;
                    language = langFull;
                };
            })
        } else {
            alert("Please choose an option.");
        };

        const jobTitle = developer;
        const lang = language;

        const result = `${name[0].toUpperCase()}${name.slice(1).toLowerCase()}, according to your answers you might enjoy being a ${jobTitle}. 
        To further strengthen your skills as a programmer, we suggest you to explore the following software languages: 
        ${lang}`;

        document.getElementById('result').innerText = result;
    });
};

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

window.onload = function(e) {
    e.preventDefault();
    toNext();
    suggestionMaker();
}