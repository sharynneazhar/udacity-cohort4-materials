const handleInput = (event, inputId) => {
  event.preventDefault();

  const img = event.target.parentNode.querySelector('img');
  if (img) {
    img.remove();
  }

  const inputValue = document.getElementById(inputId).value;
  const image = document.createElement('img');
  image.classList.add('result-img');
  image.src = inputValue;

  event.target.parentNode.append(image);
};

const sameFolderForm = document.getElementById('same-folder');
sameFolderForm.addEventListener('submit', (e) =>
  handleInput(e, 'same-folder-input')
);

const insideFolderForm = document.getElementById('inside-folder');
insideFolderForm.addEventListener('submit', (e) =>
  handleInput(e, 'inside-folder-input')
);

const oneLevelUpForm = document.getElementById('one-level-up');
oneLevelUpForm.addEventListener('submit', (e) =>
  handleInput(e, 'one-level-up-input')
);

const nestedForm = document.getElementById('nested');
nestedForm.addEventListener('submit', (event) => {
  event.preventDefault();

  const img = event.target.parentNode.querySelector('img');
  if (img) {
    img.remove();
  }

  const inputValue = document.getElementById('nested-input').value;
  const image = document.createElement('img');
  image.classList.add('result-img');

  if (inputValue === '../../folderA/folderB/folderC/costume-pup.jpeg') {
    image.src =
      '/session2/6-relative-paths/folderA/folderB/folderC/costume-pup.jpeg';
  } else {
    image.src = 'wrongpath';
  }

  event.target.parentNode.append(image);
});
