interface ExchangeRates {
    USD: number;
    EUR: number;
    GBP: number;
    SEK: number;
}

const usdURL = `https://v6.exchangerate-api.com/v6/d6fe1491c4dc718be3b3fffe/latest/USD`
const eurURL = `https://v6.exchangerate-api.com/v6/d6fe1491c4dc718be3b3fffe/latest/EUR`
const gbpURL = `https://v6.exchangerate-api.com/v6/d6fe1491c4dc718be3b3fffe/latest/GBP`
const sekURL = `https://v6.exchangerate-api.com/v6/d6fe1491c4dc718be3b3fffe/latest/SEK`

let usdRates: ExchangeRates = {
    USD: 0,
    EUR: 0,
    GBP: 0,
    SEK: 0,
}

let eurRates: ExchangeRates = {
    USD: 0,
    EUR: 0,
    GBP: 0,
    SEK: 0,
}

let gbpRates: ExchangeRates = {
    USD: 0,
    EUR: 0,
    GBP: 0,
    SEK: 0,
}

let sekRates: ExchangeRates = {
    USD: 0,
    EUR: 0,
    GBP: 0,
    SEK: 0,
}


async function getExchangeRates(url: string, countryRates: ExchangeRates): Promise<ExchangeRates> {
    try{
        const response = await fetch(url);
        const data = await response.json();
        countryRates.USD = data.conversion_rates.USD;
        countryRates.EUR = data.conversion_rates.EUR;
        countryRates.GBP = data.conversion_rates.GBP;
        countryRates.SEK = data.conversion_rates.SEK;
    } catch(error){
        console.log('Error: ', error);
    }
    return countryRates;
}


const enum Currency {
    USD = 'USD',
    EUR = 'EUR',
    GBP = 'GBP',
    SEK = 'SEK',
}

const currencyInputBox = document.getElementById('currency-input-box') as HTMLInputElement;
const currencyOutputBox = document.getElementById('currency-output-box') as HTMLParagraphElement;
const currencyConvertButton = document.getElementById('currency-convert-button') as HTMLButtonElement;

async function convertCurrency(): Promise<void> {
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
                let newUsdRates = await getExchangeRates(usdURL, usdRates);
                calculateUSD(currencyInputValue, toTypeValue, newUsdRates);
                break;
            case Currency.EUR:
                let newEurRates = await getExchangeRates(eurURL, eurRates);
                calculateEUR(currencyInputValue, toTypeValue, newEurRates);
                break;
            case Currency.GBP:
                let newGbpRates = await getExchangeRates(gbpURL, gbpRates);
                calculateGBP(currencyInputValue, toTypeValue, newGbpRates);
                break;
            case Currency.SEK:
                let newSekRates = await getExchangeRates(sekURL, sekRates);
                calculateSEK(currencyInputValue, toTypeValue, newSekRates);
                break;
            default: alert('Please select a valid type');
        }
    }
}

function currencyCheckForCommas(input: string ): number {
    const transformedInput = input.replace(',', '.')
    return parseFloat(transformedInput)
}

function calculateUSD(input: number, toType: Currency, rates: ExchangeRates): void {
    switch(toType) {
        case Currency.EUR:
            currencyOutputBox.innerHTML = `${(input * rates.EUR).toFixed(2)} EUR`
            break;
        case Currency.GBP:
            currencyOutputBox.innerHTML = `${(input * rates.GBP).toFixed(2)} GBP`
            break;
        case Currency.SEK:
            currencyOutputBox.innerHTML = `${(input * rates.EUR).toFixed(2)} SEK`
            break;
        default: alert('Please select a valid type');
    }

}

function calculateEUR(input: number, toType: Currency, rates: ExchangeRates): void {
    switch(toType) {
        case Currency.USD:
            currencyOutputBox.innerHTML = `${(input * rates.USD).toFixed(2)} USD`
            break;
        case Currency.GBP:
            currencyOutputBox.innerHTML = `${(input * rates.GBP).toFixed(2)} GBP`
            break;
        case Currency.SEK:
            currencyOutputBox.innerHTML = `${(input * rates.SEK).toFixed(2)} SEK`
            break;
        default: alert('Please select a valid type');
    }
}

function calculateGBP(input: number, toType: Currency, rates: ExchangeRates): void {
    switch(toType) {
        case Currency.USD:
            currencyOutputBox.innerHTML = `${(input * rates.USD).toFixed(2)} USD`
            break;
        case Currency.EUR:
            currencyOutputBox.innerHTML = `${(input * rates.EUR).toFixed(2)} EUR`
            break;
        case Currency.SEK:
            currencyOutputBox.innerHTML = `${(input * rates.SEK).toFixed(2)} SEK`
            break;
        default: alert('Please select a valid type');
    }
}

function calculateSEK(input: number, toType: Currency, rates: ExchangeRates): void {
    switch(toType) {
        case Currency.USD:
            currencyOutputBox.innerHTML = `${(input * rates.USD).toFixed(2)} USD`
            break;
        case Currency.EUR:
            currencyOutputBox.innerHTML = `${(input * rates.EUR).toFixed(2)} EUR`
            break;
        case Currency.GBP:
            currencyOutputBox.innerHTML = `${(input * rates.GBP).toFixed(2)} GBP`
            break;
        default: alert('Please select a valid type');  
    }
}

currencyConvertButton?.addEventListener('click', (e) => {
    e.preventDefault();
    convertCurrency();
})


