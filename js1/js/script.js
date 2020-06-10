'use strict';

alert('Меня загрузили!!!');

const btnf = () => {
  alert('Привет друг!!!');
};

const blackf = () => {
  alert('Я - черный квадрат Малевича!!!');
};

const pinkf = () => {
  alert('Не покидай меня!!!');
};

const greenf = () => {
  alert('Мир во всем мире!!!');
};

const btn2f = () => {
  document.location.href = 'https://google.com';
};

btn.addEventListener('click', btnf);
btn2.addEventListener('click', btn2f);
black.addEventListener('mousemove', blackf);
pink.addEventListener('mouseout', pinkf);
green.addEventListener('dblclick', greenf);
