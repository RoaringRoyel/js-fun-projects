const form = document.querySelector("form")


form.addEventListener('submit', (e)=>{
    e.preventDefault();
    const income = document.querySelector("#income")

    const amount = parseInt(income.value)

    const result = document.querySelector("h2")
    let totalTax = 0;
    if(amount <= 1200000){
        totalTax = 0;
    }
    else if(amount<=1600000){
        totalTax = (amount-1200000) * 0.15;
    }
    else if(amount<=2000000){
        totalTax = 60000+ (amount-1600000) * 0.2;
    }
    else if(amount<=2400000){
        totalTax = 80000 + 60000+ (amount-2000000) * 0.25;
    }
    else{
        totalTax = 100000 + 80000 + 60000+ (amount-2400000) * 0.3;
    }

    result.textContent = `Total Tax : ${totalTax}`
    form.reset();


})