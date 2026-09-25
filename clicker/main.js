const body = document.querySelector('body');

body.addEventListener('click', (e) => {
    console.log(e.clientX , e.clientY);

    const circle = document.createElement('div');
    circle.classList.add('circle');
    circle.textContent = "Royel";
    const color = ['red', 'blue', 'green', 'pink'];

    circle.style.background = color[Math.floor(Math.random() * 4)];

    circle.style.left = `${e.clientX}px`;
    circle.style.top = `${e.clientY}px`;
    body.append(circle)

    setTimeout(()=>{
        circle.remove();
    },5000);
});