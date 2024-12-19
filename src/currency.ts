const enum Currency {
    USD = 'USD',
    EUR = 'EUR',
    GBP = 'GBP',
    SEK = 'SEK',
}

const currencyInputBox = document.getElementById('currency-input-box') as HTMLInputElement;
const currencyOutputBox = document.getElementById('currency-output-box') as HTMLParagraphElement;
const currencyConvertButton = document.getElementById('currency-convert-button') as HTMLButtonElement;

function convertCurrency(): void {
    const currencyInputValue = currencyCheckForCommas(currencyInputBox.value);
    const fromType = document.getElementById('currency-from-select') as HTMLSelectElement;
    const toType = document.getElementById('currency-to-select') as HTMLSelectElement;
    const fromTypeValue = fromType.value as Currency;
    const toTypeValue = toType.value as Currency;
    
    if(fromTypeValue == toTypeValue) {
        alert('Please select two different types');
    } else {
        switch(fromTypeValue) {
            case Currency.USD:
                calculateUSD(currencyInputValue, toTypeValue);
                break;
            case Currency.EUR:
                calculateEUR(currencyInputValue, toTypeValue);
                break;
            case Currency.GBP:
                calculateGBP(currencyInputValue, toTypeValue);
                break;
            case Currency.SEK:
                calculateSEK(currencyInputValue, toTypeValue);
                break;
            default: alert('Please select a valid type');
        }
    }
}

function currencyCheckForCommas(input: string ): number {
    const transformedInput = input.replace(',', '.')
    return parseFloat(transformedInput)
}

function calculateUSD(input: number, toType: Currency): void {
    switch(toType) {
        case Currency.EUR:
            currencyOutputBox.innerHTML = `${(input * 0.85).toFixed(2)} EUR`
            break;
        case Currency.GBP:
            currencyOutputBox.innerHTML = `${(input * 0.73).toFixed(2)} GBP`
            break;
        case Currency.SEK:
            currencyOutputBox.innerHTML = `${(input * 8.61).toFixed(2)} SEK`
            break;
        default: alert('Please select a valid type');
    }

}

function calculateEUR(input: number, toType: Currency): void {
    switch(toType) {
        case Currency.USD:
            currencyOutputBox.innerHTML = `${(input * 1.18).toFixed(2)} USD`
            break;
        case Currency.GBP:
            currencyOutputBox.innerHTML = `${(input * 0.86).toFixed(2)} GBP`
            break;
        case Currency.SEK:
            currencyOutputBox.innerHTML = `${(input * 10.13).toFixed(2)} SEK`
            break;
        default: alert('Please select a valid type');
    }
}

function calculateGBP(input: number, toType: Currency): void {
    switch(toType) {
        case Currency.USD:
            currencyOutputBox.innerHTML = `${(input * 1.37).toFixed(2)} USD`
            break;
        case Currency.EUR:
            currencyOutputBox.innerHTML = `${(input * 1.17).toFixed(2)} EUR`
            break;
        case Currency.SEK:
            currencyOutputBox.innerHTML = `${(input * 11.77).toFixed(2)} SEK`
            break;
        default: alert('Please select a valid type');
    }
}

function calculateSEK(input: number, toType: Currency): void {
    switch(toType) {
        case Currency.USD:
            currencyOutputBox.innerHTML = `${(input * 0.12).toFixed(2)} USD`
            break;
        case Currency.EUR:
            currencyOutputBox.innerHTML = `${(input * 0.099).toFixed(2)} EUR`
            break;
        case Currency.GBP:
            currencyOutputBox.innerHTML = `${(input * 0.085).toFixed(2)} GBP`
            break;
        default: alert('Please select a valid type');  
    }
}

currencyConvertButton?.addEventListener('click', (e) => {
    e.preventDefault();
    convertCurrency();
})


