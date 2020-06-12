'use strict';

let interval, interval2, interval3, interval4;
let x = 0, y = 20, dx = 5, width = 200, height = 100, dw = 5, dh = 5, op = 1, dop = -0.05;

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

const move = () => {
  x += dx;
  block.style.left = x + 'px';

  if (x + width > window.innerWidth || x < 0)
    dx = -dx;
};

const resize = () => {
  width += dw;
  height += dh;

  block.style.width = width + 'px';
  block.style.height = height + 'px';

  if (width > 400 && height > 200 || width < 100 && height < 50) {
    dw = -dw;
    dh = -dh;
  }
};

const opacity = () => {
  op += dop;

  block.style.opacity = op;

  if (op < 0 || op > 1)
    dop = -dop;
};

const randomize = () => {
  x = getRandomInt(width, window.innerWidth - width);
  y = getRandomInt(height, window.innerHeight - height);

  block.style.left = x + 'px';
  block.style.top = y + 'px';
};

const moveBtnHandler = () => {
  if (!interval) {
    interval = setInterval(move, 10);
  }
  else {
    clearInterval(interval);
    interval = null;
  }
};

const resizeBtnHandler = () => {
  if (!interval2) {
    interval2 = setInterval(resize, 10);
  }
  else {
    clearInterval(interval2);
    interval2 = null;
  }
};

const opacityBtnHandler = () => {
  if (!interval3) {
    interval3 = setInterval(opacity, 10);
  }
  else {
    clearInterval(interval3);
    interval3 = null;
  }
};

const randomizeBtnHandler = () => {
if (!interval4) {
    interval4 = setInterval(randomize, 10);
  }
  else {
    clearInterval(interval4);
    interval4 = null;
  }
};

moveBtn.addEventListener('click', moveBtnHandler);
resizeBtn.addEventListener('click', resizeBtnHandler);
opacityBtn.addEventListener('click', opacityBtnHandler);
randomizeBtn.addEventListener('click', randomizeBtnHandler);
