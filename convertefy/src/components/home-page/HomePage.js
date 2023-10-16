import React, { useEffect, useState } from "react";
import axios from "axios";
import Dropdown from "react-dropdown";
import { HiSwitchHorizontal } from "react-icons/hi";
import "react-dropdown/style.css";
import HistoricoConversoes from "../history/historyPage";
import "./HomePage.css";

import { ConvertCurrencyLatest, GetAllCurrencies, GetHistory} from '../../FrankfurterAPI.js';
import { Chart } from 'chart.js/auto';

function HomePage() {
  const [info, setInfo] = useState({});
  const [currencyNames, setCurrencyNames] = useState({});
  const [graphsPoints, setGraphsPoints] = useState({});
  const [input, setInput] = useState(1);
  const [from, setFrom] = useState({value:"USD",  label: "USD - United States Dollars"});
  const [to, setTo] = useState({value:"BRL",  label: "BRL - Brazilian Real"});
  const [options, setOptions] = useState([]);
  const [output, setOutput] = useState(0);
  const [savedConversions, setSavedConversions] = useState([]);
  const [lastUpdateTime, setLastUpdateTime] = useState(null);
  const [searchFrom, setSearchFrom] = useState(""); // Estado para pesquisa "De"
  const [searchTo, setSearchTo] = useState(""); // Estado para pesquisa "Para"

  useEffect(() => {
    GetAllCurrencies().then((res) => {
      setInfo(res.currencyCodes);
      setCurrencyNames(res.currencyNames);
      setLastUpdateTime(new Date());
    });
  }, [from]);

  useEffect(() => {
    const currencyOptions = Object.keys(info).map((code) => ({
      value: `${info[code]}`,
      label: `${info[code]} - ${currencyNames[code]}`
    }));

    setOptions(currencyOptions);
    convert();
  }, [info, input, to, currencyNames]);


  useEffect(() => {
    const savedConversionsStr = localStorage.getItem("savedConversions");
    if (savedConversionsStr) {
      const savedConversionsArray = JSON.parse(savedConversionsStr);
      setSavedConversions(savedConversionsArray);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("savedConversions", JSON.stringify(savedConversions));
  }, [savedConversions]);

  function convert() {
      ConvertCurrencyLatest(from.value, to.value, input).then((res) => {
      setOutput(1 * res);
    })
    .catch((error) => {
      console.error('Error:', error);
    });
    setInput("1");
  }

  function flip() {
    var temp = from;
    setFrom(to);
    setTo(temp);
  }

  function saveConversion(conversion) {
    const savedConversion = `${input} ${from} = ${output.toFixed(2)} ${to}`;
    // conversion.from = from;
    // conversion.to = to;
    // conversion.input = input;
    // console.log(conversion);
    setSavedConversions([...savedConversions, savedConversion]);
  }

  function handleFromChange(selected) {
    setFrom(selected);
  }

  function handleToChange(selected) {
    setTo(selected);
  }

  function filterFromCurrencies() {
    const formattedOptions = Object.keys(info).map((option) => ({
      value: `${info[option]}`,
      label: `${info[option]} - ${currencyNames[option]}`
    }));
  
    const filteredFromOptions = formattedOptions.filter((option) =>
      option.label.toLowerCase().includes(searchFrom.toLowerCase())
    );
  
    setOptions(filteredFromOptions);
  }
  
  function filterToCurrencies() {
    const formattedOptions = Object.keys(info).map((option) => ({
      value: `${info[option]}`,
      label: `${info[option]} - ${currencyNames[option]}`
    }));
  
    const filteredToOptions = formattedOptions.filter((option) =>
      option.label.toLowerCase().includes(searchTo.toLowerCase())
    );
  
    setOptions(filteredToOptions);
  }
  
  useEffect(() => {
    const ctx = document.getElementById('myChart').getContext('2d');

    GetHistory(from.value, to.value).then((res) => {
      setGraphsPoints(res);
    });

    console.log(`date: ${graphsPoints.datePoints[1]}`)
    console.log(`date: ${graphsPoints.datePoints[1]}`)

  
    let myChart = new Chart(ctx, {
      type: 'line',
      data: {
        labels: graphsPoints.datePoints,
        datasets: [{
          label: '# of Votes',
          data: graphsPoints.exchangeRates,
          backgroundColor: 'rgba(75, 192, 192, 0.2)',
          borderColor: 'rgba(75, 192, 192, 1)',
          borderWidth: 2
        }]
      },
      options: {
        scales: {
          y: {
            beginAtZero: false
          }
        }
      }
    });
    return () => {
      myChart.destroy();
    };
  }, []);
  

  return (
    <div className="App">
      <p>Conversor de Moedas Online</p>
      <div className="container">
        <div className="left">
          <h3>Valor a ser convertido</h3>
          <input
            type="text"
            placeholder="Coloque o valor"
            onChange={(e) => setInput(e.target.value)}
          />
        </div>
        <div className="middle">
          <h3>De</h3>
          <div className="currency-input">
            <input
              type="text"
              placeholder="Escolha uma moeda"
              value={searchFrom}
              onChange={(e) => setSearchFrom(e.target.value)}
            />
            <button onClick={filterFromCurrencies}>Filtrar</button>
          </div>
          <Dropdown
            options={options}
            onChange={handleFromChange}
            value={from}
            placeholder="From"
          />
        </div>
        <div className="switch">
          <HiSwitchHorizontal
            size="30px"
            onClick={() => {
              flip();
            }}
          />
        </div>
        <div className="right">
          <h3>Para</h3>
          <div className="currency-input">
            <input
              type="text"
              placeholder="Escolha uma moeda"
              value={searchTo}
              onChange={(e) => setSearchTo(e.target.value)}
            />
            <button onClick={filterToCurrencies}>Filtrar</button>
          </div>
          <Dropdown
            options={options}
            onChange={handleToChange}
            value={to}
            placeholder="To"
          />
        </div>
      </div>
      <div className="result">
        <h2>Valor convertido</h2>
        <p>{input + " " + from.value + " = " + output.toFixed(2) + " " + to.value}</p>
        {lastUpdateTime && (
            <p>Data da última conversão: {lastUpdateTime.toLocaleString()}</p>
        )}
        <button onClick={saveConversion}>Salvar Conversão</button>
      </div>
      <div className="graph-container">
        <canvas id="myChart" width="400" height="400"></canvas>
      </div>  
      <HistoricoConversoes conversoesSalvas={savedConversions} />
    </div>
  );
}

export default HomePage;
