const result = document.getElementById('result');

const start_date = new Date(2028, 6, 14).getTime();

setInterval(() => {
    const now = Date.now();

    let time_left = start_date - now;

    const day = Math.floor(time_left / (1000 * 60 * 60 * 24));
    time_left %= (1000 * 60 * 60 * 24);

    const hour = Math.floor(time_left / (1000 * 60 * 60));
    time_left %= (1000 * 60 * 60);

    const minute = Math.floor(time_left / (1000 * 60));
    time_left %= (1000 * 60);

    const second = Math.floor(time_left / 1000);

    result.textContent = `Days: ${day} Hours: ${hour} Minutes: ${minute} Seconds: ${second}`;
}, 1000);