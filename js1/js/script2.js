'use strict';

const btn1Handler = () => {
  if (block.style.opacity === '1' || block.style.opacity === '')
    block.style.opacity = '0';
  else
    block.style.opacity = '1';
};

const btn2Handler = () => {
  if (block.style.backgroundColor === 'rgb(0, 255, 0)' || block.style.backgroundColor === '')
    block.style.backgroundColor = 'rgb(255, 0, 0)';
  else
    block.style.backgroundColor = 'rgb(0, 255, 0)';
};

const btn3Handler = () => {
  if (block.style.borderColor === 'black' || block.style.borderColor === '')
    block.style.borderColor = 'blue';
  else
    block.style.borderColor = 'black';
};

const btn4Handler = () => {
  if (block.style.borderWidth === '1px' || block.style.borderWidth === '')
    block.style.borderWidth = '10px';
  else
    block.style.borderWidth = '1px';
};

const btn5Handler = () => {
  if (block.style.width === '200px' || block.style.width === '')
    block.style.width = '400px';
  else
    block.style.width = '200px';
};

const btn6Handler = () => {
  if (block.style.height === '100px' || block.style.height === '')
    block.style.height = '200px';
  else
    block.style.height = '100px';
};

const btn7Handler = () => {
  if (block.style.left === '0px' || block.style.left === '')
    block.style.left = '200px';
  else
    block.style.left = '0px';
};

const btn8Handler = () => {
  if (block.style.top === '20px' || block.style.top === '')
    block.style.top = '200px';
  else
    block.style.top = '20px';
};

const btn9Handler = () => {
  if (block.style.fontSize === '20px' || block.style.fontSize === '')
    block.style.fontSize = '30px';
  else
    block.style.fontSize = '20px';
};


btn1.addEventListener('click', btn1Handler);
btn2.addEventListener('click', btn2Handler);
btn3.addEventListener('click', btn3Handler);
btn4.addEventListener('click', btn4Handler);
btn5.addEventListener('click', btn5Handler);
btn6.addEventListener('click', btn6Handler);
btn7.addEventListener('click', btn7Handler);
btn8.addEventListener('click', btn8Handler);
btn9.addEventListener('click', btn9Handler);
