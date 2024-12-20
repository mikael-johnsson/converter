"use strict";
const currencyInputBox = document.getElementById('currency-input-box');
const currencyOutputBox = document.getElementById('currency-output-box');
const currencyConvertButton = document.getElementById('currency-convert-button');
function convertCurrency() {
    const currencyInputValue = currencyCheckForCommas(currencyInputBox.value);
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
                calculateUSD(currencyInputValue, toTypeValue);
                break;
            case "EUR" /* Currency.EUR */:
                calculateEUR(currencyInputValue, toTypeValue);
                break;
            case "GBP" /* Currency.GBP */:
                calculateGBP(currencyInputValue, toTypeValue);
                break;
            case "SEK" /* Currency.SEK */:
                calculateSEK(currencyInputValue, toTypeValue);
                break;
            default: alert('Please select a valid type');
        }
    }
}
function currencyCheckForCommas(input) {
    const transformedInput = input.replace(',', '.');
    return parseFloat(transformedInput);
}
function calculateUSD(input, toType) {
    switch (toType) {
        case "EUR" /* Currency.EUR */:
            currencyOutputBox.innerHTML = `${(input * 0.96).toFixed(2)} EUR`;
            break;
        case "GBP" /* Currency.GBP */:
            currencyOutputBox.innerHTML = `${(input * 0.79).toFixed(2)} GBP`;
            break;
        case "SEK" /* Currency.SEK */:
            currencyOutputBox.innerHTML = `${(input * 11.01).toFixed(2)} SEK`;
            break;
        default: alert('Please select a valid type');
    }
}
function calculateEUR(input, toType) {
    switch (toType) {
        case "USD" /* Currency.USD */:
            currencyOutputBox.innerHTML = `${(input * 1.04).toFixed(2)} USD`;
            break;
        case "GBP" /* Currency.GBP */:
            currencyOutputBox.innerHTML = `${(input * 0.82).toFixed(2)} GBP`;
            break;
        case "SEK" /* Currency.SEK */:
            currencyOutputBox.innerHTML = `${(input * 11.46).toFixed(2)} SEK`;
            break;
        default: alert('Please select a valid type');
    }
}
function calculateGBP(input, toType) {
    switch (toType) {
        case "USD" /* Currency.USD */:
            currencyOutputBox.innerHTML = `${(input * 1.26).toFixed(2)} USD`;
            break;
        case "EUR" /* Currency.EUR */:
            currencyOutputBox.innerHTML = `${(input * 1.21).toFixed(2)} EUR`;
            break;
        case "SEK" /* Currency.SEK */:
            currencyOutputBox.innerHTML = `${(input * 13.89).toFixed(2)} SEK`;
            break;
        default: alert('Please select a valid type');
    }
}
function calculateSEK(input, toType) {
    switch (toType) {
        case "USD" /* Currency.USD */:
            currencyOutputBox.innerHTML = `${(input * 0.09).toFixed(2)} USD`;
            break;
        case "EUR" /* Currency.EUR */:
            currencyOutputBox.innerHTML = `${(input * 0.087).toFixed(2)} EUR`;
            break;
        case "GBP" /* Currency.GBP */:
            currencyOutputBox.innerHTML = `${(input * 0.072).toFixed(2)} GBP`;
            break;
        default: alert('Please select a valid type');
    }
}
currencyConvertButton === null || currencyConvertButton === void 0 ? void 0 : currencyConvertButton.addEventListener('click', (e) => {
    e.preventDefault();
    convertCurrency();
});
//# sourceMappingURL=currency.js.map