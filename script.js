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

    toCard1.addEventListener("click", (e) => {
        e.preventDefault();
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
    toIntro.addEventListener("click", () => {
        toNextCard(0);
    });
}
function renderOnSubmit(e) {
    e.preventDefault();
    document.querySelector('form').addEventListener('submit', () => {
        const name = document.querySelector('input#firstName').value;
        const dev = document.querySelector('input[name="stack"]:checked').value; 
        const strength = document.querySelector('input[name="strength"]:checked').value; 
        let role; 
        if (dev === 'front') {
            role = 'Frontend Developer';
        } else if (dev === 'back') {
            role = 'Backend Developer';
        } else if (dev === 'full') {
            role = 'Fullstack Developer'; 
        } else if (dev === 'unknown') {
            if (strength === 'creative') {
                role = 'Frontend Developer';
            } else if (strength === 'organized') {
                role = 'Backend Developer'; 
            } else if (strength === 'multi') {
                role = 'Fullstack Developer'; 
            } else {
                return;
            }
        } else {
            return;
        }
        let languages; 
        if (role = 'Frontend Developer') {
            languages = 'HTML, CSS, JavaScript';
        } else if (role = 'Backend Developer') {
            languages = 'Python, Java, Node.js';
        } else if (role = 'Fullstack Developer') {
            languages = 'Ruby, PHP, C#';
        } else {
            return;
        }
        const result = `Thanks ${name} for completing this questionnaire! Based on your answers, ${role} seems to be a great fit for you. And to be a successful ${role}, consider learning ${languages}.`;
        document.getElementById('result').innerText = result;
    })
};

window.onload = function(e) {
    e.preventDefault();
    scrollToNext();
    renderOnSubmit();
}