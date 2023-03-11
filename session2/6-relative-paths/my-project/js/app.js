var tree = new Tree(document.getElementById('tree'), {
  navigate: true, // allow navigate with ArrowUp and ArrowDown
});

var structure = [
  {
    name: 'folderA',
    type: Tree.FOLDER,
    children: [
      {
        name: 'folderB',
        type: Tree.FOLDER,
        children: [
          {
            name: 'folderC',
            type: Tree.FOLDER,
            children: [
              {
                name: 'costume-pup.jpeg',
              },
            ],
          },
        ],
      },
    ],
  },
  {
    name: 'images',
    type: Tree.FOLDER,
    children: [
      {
        name: 'yawning-pup.jpeg',
      },
    ],
  },
  {
    name: 'my-project',
    open: true,
    type: Tree.FOLDER,
    selected: true,
    children: [
      {
        name: 'css',
        type: Tree.FOLDER,
        children: [
          {
            name: 'styles.css',
          },
        ],
      },
      {
        name: 'images',
        type: Tree.FOLDER,
        children: [
          {
            name: 'eskimo.jpeg',
          },
        ],
      },
      {
        name: 'js',
        type: Tree.FOLDER,
        children: [
          {
            name: 'app.js',
          },
        ],
      },
      {
        name: 'huskies.jpeg',
      },
      {
        name: 'index.html',
      },
    ],
  },
];

// keep track of the original node objects
tree.on('created', (e, node) => {
  e.node = node;
});

tree.json(structure);

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
      '/udacity-cohort4-materials/session2/6-relative-paths/folderA/folderB/folderC/costume-pup.jpeg';
  } else {
    image.src = 'wrongpath';
  }

  event.target.parentNode.append(image);
});
