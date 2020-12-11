const colors = [
  '#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
];

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

let changeColor; 

const refs = {
    buttons: document.querySelectorAll('button'),
    body: document.querySelector('body'),
};

refs.buttons[0].addEventListener('click', start);
refs.buttons[1].addEventListener('click', stop);

function start() {
    changeColor = true;
    const intervalId = setInterval(() => {
        if (!changeColor) { clearInterval(intervalId); return; };
        refs.body.style.background = colors[randomIntegerFromInterval(0, colors.length - 1)];
    }, 500);    
};

function stop() { changeColor = false; };