import axios from "axios";

export const ConvertCurrencyLatest = async (from, to, amount) => {
  const response = await axios.get(`https://api.frankfurter.app/latest?amount=${amount}&from=${from}&to=${to}`);
  const result = response.data.rates[to];
  return result.toFixed(2);
};

export const ConvertCurrencyHistorical = async (from, to, amount, date) => {
  const response = await axios.get(`https://api.frankfurter.app/${date}?amount=${amount}&from=${from}&to=${to}`);
  const result = response.data.rates[to];
  return result.toFixed(2);
};

export const GetAllCurrencies = async () => {
  const response = await axios.get(`https://api.frankfurter.app/currencies`);
  const currencyCodes = Object.keys(response.data);
  const currencyNames = Object.values(response.data);
  return {currencyCodes, currencyNames};
};

export const GetHistory = async (from, to) => {
  const response = await axios.get(`https://api.frankfurter.app/2022-10-15..?from=${from}&to=${to}`);
  const datePoints = Object.keys(response.data.rates);
  const exchangeRates = datePoints.map(datePoints => response.data.rates[datePoints][to]);

  return {datePoints, exchangeRates};
};

// const run = async () => {
//   const from = 'USD';
//   const to = 'AUD';

//   const {datePoints, exchangeRates} = await GetHistory(from,to);

//   for (let i = 0; i < datePoints.length; i++) {
//     console.log(`value: ${datePoints[i]}`);
//     console.log(`date: ${exchangeRates[1]}`)
//   }

// };

// run();
