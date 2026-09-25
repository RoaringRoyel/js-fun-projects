const form = document.querySelector("form")


form.addEventListener("submit", (e)=>{
    e.preventDefault(); // prevents default goes
    const boy = document.getElementById("boy");
    const girl = document.getElementById("girl")

    const boy_v = boy.value; 
    const girl_v = girl.value;
    const l1 = boy.value.length;
    const l2 = girl.value.length;
    const result = Math.pow(l1+l2,3 ) %101;

    document.querySelector("h2").textContent = `Result: ${result}`;
    form.reset();

});

