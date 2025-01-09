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

const enum Currency {
    USD = 'USD',
    EUR = 'EUR',
    GBP = 'GBP',
    SEK = 'SEK',
}

// Currency converter elements
const currencyInputBox = document.getElementById('currency-input-box') as HTMLInputElement;
const currencyOutputBox = document.getElementById('currency-output-box') as HTMLParagraphElement;
const currencyConvertButton = document.getElementById('currency-convert-button') as HTMLButtonElement;

/**
 * 
 * @param url url to fetch exchange rates from ExchangeRate-api
 * @param countryRates ExchangeRates interface to store the fetched rates
 * @returns ExchangeRates object with the fetched rates
 */
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

/**
 * Function that: 
 * Checks currency to convert from
 * Changes commas to dots in input
 * Checks if up to date rates are stored in cookies
 * sets new rates in cookies if empty
 * Calls the correct conversion function based on the currency to convert from
 */
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
                let newUsdRates;
                let usdCookies = checkCookies("USDcurrency");
                if(isRatesEmpty(usdCookies)) {
                    newUsdRates = await getExchangeRates(usdURL, usdRates);
                    setCookies(newUsdRates, "USDcurrency");
                } else {
                    newUsdRates = usdCookies;
                }
                calculateUSD(currencyInputValue, toTypeValue, newUsdRates);
                break;
            case Currency.EUR:
                let newEurRates;
                let eurCookies = checkCookies("EURcurrency");
                if(isRatesEmpty(eurCookies)) {
                    newEurRates = await getExchangeRates(eurURL, eurRates);
                    setCookies(newEurRates, "EURcurrency");
                } else {
                    newEurRates = eurCookies;                }
                calculateEUR(currencyInputValue, toTypeValue, newEurRates);
                break;
            case Currency.GBP:
                let newGbpRates;
                let gbpCookies = checkCookies("GBPcurrency");
                if(isRatesEmpty(gbpCookies)) {
                    newGbpRates = await getExchangeRates(gbpURL, gbpRates);
                    setCookies(newGbpRates, "GBPcurrency");
                } else {
                    newGbpRates = gbpCookies;
                }
                calculateGBP(currencyInputValue, toTypeValue, newGbpRates);
                break;
            case Currency.SEK:
                let newSekRates;
                let sekCookies = checkCookies("SEKcurrency");
                if(isRatesEmpty(sekCookies)) {
                    newSekRates = await getExchangeRates(sekURL, sekRates);
                    setCookies(newSekRates, "SEKcurrency");
                } else {
                    newSekRates = sekCookies;
                }
                calculateSEK(currencyInputValue, toTypeValue, newSekRates);
                break;
            default: alert('Please select a valid type');
        }
    }
}


/**
 * 
 * @param input string to check for commas and replace them with dots
 * @returns a number with commas replaced by dots
 */
function currencyCheckForCommas(input: string ): number {
    const transformedInput = input.replace(',', '.')
    return parseFloat(transformedInput)
}


/**
 * Calculates the conversion from USD to the selected currency
 * @param input value to convert
 * @param toType currency to convert to
 * @param rates fetched rate to convert with
 */
function calculateUSD(input: number, toType: Currency, rates: ExchangeRates): void {
    switch(toType) {
        case Currency.EUR:
            currencyOutputBox.innerHTML = `${(input * rates.EUR).toFixed(2)} EUR`
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


/**
 * Calculates the conversion from EUR to the selected currency
 * @param input value to convert
 * @param toType currency to convert to
 * @param rates fetched rate to convert with
 */
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


/**
 * Calculates the conversion from GBP to the selected currency
 * @param input value to convert
 * @param toType currency to convert to
 * @param rates fetched rate to convert with
 */
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


/**
 * Calculates the conversion from SEK to the selected currency
 * @param input value to convert
 * @param toType currency to convert to
 * @param rates fetched rate to convert with
 */
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

// Event listener for the currency convert button
currencyConvertButton?.addEventListener('click', (e) => {
    e.preventDefault();
    convertCurrency();
})


/**
 * Sets each currencies conversion rates in cookies
 * @param rates rates to store in cookies
 * @param name name of currency to store in cookie
 */
function setCookies(rates: ExchangeRates, name: string): void {
    // Set cookie to expire in 30 minutes
    let date = new Date();
    date.setTime(date.getTime() + (0.5 * 3600 * 1000));
    // Set cookie
    const stringObject = JSON.stringify(rates);
    document.cookie = `${name}=${stringObject}; expires=${date.toUTCString()}; path=/`;
}


/**
 * 
 * @param currencyName name of currency to check for in cookies
 * @returns ExchangeRates object with the rates stored in cookies
 * or an object with all rates set to 0 if no cookie is found
 */
function checkCookies(currencyName: string): ExchangeRates {
    const cDecoded = decodeURIComponent(document.cookie);
    const cArray = cDecoded.split("; ")
    let rates = {
        USD: 0,
        EUR: 0,
        GBP: 0,
        SEK: 0,
    } as ExchangeRates;
    cArray.forEach(cookie => {
        if(cookie.indexOf(currencyName) == 0){
            const cookiePairs = cookie.split("=")[1];
            rates = JSON.parse(cookiePairs);
        };
    });
    return rates;
}

/**
 * 
 * @param rates ExchangeRates object to check if all rates are 0
 * @returns True if all rates are 0, false if any rate is not 0
 */
function isRatesEmpty(rates: ExchangeRates): boolean {
    if(rates.USD == 0 && rates.EUR == 0 && rates.GBP == 0 && rates.SEK == 0){
        return true;
    }
    return false;
}

