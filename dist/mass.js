"use strict";
let inputBox = document.getElementById('mass-input-box');
const outputBox = document.getElementById('mass-output-box');
const convertButton = document.getElementById('mass-convert-button');
function checkTypes(e) {
    e.preventDefault();
    const fromTarget = document.getElementById('mass-from-select');
    const toTarget = document.getElementById('mass-to-select');
    const fromType = fromTarget.value;
    const toType = toTarget.value;
    let inputValue = massCheckForCommas(inputBox.value);
    switch (fromType) {
        case 'lbs':
            switch (toType) {
                case 'kilo':
                    convertLbsToKg(inputValue, toType);
                    break;
                case 'grams':
                    convertLbsToGrams(inputValue, toType);
                    break;
                case 'ounce':
                    convertLbsToOunce(inputValue, toType);
                    break;
                default:
                    alert('Please select two different types');
                    break;
            }
            break;
        case 'kilo':
            switch (toType) {
                case 'lbs':
                    convertKgToLbs(inputValue, toType);
                    break;
                case 'ounce':
                    convertKgToOunce(inputValue, toType);
                    break;
                case 'grams':
                    convertKgToGrams(inputValue, toType);
                    break;
                default:
                    alert('Please select two different types');
                    break;
            }
            break;
        case 'grams':
            switch (toType) {
                case 'lbs':
                    convertGramsToLbs(inputValue, toType);
                    break;
                case 'kilo':
                    convertGramsToKg(inputValue, toType);
                    break;
                case 'ounce':
                    convertGramsToOunce(inputValue, toType);
                    break;
                default:
                    alert('Please select two different types');
                    break;
            }
            break;
        case 'ounce':
            switch (toType) {
                case 'lbs':
                    convertOunceToLbs(inputValue, toType);
                    break;
                case 'kilo':
                    convertOunceToKg(inputValue, toType);
                    break;
                case 'grams':
                    convertOunceToGrams(inputValue, toType);
                    break;
                default:
                    alert('Please select two different types');
                    break;
            }
            break;
        default:
            alert('Please select a valid type');
    }
}
function massCheckForCommas(input) {
    const transformedInput = input.replace(',', '.');
    return parseFloat(transformedInput);
}
function convertLbsToKg(input, toType) {
    const convertedValue = (input * 0.453592).toFixed(2);
    const convertedNumberValue = parseFloat(convertedValue);
    displayConvertedValue(convertedNumberValue, toType);
}
function convertKgToLbs(input, toType) {
    const convertedValue = (input * 2.20462).toFixed(2);
    const convertedNumberValue = parseFloat(convertedValue);
    displayConvertedValue(convertedNumberValue, toType);
}
function convertLbsToGrams(input, toType) {
    const convertedValue = (input * 453.592).toFixed(0);
    const convertedNumberValue = parseFloat(convertedValue);
    displayConvertedValue(convertedNumberValue, toType);
}
function convertKgToGrams(input, toType) {
    const convertedValue = (input * 1000).toFixed(0);
    const convertedNumberValue = parseFloat(convertedValue);
    displayConvertedValue(convertedNumberValue, toType);
}
function convertOunceToLbs(input, toType) {
    const convertedValue = (input * 0.0625).toFixed(2);
    const convertedNumberValue = parseFloat(convertedValue);
    displayConvertedValue(convertedNumberValue, toType);
}
function convertOunceToKg(input, toType) {
    const convertedValue = (input * 0.0283495).toFixed(2);
    const convertedNumberValue = parseFloat(convertedValue);
    displayConvertedValue(convertedNumberValue, toType);
}
function convertOunceToGrams(input, toType) {
    const convertedValue = (input * 28.3495).toFixed(0);
    const convertedNumberValue = parseFloat(convertedValue);
    displayConvertedValue(convertedNumberValue, toType);
}
function convertLbsToOunce(input, toType) {
    const convertedValue = (input * 16).toFixed(2);
    const convertedNumberValue = parseFloat(convertedValue);
    displayConvertedValue(convertedNumberValue, toType);
}
function convertKgToOunce(input, toType) {
    const convertedValue = (input * 35.274).toFixed(2);
    const convertedNumberValue = parseFloat(convertedValue);
    displayConvertedValue(convertedNumberValue, toType);
}
function convertGramsToLbs(input, toType) {
    const convertedValue = (input * 0.00220462).toFixed(4);
    const convertedNumberValue = parseFloat(convertedValue);
    displayConvertedValue(convertedNumberValue, toType);
}
function convertGramsToKg(input, toType) {
    const convertedValue = (input * 0.001).toFixed(4);
    const convertedNumberValue = parseFloat(convertedValue);
    displayConvertedValue(convertedNumberValue, toType);
}
function convertGramsToOunce(input, toType) {
    const convertedValue = (input * 0.035274).toFixed(2);
    const convertedNumberValue = parseFloat(convertedValue);
    displayConvertedValue(convertedNumberValue, toType);
}
function displayConvertedValue(value, toType) {
    if (outputBox) {
        outputBox.innerHTML = `${value} ${toType}`;
    }
}
convertButton === null || convertButton === void 0 ? void 0 : convertButton.addEventListener('click', checkTypes);
//# sourceMappingURL=mass.js.map