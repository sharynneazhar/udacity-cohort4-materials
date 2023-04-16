const newPara = document.createElement('p');

newPara.id = 'newPara';
newPara.classList.add('text');
newPara.textContent = 'New kid on the block';
newPara.style.color = 'green';

console.log(newPara);

const divElem = document.querySelector('#about');
divElem.appendChild(newPara);

// create a new link element
const newLink = document.createElement('a');

// set the link text and URL
newLink.textContent = 'Google';
newLink.setAttribute('href', 'https://www.google.com');

// add the new link to the body of the document
document.body.appendChild(newLink);
