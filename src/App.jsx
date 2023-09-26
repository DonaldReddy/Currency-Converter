import React from "react";
import "./App.css";
import { InputBox } from "./Components/index.js";
import useCurrencyInfo from "./hooks/useCurrencyInfo.js";

function App() {

  let [from, setFrom] = React.useState(0);
  let [to, setTo] = React.useState(0);
  let [fromCurrency, setFromCurrency] = React.useState("usd");
  let [toCurrency, setToCurrency] = React.useState("inr");

  let currencies = useCurrencyInfo(fromCurrency);

  let currenciesList = Object.keys(currencies);

  function swap() {
    setFromCurrency(toCurrency);
    setToCurrency(fromCurrency);
    setFrom(to);
    setTo(from);
  }

  function convert() {
    setTo(from * currencies[toCurrency]);
    console.log(fromCurrency, from, currencies[fromCurrency], toCurrency, to, currencies[toCurrency], from * currencies[toCurrency]);
  }

  return (
    <div className="container">

      <h1>Currency Converter 💸</h1>

      <InputBox label="From" amount={from} selectedCurrency={fromCurrency} onAmountChange={setFrom} onCurrencyChange={setFromCurrency} currenciesList={currenciesList}></InputBox>

      <button className="swap" onClick={swap}>Swap ⬆⬇</button>

      <InputBox label="To" amount={to} selectedCurrency={toCurrency} onAmountChange={setTo} onCurrencyChange={setToCurrency} isReadOnly={true} currenciesList={currenciesList}></InputBox>

      <button className="convert" onClick={convert}>Convert {fromCurrency.toUpperCase()} to {toCurrency.toUpperCase()} </button>

    </div>
  )
}

export default App
