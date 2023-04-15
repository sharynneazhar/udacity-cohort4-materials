const paraTwo = document.getElementById('two');

setTimeout(function () {
  paraTwo.style.color = 'red';
}, 1000);

const allSpecialText = document.getElementsByClassName('special-text');
console.log(allSpecialText);

const allPara = document.getElementsByTagName('p');
console.log(allPara);
