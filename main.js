function convertCurrency() {
    let shekelValue = document.getElementById('shekelValue').value;
    let currencySelect = document.getElementById('currencySelect').value;
    let result = document.getElementById('result');
    let convertedValue;

    if (isNaN(shekelValue) || shekelValue <= 0) {
        result.innerHTML = "Please enter a valid amount.";
       
    }

    switch (currencySelect) {
        case "3":
            convertedValue = shekelValue / 3;
            result.innerHTML = `${shekelValue} ILS = ${convertedValue} USD`;
            break;
        case "5":
            convertedValue = shekelValue / 5;
            result.innerHTML = `${shekelValue} ILS = ${convertedValue} JOD`;
            break;
        case "1":
            result.innerHTML = `${shekelValue} ILS = ${shekelValue} ILS`;
            break;
        default:
            result.innerHTML = "Please select a valid currency.";
    }
}
isNaN(22);//false
isNaN(`22`);//false
isNaN('hallo');//true
