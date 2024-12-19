import { checkForCommas } from "./utils";

let inputBox = document.getElementById('mass-input-box') as HTMLInputElement;
const outputBox = document.getElementById('mass-output-box') as HTMLParagraphElement;
const convertButton = document.getElementById('mass-convert-button') as HTMLButtonElement;

function checkTypes(e: MouseEvent): void {
    e.preventDefault();
    const fromTarget = document.getElementById('mass-from-select') as HTMLSelectElement
    const toTarget = document.getElementById('mass-to-select') as HTMLSelectElement
    const fromType = fromTarget.value
    const toType = toTarget.value
    let inputValue: number = parseInt(inputBox.value)

    switch(fromType) {
        case 'lbs':
            switch(toType) {
                case 'kilo':
                    convertLbsToKg(inputValue, toType)
                    break;
                case 'grams':
                    convertLbsToGrams(inputValue, toType)
                    break;
                case 'ounce':
                    convertLbsToOunce(inputValue, toType)
                    break;
                default:
                    alert('Please select two different types');
                    break;
            }
            break;
        case 'kilo':
            switch(toType) {
                case 'lbs':
                    convertKgToLbs(inputValue, toType)
                    break;
                case 'ounce':
                    convertKgToOunce(inputValue, toType)
                    break;
                case 'grams':
                    convertKgToGrams(inputValue, toType)
                    break;
                default: alert('Please select two different types');
                    break;
            }
            break;
        case 'grams':
            switch(toType) {
                case 'lbs':
                    convertGramsToLbs(inputValue, toType)
                    break;
                case 'kilo':
                    convertGramsToKg(inputValue, toType)
                    break;
                case 'ounce':
                    convertGramsToOunce(inputValue, toType)
                    break;
                default: alert('Please select two different types');
                    break;
            }
            break;
        case 'ounce':
            switch(toType) {
                case 'lbs':
                    convertOunceToLbs(inputValue, toType)
                    break;
                case 'kilo':
                    convertOunceToKg(inputValue, toType)
                    break;
                case 'grams':
                    convertOunceToGrams(inputValue, toType)
                    break;
                default: alert('Please select two different types');
                break;
            }
            break;
        default:
            console.log('default')
    }
}



function convertLbsToKg(input: number, toType: string) {
    const convertedValue = (input * 0.453592).toFixed(2)
    const convertedNumberValue = parseFloat(convertedValue)
    displayConvertedValue(convertedNumberValue, toType)
}

function convertKgToLbs(input: number, toType: string) {
    const convertedValue = (input * 2.20462).toFixed(2)
    const convertedNumberValue = parseFloat(convertedValue)
    displayConvertedValue(convertedNumberValue, toType)
}

function convertLbsToGrams(input: number, toType: string) {
    const convertedValue = (input * 453.592).toFixed(0)
    const convertedNumberValue = parseFloat(convertedValue)
    displayConvertedValue(convertedNumberValue, toType)
}

function convertKgToGrams(input: number, toType: string) {
    const convertedValue = (input * 1000).toFixed(0)
    const convertedNumberValue = parseFloat(convertedValue)
    displayConvertedValue(convertedNumberValue, toType)
}

function convertOunceToLbs(input: number, toType: string) {
    const convertedValue = (input * 0.0625).toFixed(2)
    const convertedNumberValue = parseFloat(convertedValue)
    displayConvertedValue(convertedNumberValue, toType)
}

function convertOunceToKg(input: number, toType: string) {
    const convertedValue = (input * 0.0283495).toFixed(2)
    const convertedNumberValue = parseFloat(convertedValue)
    displayConvertedValue(convertedNumberValue, toType)
}

function convertOunceToGrams(input: number, toType: string) {
    const convertedValue = (input * 28.3495).toFixed(0)
    const convertedNumberValue = parseFloat(convertedValue)
    displayConvertedValue(convertedNumberValue, toType)
}

function convertLbsToOunce(input: number, toType: string){
    const convertedValue = (input * 16).toFixed(2)
    const convertedNumberValue = parseFloat(convertedValue)
    displayConvertedValue(convertedNumberValue, toType)
}

function convertKgToOunce(input: number, toType: string){
    const convertedValue = (input * 35.274).toFixed(2)
    const convertedNumberValue = parseFloat(convertedValue)
    displayConvertedValue(convertedNumberValue, toType)
}

function convertGramsToLbs(input: number, toType: string){
    const convertedValue = (input * 0.00220462).toFixed(4)
    const convertedNumberValue = parseFloat(convertedValue)
    displayConvertedValue(convertedNumberValue, toType)
}

function convertGramsToKg(input: number, toType: string){
    const convertedValue = (input * 0.001).toFixed(4)
    const convertedNumberValue = parseFloat(convertedValue)
    displayConvertedValue(convertedNumberValue, toType)
}

function convertGramsToOunce(input: number, toType: string){
    const convertedValue = (input * 0.035274).toFixed(2)
    const convertedNumberValue = parseFloat(convertedValue)
    displayConvertedValue(convertedNumberValue, toType)
}


function displayConvertedValue(value: number, toType: string) {
    if (outputBox) {
        outputBox.innerHTML = `${value} ${toType}`
    }
}

convertButton?.addEventListener('click', checkTypes)
