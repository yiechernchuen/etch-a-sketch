// const button = document.createElement('button');
// button.classList.add('button');
// document.body.appendChild(button);

const container = document.createElement('div');
container.classList.add('container');
document.body.append(container);

for (let i = 1; i <= 256; i++) {
    const div = document.createElement('div');
    div.classList.add('box');
    document.querySelector('.container').append(div);
}

const box = document.querySelectorAll('.box');

box.forEach(mouseOver);

function mouseOver(box) {
    box.addEventListener('mouseover', (e) => (e.target.style.backgroundColor = randomColorGenerator()), { once: true });
}

const randomColorGenerator = () =>
    `#${Math.floor(Math.random() * 16777216)
        .toString(16)
        .padStart(6, 0)}`;
