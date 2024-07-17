function handleSubmit(event) {
    event.preventDefault();
    document.getElementById('response-message').style.display = 'block';
    document.getElementById('survey-form').style.display = 'none';
    document.getElementById('page-header').style.display = 'none';
    document.getElementById('tick-mark').style.display = 'flex';
}

document.addEventListener("DOMContentLoaded", function() {
    const checkboxes = document.querySelectorAll('input[type="checkbox"]');
    const radios = document.querySelectorAll('input[type="radio"]');
    const body = document.body;

    function changeBackgroundColor() {
        body.style.backgroundColor = "hsla(30, 100%, 50%, 0.3)"; /* Change to brown */
    }

    checkboxes.forEach(checkbox => {
        checkbox.addEventListener('change', changeBackgroundColor);
    });

    radios.forEach(radio => {
        radio.addEventListener('change', changeBackgroundColor);
    });
});

const canvas = document.getElementById('signature');
const ctx = canvas.getContext('2d');

let painting = false;

canvas.addEventListener('mousedown', startPosition);
canvas.addEventListener('mouseup', finishedPosition);
canvas.addEventListener('mousemove', draw);

function startPosition(e) {
    painting = true;
    draw(e);
}

function finishedPosition() {
    painting = false;
    ctx.beginPath();
}

function draw(e) {
    if (!painting) return;
    ctx.lineWidth = 2;
    ctx.lineCap = 'round';

    ctx.lineTo(e.clientX - canvas.offsetLeft, e.clientY - canvas.offsetTop);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(e.clientX - canvas.offsetLeft, e.clientY - canvas.offsetTop);
}
