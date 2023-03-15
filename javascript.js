const button = document.createElement('button');
button.classList.add('button');
document.body.appendChild(button);
button.textContent = 'Grid Size';

const container = document.createElement('div');
container.classList.add('container');
document.body.append(container);

for (let i = 1; i <= 256; i++) {
    const div = document.createElement('div');
    div.classList.add('box');
    document.querySelector('.container').append(div);
}

const box = document.querySelectorAll('.box');
box.forEach((box) => {
    box.addEventListener('mouseover', (e) => (e.target.style.backgroundColor = randomColorGenerator()), { once: true });
});

const randomColorGenerator = () =>
    `#${Math.floor(Math.random() * 16777216)
        .toString(16)
        .padStart(6, 0)}`;

const userInputSquares = () => {
    let input = prompt('Please input number of squares per side for the new grid');
    const elementToBeRemoved = document.querySelectorAll('.box');
    elementToBeRemoved.forEach((element) => element.remove());
    for (let i = 1; i <= input * input; i++) {
        const div = document.createElement('div');
        div.classList.add('box');
        document.querySelector('.container').append(div);
    }
    const box = document.querySelectorAll('.box');
    box.forEach((box) => {
        box.style.flex = `1 0 ${800 / input}px`;
        box.addEventListener('mouseover', (e) => (e.target.style.backgroundColor = randomColorGenerator()), {
            once: true,
        });
    });
};

button.addEventListener('click', userInputSquares);
