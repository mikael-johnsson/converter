"use strict";
const massInputBox = document.getElementById('mass-input-box');
const massOutputBox = document.getElementById('mass-output-box');
const massConvertButton = document.getElementById('mass-convert-button');
/**
 * Checks the types of mass to convert from and to
 * and converts the input to grams
 * @param e event from the button click
 */
function checkTypes(e) {
    e.preventDefault();
    console.log("inside checkTypes");
    const fromType = document.getElementById('mass-from-select');
    const toType = document.getElementById('mass-to-select');
    const fromTypeValue = fromType.value;
    const toTypeValue = toType.value;
    let inputValue = massCheckForCommas(massInputBox.value);
    let gValue = 0;
    if (fromTypeValue == toTypeValue) {
        alert('Please select two different types');
    }
    else {
        switch (fromTypeValue) {
            case 'lbs':
                gValue = 453.592;
                break;
            case 'kilo':
                gValue = 1000;
                break;
            case 'grams':
                gValue = 1;
                break;
            case 'ounce':
                gValue = 28.3495;
                break;
            default: alert('Please select a valid type');
        }
        gValue = gValue * inputValue;
        calculateMass(gValue, toTypeValue);
    }
}
/**
 *
 * @param input the input value from the user
 * @returns value of the input with commas replaced by dots
 */
function massCheckForCommas(input) {
    const transformedInput = input.replace(',', '.');
    return parseFloat(transformedInput);
}
/**
 * Calculates the mass in the desired type and displays it
 * @param input the input value from the user
 * @param toType type of mass to convert to
 */
function calculateMass(input, toType) {
    switch (toType) {
        case 'lbs':
            massOutputBox.innerHTML = `${(input / 453.592).toFixed(2)} lbs`;
            break;
        case 'kilo':
            massOutputBox.innerHTML = `${(input / 1000).toFixed(2)} kilos`;
            break;
        case 'grams':
            massOutputBox.innerHTML = `${(input).toFixed(0)} grams`;
            break;
        case 'ounce':
            massOutputBox.innerHTML = `${(input / 28.3495).toFixed(2)} ounces`;
            break;
        default: alert('Please select a valid type');
    }
}
// Eventlistener for the convert button
massConvertButton === null || massConvertButton === void 0 ? void 0 : massConvertButton.addEventListener('click', checkTypes);
//# sourceMappingURL=mass.js.map