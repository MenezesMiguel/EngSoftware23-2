// Variables declaration
import axios from "axios";

const convertCurrencyLatest = async (from, to, amount) => {
  const response = await axios.get(`https://api.frankfurter.app/latest?amount=${amount}&from=${from}&to=${to}`);
  const result = response.data.rates[to];
  return result.toFixed(2);
};

const convertCurrencyHistorical = async (from, to, amount, date) => {
  const response = await axios.get(`https://api.frankfurter.app/${date}?amount=${amount}&from=${from}&to=${to}`);
  const result = response.data.rates[to];
  return result.toFixed(2);
};

const run = async () => {
  console.log('Currency Converter');
  const from = 'USD';
  const to = 'BRL';
  const amount = 10;
  const date = '2012-01-05';
  const convertedAmount = await convertCurrencyLatest(from, to, amount);
  const convertedAmountHistorical = await convertCurrencyHistorical(from, to, amount, date);
  console.log(`Now: ${amount} ${from} = ${convertedAmount} ${to}`);
  console.log(`In ${date}: ${amount} ${from} = ${convertedAmountHistorical} ${to}`);
};

run();
