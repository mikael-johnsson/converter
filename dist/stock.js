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
// API Key Alpha Vantage CW6QA8BUMJHEPJSB
const IBMDataUrl = "https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=IBM&apikey=CW6QA8BUMJHEPJSB";
// Fetch data from IBM API - log the data for 25.01.08 as a test
function getIBMData() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const response = yield fetch(IBMDataUrl);
            const data = yield response.json();
        }
        catch (error) {
            console.error("Error fetching IBM data: ", error);
        }
    });
}
getIBMData();
//# sourceMappingURL=stock.js.map