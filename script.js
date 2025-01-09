document.getElementById('convert-btn').addEventListener('click', convertCurrency);

function convertCurrency() {
    const amount = document.getElementById('amount').value;
    const fromCurrency = document.getElementById('from-currency').value;
    const toCurrency = document.getElementById('to-currency').value;

    if (amount === "") {
        alert("Please enter an amount to convert.");
        return;
    }

    const apiKey = "534fe87edd629bfb82fd6c2c";
    const url = `https://v6.exchangerate-api.com/v6/${apiKey}/latest/${fromCurrency}`;

    // Fetch the exchange rates from the API
    fetch(url)
        .then(response => response.json())
        .then(data => {
            const exchangeRate = data.conversion_rates[toCurrency];
            const convertedAmount = (amount * exchangeRate).toFixed(2);
            document.getElementById('result').textContent = convertedAmount;
        })
        .catch(error => {
            console.error("Error fetching exchange rates:", error);
            alert("Something went wrong. Please try again later.");
        });
}
