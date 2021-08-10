//fetch() use to get data from the backend
//DOM Elements needed.
const currencyEl_one = document.getElementById('currency-one');
const amountEl_one = document.getElementById('amount-one');
const currencyEl_two = document.getElementById('currency-two');
const amountEl_two = document.getElementById('amount-two');

const rateEl = document.getElementById('rate');
const swap = document.getElementById('swap');


//fetch exchange rates and update the DOM
function calculate(){
    const currency_one =currencyEl_one.value;
    const currency_two =currencyEl_two.value;
    // console.log(currency_one,currency_two)

    fetch(`https://api.exchangerate-api.com/v4/latest/${currency_one}`)   //${currency_one} will make the fetch() dynamic. 
        .then(res => res.json())
        .then(data =>{
            // console.log(data);
            const rate = data.rates[currency_two];
            // console.log(rate);
            // rateEl.innerText=`1 ${currency_one} = ${rate} ${currency_two}`;

            amountEl_two.value = (amountEl_one.value * rate).toFixed(2);

        })

   
}
     //event listeners
     currencyEl_one.addEventListener('change',calculate);
     amountEl_one.addEventListener('input',calculate);
     currencyEl_two.addEventListener('change',calculate);
     amountEl_two.addEventListener('input',calculate);

     //LOGIC OF SWAPPING TWO NUMBERS
    swap.addEventListener('click',()=>{
        const temp = currencyEl_one.value;
        currencyEl_one.value = currencyEl_two.value;
        currencyEl_two.value=temp ;
        calculate();
    });

calculate();