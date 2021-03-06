const initialPrice = document.querySelector("#initial-price");
const stockQuantity = document.querySelector("#stocks-quantity");
const currentPrice = document.querySelector("#current-price");
const stockBtn = document.querySelector("#stock-btn");
const outputEl = document.querySelector("#outputEl");


function calculateProfitAndLoss(initial, quantity, current) {

    if (initial > current) {
        var loss = (initial-current) * quantity;
        var lossPercentage = ((loss/initial) * 100).toFixed(2);
        outputEl.innerText = `Hey, The loss is ${loss} and the percent is ${lossPercentage}%. 
        Tip: You should know when to get out before getting in!`;
        outputEl.style.color = "red";
    }
    else if (initial < current) {
        var profit = (current- initial) * quantity;
        var profitPercentage = ((profit/initial) * 100).toFixed(2);
        outputEl.innerText = `Hey, The profit is ${profit} and the percent is ${profitPercentage}%. 
        Tip : Profit booked > Profit in books!`;
        outputEl.style.color = "green";
    }
    else {
        outputEl.innerText = `You don't have any loss or profit. 
        Tip: If you are persistent you will get it. If you are consistent you will keep it!`
        outputEl.style.color = "black";
    }
}

function submitHandler() {
    var ip = Number(initialPrice.value);
    var qty = Number(stockQuantity.value);
    var curr = Number(currentPrice.value);

    if ( ip > 0 && qty > 0 && curr > 0) {
        calculateProfitAndLoss(ip,qty,curr);
    }
    else if ( ip < 0 || qty < 0 || curr < 0){
        outputEl.innerText = "Please enter positive values."
    }
    else {
        outputEl.innerText = "Please enter all three values."
    }
}

stockBtn.addEventListener("click",submitHandler);