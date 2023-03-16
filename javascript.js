const header = document.createElement('h1');
header.textContent = 'Etch-A-Sketch';
document.body.appendChild(header);

const toolBar = document.createElement('div');
document.body.appendChild(toolBar);
toolBar.classList.add('toolBar');

for (let i = 0; i < 5; i++) {
    const button = document.createElement('button');
    toolBar.appendChild(button);
}

const button = document.querySelectorAll('button');
button[0].textContent = 'Rainbow';
button[1].textContent = 'Grid Size';
button[2].textContent = 'Eraser';
button[3].textContent = 'Clear';
button[4].textContent = 'Color Picker: ';

const colorPicker = document.createElement('input');
colorPicker.setAttribute('type', 'color');
button[4].classList.add('colorPicker');
button[4].appendChild(colorPicker);

const container = document.createElement('div');
container.classList.add('container');
document.body.append(container);

const randomColorGenerator = () =>
    `#${Math.floor(Math.random() * 16777216)
        .toString(16)
        .padStart(6, 0)}`;

for (let i = 1; i <= 16 * 16; i++) {
    const div = document.createElement('div');
    div.classList.add('box');
    document.querySelector('.container').append(div);
}

let box = document.querySelectorAll('.box');
box.forEach((box) => {
    box.addEventListener('mouseover', (e) => (e.target.style.backgroundColor = randomColorGenerator()));
});

const userInputSquares = () => {
    let input = '';
    while (true) {
        input = prompt('Please input number of squares per side for the new grid (max:100)');
        if (input <= 100 && input > 0) {
            break;
        } else if (input === null || input === '') {
            return;
        } else {
            alert('Invalid input');
            return;
        }
    }
    box.forEach((element) => element.remove());
    for (let i = 1; i <= input * input; i++) {
        const div = document.createElement('div');
        div.classList.add('box');
        document.querySelector('.container').append(div);
    }
    box = document.querySelectorAll('.box');
    box.forEach((box) => {
        box.style.flex = `1 0 ${800 / input}px`;
        box.addEventListener('mouseover', (e) => (e.target.style.backgroundColor = randomColorGenerator()));
    });
};

button[0].addEventListener('click', () => {
    box.forEach((box) => {
        box.addEventListener('mouseover', (e) => (e.target.style.backgroundColor = randomColorGenerator()));
    });
});

button[1].addEventListener('click', userInputSquares);

button[2].addEventListener('click', () =>
    box.forEach((box) => {
        box.addEventListener('mouseover', (e) => (e.target.style.backgroundColor = 'white'));
    })
);

button[3].addEventListener('click', () => {
    box.forEach((box) => {
        box.style.backgroundColor = 'white';
    });
});

['click', 'input'].forEach((e) =>
    colorPicker.addEventListener(e, () => {
        const selectedColor = document.querySelector('input').value;
        box.forEach((box) => {
            box.addEventListener('mouseover', (e) => (e.target.style.backgroundColor = selectedColor));
        });
    })
);
