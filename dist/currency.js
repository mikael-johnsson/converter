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
const usdURL = `https://v6.exchangerate-api.com/v6/d6fe1491c4dc718be3b3fffe/latest/USD`;
const eurURL = `https://v6.exchangerate-api.com/v6/d6fe1491c4dc718be3b3fffe/latest/EUR`;
const gbpURL = `https://v6.exchangerate-api.com/v6/d6fe1491c4dc718be3b3fffe/latest/GBP`;
const sekURL = `https://v6.exchangerate-api.com/v6/d6fe1491c4dc718be3b3fffe/latest/SEK`;
let usdRates = {
    USD: 0,
    EUR: 0,
    GBP: 0,
    SEK: 0,
};
let eurRates = {
    USD: 0,
    EUR: 0,
    GBP: 0,
    SEK: 0,
};
let gbpRates = {
    USD: 0,
    EUR: 0,
    GBP: 0,
    SEK: 0,
};
let sekRates = {
    USD: 0,
    EUR: 0,
    GBP: 0,
    SEK: 0,
};
function getExchangeRates(url, countryRates) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const response = yield fetch(url);
            const data = yield response.json();
            console.log("API request sent");
            countryRates.USD = data.conversion_rates.USD;
            countryRates.EUR = data.conversion_rates.EUR;
            countryRates.GBP = data.conversion_rates.GBP;
            countryRates.SEK = data.conversion_rates.SEK;
        }
        catch (error) {
            console.log('Error: ', error);
        }
        return countryRates;
    });
}
const currencyInputBox = document.getElementById('currency-input-box');
const currencyOutputBox = document.getElementById('currency-output-box');
const currencyConvertButton = document.getElementById('currency-convert-button');
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
                    if (usdCookies.USD == 0) {
                        newUsdRates = yield getExchangeRates(usdURL, usdRates);
                        setCookies(newUsdRates);
                        console.log("New USD rates: ", newUsdRates);
                    }
                    else {
                        newUsdRates = usdCookies;
                        console.log("USD rates from cookies: ", newUsdRates);
                    }
                    calculateUSD(currencyInputValue, toTypeValue, newUsdRates);
                    break;
                case "EUR" /* Currency.EUR */:
                    let newEurRates = yield getExchangeRates(eurURL, eurRates);
                    calculateEUR(currencyInputValue, toTypeValue, newEurRates);
                    break;
                case "GBP" /* Currency.GBP */:
                    let newGbpRates = yield getExchangeRates(gbpURL, gbpRates);
                    calculateGBP(currencyInputValue, toTypeValue, newGbpRates);
                    break;
                case "SEK" /* Currency.SEK */:
                    let newSekRates = yield getExchangeRates(sekURL, sekRates);
                    calculateSEK(currencyInputValue, toTypeValue, newSekRates);
                    break;
                default: alert('Please select a valid type');
            }
        }
    });
}
function currencyCheckForCommas(input) {
    const transformedInput = input.replace(',', '.');
    return parseFloat(transformedInput);
}
function calculateUSD(input, toType, rates) {
    switch (toType) {
        case "EUR" /* Currency.EUR */:
            currencyOutputBox.innerHTML = `${(input * rates.EUR).toFixed(2)} EUR`;
            break;
        case "GBP" /* Currency.GBP */:
            currencyOutputBox.innerHTML = `${(input * rates.GBP).toFixed(2)} GBP`;
            break;
        case "SEK" /* Currency.SEK */:
            currencyOutputBox.innerHTML = `${(input * rates.EUR).toFixed(2)} SEK`;
            break;
        default: alert('Please select a valid type');
    }
}
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
currencyConvertButton === null || currencyConvertButton === void 0 ? void 0 : currencyConvertButton.addEventListener('click', (e) => {
    e.preventDefault();
    convertCurrency();
});
function setCookies(rates) {
    // Set cookie to expire in 30 minutes
    let date = new Date();
    date.setTime(date.getTime() + (0.5 * 3600 * 1000));
    // Set cookie
    const stringObject = JSON.stringify(rates);
    document.cookie = `USDcurrency=${stringObject}; expires=${date.toUTCString()}; path=/`;
}
function checkCookies(currencyName) {
    const cDecoded = decodeURIComponent(document.cookie);
    const cArray = cDecoded.split("; ");
    let rates = {};
    cArray.forEach(cookie => {
        if (cookie.indexOf(currencyName) == 0) {
            const cookiePairs = cookie.split("=")[1];
            rates = JSON.parse(cookiePairs);
        }
        ;
    });
    return rates;
}
function deleteCookie(name) {
    document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
}
//# sourceMappingURL=currency.js.map