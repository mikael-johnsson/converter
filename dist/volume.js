"use strict";
const volumeOutputBox = document.getElementById('volume-output-box');
const volumeInputBox = document.getElementById('volume-input-box');
const volumeConvertButton = document.getElementById('volume-convert-button');
function transformInput() {
    const inputValue = checkForCommas(volumeInputBox.value);
    const fromType = document.getElementById('volume-from-select');
    const toType = document.getElementById('volume-to-select');
    const fromTypeValue = fromType.value;
    const toTypeValue = toType.value;
    let mlValue = 0;
    if (fromTypeValue == toTypeValue) {
        alert('Please select two different types');
    }
    else {
        switch (fromTypeValue) {
            case 'gallon':
                mlValue = 3785;
                break;
            case 'liter':
                mlValue = 1000;
                break;
            case 'deciliter':
                mlValue = 100;
                break;
            case 'cup':
                mlValue = 237;
                break;
            default: console.log('Please select a valid type');
        }
        mlValue = mlValue * inputValue;
        calculateVolume(mlValue, toTypeValue);
    }
}
function calculateVolume(mlInput, toType) {
    switch (toType) {
        case 'gallon':
            volumeOutputBox.innerHTML = `${(mlInput / 3785).toFixed(2)} gallons`;
            break;
        case 'liter':
            volumeOutputBox.innerHTML = `${(mlInput / 1000).toFixed(2)} liters`;
            break;
        case 'deciliter':
            volumeOutputBox.innerHTML = `${(mlInput / 100).toFixed(2)} deciliters`;
            break;
        case 'cup':
            volumeOutputBox.innerHTML = `${(mlInput / 237).toFixed(2)} cups`;
            break;
        default: console.log('Please select a valid type');
    }
}
function checkForCommas(input) {
    const transformedInput = input.replace(',', '.');
    return parseFloat(transformedInput);
}
volumeConvertButton === null || volumeConvertButton === void 0 ? void 0 : volumeConvertButton.addEventListener('click', (e) => {
    e.preventDefault();
    transformInput();
});
//# sourceMappingURL=volume.js.map