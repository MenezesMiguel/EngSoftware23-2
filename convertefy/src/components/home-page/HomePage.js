import React, { useEffect, useState } from "react";
import axios from "axios";
import Dropdown from "react-dropdown";
import { HiSwitchHorizontal } from "react-icons/hi";
import "react-dropdown/style.css";
import HistoricoConversoes from "../history/historyPage";
import "./HomePage.css";

function HomePage() {
  const [info, setInfo] = useState({});
  const [input, setInput] = useState(0);
  const [from, setFrom] = useState("usd");
  const [to, setTo] = useState("inr");
  const [options, setOptions] = useState([]);
  const [output, setOutput] = useState(0);
  const [savedConversions, setSavedConversions] = useState([]);
  const [lastUpdateTime, setLastUpdateTime] = useState(null);
  const [searchFrom, setSearchFrom] = useState(""); // Estado para pesquisa "De"
  const [searchTo, setSearchTo] = useState(""); // Estado para pesquisa "Para"

  useEffect(() => {
    axios
      .get(
        `https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${from}.json`
      )
      .then((res) => {
        setInfo(res.data[from]);
        setLastUpdateTime(new Date());
      });
  }, [from]);

  useEffect(() => {
    setOptions(Object.keys(info));
    convert();
  }, [info, input, to]);

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
    var rate = info[to];
    setOutput(input * rate);
  }

  function flip() {
    var temp = from;
    setFrom(to);
    setTo(temp);
  }

  function saveConversion() {
    const savedConversion = `${input} ${from} = ${output.toFixed(2)} ${to}`;
    setSavedConversions([...savedConversions, savedConversion]);
  }

  function handleFromChange(selected) {
    setFrom(selected.value);
  }

  function handleToChange(selected) {
    setTo(selected.value);
  }

  function filterFromCurrencies() {
    const filteredFromOptions = Object.keys(info).filter((currency) =>
      currency.toLowerCase().includes(searchFrom.toLowerCase())
    );
    setOptions(filteredFromOptions);
  }

  function filterToCurrencies() {
    const filteredToOptions = Object.keys(info).filter((currency) =>
      currency.toLowerCase().includes(searchTo.toLowerCase())
    );
    setOptions(filteredToOptions);
  }

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
            options={options.map((option) => ({ value: option, label: option }))}
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
            options={options.map((option) => ({ value: option, label: option }))}
            onChange={handleToChange}
            value={to}
            placeholder="To"
          />
        </div>
      </div>
      <div className="result">
        <h2>Valor convertido</h2>
        <p>{input + " " + from + " = " + output.toFixed(2) + " " + to}</p>
        {lastUpdateTime && (
            <p>Data da última conversão: {lastUpdateTime.toLocaleString()}</p>
        )}
        <button onClick={saveConversion}>Salvar Conversão</button>
      </div>
      <HistoricoConversoes conversoesSalvas={savedConversions} />
    </div>
  );
}

export default HomePage;
