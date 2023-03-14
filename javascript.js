const container = document.createElement('div');
container.classList.add('container');
document.body.append(container);

for (let i = 1; i <= 256; i++) {
    const div = document.createElement('div');
    div.classList.add('box');
    document.querySelector('.container').append(div);
}
