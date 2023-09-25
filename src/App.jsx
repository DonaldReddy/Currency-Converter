import React from "react";
import "./App.css";
import { InputBox } from "./Components/index.js";
import useCurrencyInfo from "./hooks/useCurrencyInfo.js";

function App() {

  let currencies = useCurrencyInfo("usd")

  let currenciesList = Object.keys(currencies);

  let [from, setFrom] = React.useState(0);
  let [to, setTo] = React.useState(0);
  let [fromCurrency, setFromCurrency] = React.useState("usd");
  let [toCurrency, setToCurrency] = React.useState("inr");

  function swap() {
    setFromCurrency(toCurrency);
    setToCurrency(fromCurrency);
  }

  function convert() {
    setTo(from * currencies[toCurrency]);
  }

  return (
    <div className="container">
      <InputBox label="from" amount={from} selectedCurrency={fromCurrency} onAmountChange={setFrom} onCurrencyChange={setFromCurrency} currenciesList={currenciesList}></InputBox>
      <button className="swap" onClick={swap}>Swap</button>
      <InputBox label="to" amount={to} selectedCurrency={toCurrency} onCurrencyChange={setToCurrency} currenciesList={currenciesList}></InputBox>
      <button onClick={convert}>Convert {fromCurrency.toUpperCase()} to {toCurrency.toUpperCase()} </button>
    </div>
  )
}

export default App
