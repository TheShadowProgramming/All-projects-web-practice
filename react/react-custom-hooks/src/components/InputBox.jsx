import React from "react";

function InputBox({label, amount, onAmountChange, onCurrencyChange, currencyOptions = [], selectCurrency = "usd", amountDisable = false, currencyDisable = false}) {
  return (
    <div>
      <div className={`bg-white p-3 rounded-lg text-sm flex `}>
        <div className="w-1/2">
          <label className="text-black/40 mb-2 inline-block">{label}</label>
          <input
            className="outline-none w-full bg-transparent py-1.5"
            value={amount} // refresh karne ke baad jo value display hota hai vo value store karta hai ye attribute
            type="number"
            disabled={amountDisable}// if we store true in disabled attribute of input tag then the entry is not allowed in the input box  
            onChange={(e) => onAmountChange && onAmountChange(Number(e.target.value))} // we have 2 problems here like the values returned by the e.target.value is a string which means that we gotta convert the string first
            // we're only interested in calling the function when the function exists and is passed in the inputBox component as a prop therefore js evaluates the expression and returns false if the initial onAmountChange doesn't exists
            // this type of calling the function is crucial since we gotta make sure that the calls are safe and doesn't make the code unsafe
            placeholder="Amount"
          />
        </div>
        <div className="w-1/2 flex flex-wrap justify-end text-right">
          <p className="text-black/40 mb-2 w-full">Currency Type</p>
          <select className="rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none" value={selectCurrency} onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)} disabled={currencyDisable}>
            {currencyOptions.map((Currency) => (<option key={Currency} value={Currency}>{Currency}</option>))}
          </select>
          // select tag ko bhi value, onChange, and disabled attributes de diye
          // option tag me value attribute se jo ye e.target.value me value ki jaati hai like option tag ka jo value attribute ka value hai vo pass hojata hai e.target.value me
        </div>
      </div>
    </div>
  );
}

export default InputBox;
