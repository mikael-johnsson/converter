"use strict";
const currencyInputBox = document.getElementById('currency-input-box');
const currencyOutputBox = document.getElementById('currency-output-box');
const currencyConvertButton = document.getElementById('currency-convert-button');
function convertCurrency() {
    const fromType = document.getElementById('currency-from-select');
    const toType = document.getElementById('currency-to-select');
    const fromTypeValue = fromType.value;
    const toTypeValue = toType.value;
    if (fromTypeValue == toTypeValue) {
        alert('Please select two different types');
    }
    else {
        switch (fromTypeValue) {
            case "USD" /* Currency.USD */:
                calculateUSD(parseFloat(currencyInputBox.value), toTypeValue);
                break;
            case "EUR" /* Currency.EUR */:
                break;
            case "GBP" /* Currency.GBP */:
                break;
            case "SEK" /* Currency.SEK */:
                break;
            default: console.log('Please select a valid type');
        }
    }
}
function calculateUSD(input, toType) {
    switch (toType) {
        case "EUR" /* Currency.EUR */:
            currencyOutputBox.innerHTML = `${(input * 0.85).toFixed(2)} EUR`;
            break;
        case "GBP" /* Currency.GBP */:
            currencyOutputBox.innerHTML = `${(input * 0.73).toFixed(2)} GBP`;
            break;
        case "SEK" /* Currency.SEK */:
            currencyOutputBox.innerHTML = `${(input * 8.61).toFixed(2)} SEK`;
            break;
        default: console.log('Please select a valid type');
    }
}
currencyConvertButton === null || currencyConvertButton === void 0 ? void 0 : currencyConvertButton.addEventListener('click', (e) => {
    e.preventDefault();
    convertCurrency();
});
//# sourceMappingURL=currency.js.map