const redLetters = document.getElementById('redLetters');
const atSign = document.getElementById('atSign');
const powerBtn = document.querySelector('.powerbutton');
const btnJump = document.getElementById('btn-jump');
const container = document.querySelector('.container');




const button = document.querySelector('#btn-bg');
const activate = () => {
    const left = document.querySelector('.dot.left');
    const right = document.querySelector('.dot.right');
    const leftKick = document.querySelector('.line.left');
    const rightKick = document.querySelector('.line.right');
    const msg = document.querySelector('#power-text');
    const btnJump = document.querySelector('#btn-jump');
    container.addEventListener('click', (e) => {
        left.classList.remove('remove-animation');
        right.classList.remove('remove-animation');
        leftKick.classList.remove('remove-animation');
        rightKick.classList.remove('remove-animation');
        if (e.target.closest('#btn-bg')) {
            redLetters.classList.add('active');
            atSign.classList.add('active');
            button.classList.add('active');
        } else if (e.target.matches('#btn-jump')) {
            btnJump.innerText = 'jumping';
            left.style.animation = `jumpRight 800ms linear forwards`;
            right.style.animation = `jumpLeft 800ms linear forwards`;
            leftKick.style.animation = `kickRight .1s ease-in-out 2 forwards`;
            rightKick.style.animation = `kickLeft .1s ease-in-out 2 forwards`;
        }
        setTimeout(() => {
            left.style.animation = `jumpRightBack 800ms linear forwards`;
            right.style.animation = `jumpLeftBack 800ms linear forwards`;
        }, 850);
        setTimeout(() => {
            redLetters.classList.remove('active');
            atSign.classList.remove('active');
            button.classList.remove('active');
            msg.innerHTML = '<p>Start Animation</p>';
            btnJump.innerText = 'kick it';
            left.classList.add('remove-animation');
            right.classList.add('remove-animation');
            leftKick.classList.add('remove-animation');
            rightKick.classList.add('remove-animation');
            // window.location.reload();
        }, 2600);

        msg.innerHTML = '<p>Animation running...</p>';



    });
};
window.addEventListener('load', (event) => {

    event.preventDefault();
    if (button) {
        activate();
    }
})