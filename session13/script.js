// // query for button
// const button = document.getElementById('click-me');

// // listen on click event
// button.addEventListener('click', function (event) {
//   console.log('event.type', event.type);

//   const h1Elem = document.querySelector('h1');
//   if (h1Elem.style.color === 'red') {
//     h1Elem.style.color = 'black';
//   } else {
//     h1Elem.style.color = 'red';
//   }
// });

// grab all button
// const buttons = document.querySelectorAll('button');
// buttons.forEach(function (buttonElem) {
//   buttonElem.addEventListener('click', function (event) {
//     console.log('event.type', event.type);
//     console.log('event.target', event.target);
//     console.log(event.target.id);
//   });
// });

// const buttonGrp = document.querySelector('.button-group');
// buttonGrp.addEventListener('click', function (event) {
//   console.log(event.target.id);
//   console.log('event.clientX', event.clientX);
//   console.log('event.clientY', event.clientY);
// });

// const input = document.querySelector('#msg-box');
// input.addEventListener('input', function (event) {
//   console.log('input.value', input.value);
//   console.log('event.target.value', event.target.value);
// });

const link = document.querySelector('a');
link.addEventListener('click', function (event) {
  event.preventDefault();
  console.log('i was clicked');
});
