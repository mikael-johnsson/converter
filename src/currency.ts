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
    const fromType = document.getElementById('currency-from-select') as HTMLSelectElement;
    const toType = document.getElementById('currency-to-select') as HTMLSelectElement;
    const fromTypeValue = fromType.value as Currency;
    const toTypeValue = toType.value as Currency;
    
    if(fromTypeValue == toTypeValue) {
        alert('Please select two different types');
    } else {
        switch(fromTypeValue) {
            case Currency.USD:
                calculateUSD(parseFloat(currencyInputBox.value), toTypeValue);
                break;
            case Currency.EUR:
                break;
            case Currency.GBP:
                break;
            case Currency.SEK:
                break;
            default: console.log('Please select a valid type');
        }
    }
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
        default: console.log('Please select a valid type');
    }

}

currencyConvertButton?.addEventListener('click', (e) => {
    e.preventDefault();
    convertCurrency();
})


