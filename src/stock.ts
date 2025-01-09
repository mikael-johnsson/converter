// API Key Alpha Vantage CW6QA8BUMJHEPJSB
const IBMDataUrl = "https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=IBM&apikey=CW6QA8BUMJHEPJSB";


// Fetch data from IBM API - log the data for 25.01.08 as a test
async function getIBMData() {
    try {
        const response = await fetch(IBMDataUrl);
        const data = await response.json();
        console.log("IBM data 25.01.08: ", data["Time Series (Daily)"]["2025-01-08"]);
    } catch (error) {
        console.error("Error fetching IBM data: ", error);
    }
    
}

getIBMData()