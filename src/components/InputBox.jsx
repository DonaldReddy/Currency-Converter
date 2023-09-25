import React from 'react'
import "./InputBox.css"

function InputBox({ label, amount, selectedCurrency, onAmountChange, onCurrencyChange, currenciesList = [] }) {
    return (
        <div className="input-box">
            <div className="box-1">
                <label>
                    {label}
                </label>
                <input type="number" min={0} value={amount} placeholder="Amount" onChange={(e) => onAmountChange && onAmountChange(Number(e.target.value))} />
            </div>

            <div className="box-2">
                <p>Currency Type</p>
                <select value={selectedCurrency} onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)}>

                    {currenciesList.map((currency) => (
                        <option key={currency} value={currency}>
                            {currency}
                        </option>
                    ))}

                </select>
            </div>

        </div>
    )
}

export default InputBox