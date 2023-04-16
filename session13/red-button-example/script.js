// ===============================================================
// Create an alert when user attempts to click the red button
// ===============================================================

// 1. Retrieve the big red button from the page
const redButton = document.querySelector('#red-button');
console.log(redButton);

// 2. Add a "mouseover" event listener the button and trigger
//    an alert with a message the user "Do not push!"
redButton.addEventListener('mouseover', function (event) {
  alert('Do not push!');
});

// ===============================================================
// Determine which button on the page was clicked
// ===============================================================

// 1. Retrieve all buttons from the page
const btnContainer = document.querySelector('.button-container');

// 2. Add a "click" event listener to each button and log to
//    the console the button's ID
btnContainer.addEventListener('click', function (event) {
  console.log(event.target.id);
});

// ===============================================================
// Determine the position of paragraph section 2 on scroll
// ===============================================================

// 1. Add a "scroll" event listener on the window and on scroll,
//   1a. Retrieve paragraph section 2 from the DOM
//   1b. Log to the console the Y position of section 2
//       - Hint: Use the getBoundingClientRect() funciton to
//         retrieve an elements position on the page

const para = document.querySelector('#section2');

window.addEventListener('scroll', function (event) {
  const pos = para.getBoundingClientRect();
  console.log(pos.y);
});
