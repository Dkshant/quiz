const form = document.querySelector('form');
const outputScore = document.querySelector('.output-score');
const correctAns = ['C', 'D', 'C', 'C', 'B'];

form.addEventListener('submit', e => {
    e.preventDefault();

    let score = 0;
    let userAns = [form.q1.value, form.q2.value, form.q3.value, form.q4.value, form.q5.value];

    userAns.forEach((a, b) => {
        if (a === correctAns[b]) {
            score += 20;
        }
    });

    outputScore.classList.remove('d-none');

    let output = 0;

    const timer = setInterval(() => {
        outputScore.textContent = `you are ${output} % correct`;

        if (output === score) {
            clearInterval(timer);
        }
        else {
            output++;
        }
    }, 40);

    scrollTo(0, 0);

});