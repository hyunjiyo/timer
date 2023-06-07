const input = document.querySelector('.countdown-input'); 
const start = document.querySelector('.countdown-start');
const bar = document.querySelector('.countdown-timer-bar');
let interval;

function reset() {
  bar.classList.remove('animate');
  input.value = '';
  start.textContent = 'start';
  clearInterval(interval);
}

function countdown() {
  interval = setInterval(() => {
    input.value--;
    input.value === '0' && clearInterval(interval);
  },1000); 
}

function activate() {
  if (!input.value || input.value === '0') return reset();
  bar.style.setProperty('--duration',`${input.value}s`);
  bar.classList.add('animate');
  start.textContent = 'restart';
  countdown();
}

const init = () => start.textContent === 'start' ? activate() : reset();

start.addEventListener('click',init,false);
input.addEventListener('focus',reset,false);