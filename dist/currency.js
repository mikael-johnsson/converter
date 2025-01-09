"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const usdURL = `https://v6.exchangerate-api.com/v6/d6fe1491c4dc718be3b3fffe/latest/U`;
const eurURL = `https://v6.exchangerate-api.com/v6/d6fe1491c4dc718be3b3fffe/latest/EUR`;
const gbpURL = `https://v6.exchangerate-api.com/v6/d6fe1491c4dc718be3b3fffe/latest/GBP`;
const sekURL = `https://v6.exchangerate-api.com/v6/d6fe1491c4dc718be3b3fffe/latest/SEK`;
let usdRates = {
    USD: 2,
    EUR: 0.9696,
    GBP: 0.8084,
    SEK: 11.1599,
};
let eurRates = {
    USD: 1.0314,
    EUR: 1,
    GBP: 0.8339,
    SEK: 11.5062,
};
let gbpRates = {
    USD: 1.237,
    EUR: 1.1992,
    GBP: 1,
    SEK: 13.793,
};
let sekRates = {
    USD: 0.08961,
    EUR: 0.08691,
    GBP: 0.0725,
    SEK: 1,
};
// Currency converter elements
const currencyInputBox = document.getElementById('currency-input-box');
const currencyOutputBox = document.getElementById('currency-output-box');
const currencyConvertButton = document.getElementById('currency-convert-button');
/**
 *
 * @param url url to fetch exchange rates from ExchangeRate-api
 * @param countryRates ExchangeRates interface to store the fetched rates
 * @returns ExchangeRates object with the fetched rates
 */
function getExchangeRates(url, countryRates, country) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const response = yield fetch(url);
            const data = yield response.json();
            countryRates.USD = data.conversion_rates.USD;
            countryRates.EUR = data.conversion_rates.EUR;
            countryRates.GBP = data.conversion_rates.GBP;
            countryRates.SEK = data.conversion_rates.SEK;
        }
        catch (error) {
            console.log('Error in fetching values from API: ', error);
            switch (country) {
                case "USD":
                    countryRates = usdRates;
                    break;
                case "EUR":
                    countryRates = eurRates;
                    break;
                case "GBP":
                    countryRates = gbpRates;
                    break;
                case "SEK":
                    countryRates = sekRates;
                    break;
            }
        }
        console.log('Rates fetched: ', countryRates);
        return countryRates;
    });
}
/**
 * Function that:
 * Checks currency to convert from
 * Changes commas to dots in input
 * Checks if up to date rates are stored in cookies
 * sets new rates in cookies if empty
 * Calls the correct conversion function based on the currency to convert from
 */
function convertCurrency() {
    return __awaiter(this, void 0, void 0, function* () {
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
                    let newUsdRates;
                    let usdCookies = checkCookies("USDcurrency");
                    if (isRatesEmpty(usdCookies)) {
                        newUsdRates = yield getExchangeRates(usdURL, usdRates, "USD");
                        setCookies(newUsdRates, "USDcurrency");
                    }
                    else {
                        newUsdRates = usdCookies;
                    }
                    console.log(newUsdRates);
                    calculateUSD(currencyInputValue, toTypeValue, newUsdRates);
                    break;
                case "EUR" /* Currency.EUR */:
                    let newEurRates;
                    let eurCookies = checkCookies("EURcurrency");
                    if (isRatesEmpty(eurCookies)) {
                        newEurRates = yield getExchangeRates(eurURL, eurRates, "EUR");
                        setCookies(newEurRates, "EURcurrency");
                    }
                    else {
                        newEurRates = eurCookies;
                    }
                    console.log(newEurRates);
                    calculateEUR(currencyInputValue, toTypeValue, newEurRates);
                    break;
                case "GBP" /* Currency.GBP */:
                    let newGbpRates;
                    let gbpCookies = checkCookies("GBPcurrency");
                    if (isRatesEmpty(gbpCookies)) {
                        newGbpRates = yield getExchangeRates(gbpURL, gbpRates, "GBP");
                        setCookies(newGbpRates, "GBPcurrency");
                    }
                    else {
                        newGbpRates = gbpCookies;
                    }
                    console.log(newGbpRates);
                    calculateGBP(currencyInputValue, toTypeValue, newGbpRates);
                    break;
                case "SEK" /* Currency.SEK */:
                    let newSekRates;
                    let sekCookies = checkCookies("SEKcurrency");
                    if (isRatesEmpty(sekCookies)) {
                        newSekRates = yield getExchangeRates(sekURL, sekRates, "SEK");
                        setCookies(newSekRates, "SEKcurrency");
                    }
                    else {
                        newSekRates = sekCookies;
                    }
                    console.log(newSekRates);
                    calculateSEK(currencyInputValue, toTypeValue, newSekRates);
                    break;
                default: alert('Please select a valid type');
            }
        }
    });
}
/**
 *
 * @param input string to check for commas and replace them with dots
 * @returns a number with commas replaced by dots
 */
function currencyCheckForCommas(input) {
    const transformedInput = input.replace(',', '.');
    return parseFloat(transformedInput);
}
/**
 * Calculates the conversion from USD to the selected currency
 * @param input value to convert
 * @param toType currency to convert to
 * @param rates fetched rate to convert with
 */
function calculateUSD(input, toType, rates) {
    switch (toType) {
        case "EUR" /* Currency.EUR */:
            currencyOutputBox.innerHTML = `${(input * rates.EUR).toFixed(2)} EUR`;
            break;
        case "GBP" /* Currency.GBP */:
            currencyOutputBox.innerHTML = `${(input * rates.GBP).toFixed(2)} GBP`;
            break;
        case "SEK" /* Currency.SEK */:
            currencyOutputBox.innerHTML = `${(input * rates.SEK).toFixed(2)} SEK`;
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
function calculateEUR(input, toType, rates) {
    switch (toType) {
        case "USD" /* Currency.USD */:
            currencyOutputBox.innerHTML = `${(input * rates.USD).toFixed(2)} USD`;
            break;
        case "GBP" /* Currency.GBP */:
            currencyOutputBox.innerHTML = `${(input * rates.GBP).toFixed(2)} GBP`;
            break;
        case "SEK" /* Currency.SEK */:
            currencyOutputBox.innerHTML = `${(input * rates.SEK).toFixed(2)} SEK`;
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
function calculateGBP(input, toType, rates) {
    switch (toType) {
        case "USD" /* Currency.USD */:
            currencyOutputBox.innerHTML = `${(input * rates.USD).toFixed(2)} USD`;
            break;
        case "EUR" /* Currency.EUR */:
            currencyOutputBox.innerHTML = `${(input * rates.EUR).toFixed(2)} EUR`;
            break;
        case "SEK" /* Currency.SEK */:
            currencyOutputBox.innerHTML = `${(input * rates.SEK).toFixed(2)} SEK`;
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
function calculateSEK(input, toType, rates) {
    switch (toType) {
        case "USD" /* Currency.USD */:
            currencyOutputBox.innerHTML = `${(input * rates.USD).toFixed(2)} USD`;
            break;
        case "EUR" /* Currency.EUR */:
            currencyOutputBox.innerHTML = `${(input * rates.EUR).toFixed(2)} EUR`;
            break;
        case "GBP" /* Currency.GBP */:
            currencyOutputBox.innerHTML = `${(input * rates.GBP).toFixed(2)} GBP`;
            break;
        default: alert('Please select a valid type');
    }
}
// Event listener for the currency convert button
currencyConvertButton === null || currencyConvertButton === void 0 ? void 0 : currencyConvertButton.addEventListener('click', (e) => {
    e.preventDefault();
    convertCurrency();
});
/**
 * Sets each currencies conversion rates in cookies
 * @param rates rates to store in cookies
 * @param name name of currency to store in cookie
 */
function setCookies(rates, name) {
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
function checkCookies(currencyName) {
    const cDecoded = decodeURIComponent(document.cookie);
    const cArray = cDecoded.split("; ");
    let rates = {
        USD: 0,
        EUR: 0,
        GBP: 0,
        SEK: 0,
    };
    cArray.forEach(cookie => {
        if (cookie.indexOf(currencyName) == 0) {
            const cookiePairs = cookie.split("=")[1];
            rates = JSON.parse(cookiePairs);
        }
        ;
    });
    return rates;
}
/**
 *
 * @param rates ExchangeRates object to check if all rates are 0
 * @returns True if all rates are 0, false if any rate is not 0
 */
function isRatesEmpty(rates) {
    if (rates.USD == 0 && rates.EUR == 0 && rates.GBP == 0 && rates.SEK == 0) {
        return true;
    }
    return false;
}
//# sourceMappingURL=currency.js.map