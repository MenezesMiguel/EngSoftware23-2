import { useEffect, useState } from 'react';
import axios from 'axios';
import Dropdown from 'react-dropdown';
import { HiSwitchHorizontal } from 'react-icons/hi';
import 'react-dropdown/style.css';
import './HomePage.css';
import React from 'react';

function HomePage() {
  
    // Inicializando as variáveis 
    const [info, setInfo] = useState({});
    const [input, setInput] = useState(0);
    const [from, setFrom] = useState("usd");
    const [to, setTo] = useState("inr");
    const [options, setOptions] = useState([]);
    const [output, setOutput] = useState(0);
  
    // Chamando a API
    useEffect(() => {
      axios.get(`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${from}.json`)
     .then((res) => {
        setInfo(res.data[from]);
      })
    }, [from]);
    
    // Chamando a function de converter sempre que o usuário trocar as moedas
    useEffect(() => {
      setOptions(Object.keys(info));
      convert();
    }, [info, input, to])
      
    // Function para converter a moeda
    function convert() {
      var rate = info[to];
      setOutput(input * rate);
    }
    
    // Function pra trocar entre duas moedas
    function flip() {
      var temp = from;
      setFrom(to);
      setTo(temp);
    }
    
    return (
      <div className="App">
        <div className="container">
          <div className="left">
            <h3>Valor a ser convertido</h3>
            <input type="text" 
               placeholder="Coloque o valor" 
               onChange={(e) => setInput(e.target.value)} />
          </div>
          <div className="middle">
            <h3>De</h3>
            <Dropdown options={options} 
                      onChange={(e) => { setFrom(e.value) }}
            value={from} placeholder="From" />
          </div>
          <div className="switch">
            <HiSwitchHorizontal size="30px" 
                          onClick={() => { flip()}}/>
          </div>
          <div className="right">
            <h3>Para</h3>
            <Dropdown options={options} 
                      onChange={(e) => {setTo(e.value)}} 
            value={to} placeholder="To" />
          </div>
        </div>
        <div className="result">
          <h2>Valor convertido</h2>
          <p>{input+" "+from+" = "+output.toFixed(2) + " " + to}</p>
    
        </div>
      </div>
    );
  }
    
  export default HomePage;