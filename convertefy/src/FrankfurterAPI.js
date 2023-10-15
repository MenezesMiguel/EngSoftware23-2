import axios from "axios";

export const ConvertCurrencyLatest = async (from, to, amount) => {
  const response = await axios.get(`https://api.frankfurter.app/latest?amount=${amount}&from=${from}&to=${to}`);
  const result = response.data.rates[to];
  return result.toFixed(2);
};

const ConvertCurrencyHistorical = async (from, to, amount, date) => {
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

// const run = async () => {
//   const from = 'USD';
//   const to = 'BRL';
//   const amount = 10;
//   const date = '2012-01-05';

//   const {currencyCodes, currencyNames} = await GetAllCurrencies();
//   const convertedAmount = await ConvertCurrencyLatest(from, to, amount);
//   const convertedAmountHistorical = await ConvertCurrencyHistorical(from, to, amount, date);
  
//   for (let i = 0; i < currencyCodes.length; i++) {
//     const code = currencyCodes[i];
//     const name = currencyNames[i];
//     console.log(`${name} (${code})`);
//   }
//   console.log(`Now: ${amount} ${from} = ${convertedAmount} ${to}`);
//   console.log(`In ${date}: ${amount} ${from} = ${convertedAmountHistorical} ${to}`);
// };

// run();
