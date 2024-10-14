import React, {useId} from "react";

function InputBox({label, amount, onAmountChange, onCurrencyChange, currencyOptions = [], selectCurrency = "usd", amountDisable = false, currencyDisable = false}) {
  const amountInputId = useId();
  return (
    <div>
      <div className={`bg-white p-3 rounded-lg text-sm flex `}>
        <div className="w-1/2">
          <label className="text-black/40 mb-2 inline-block" htmlFor={amountInputId}>{label}</label>
          <input
            id={amountInputId}
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
          // keys are passed in react elements which are created using loops on arrays since these elements are siblings therefore react creates issues in performance since it is hard for react to properly identify which element is being updated in the DOM
          // therefore we pass keys to the elements where react can uniquely identify when a certain element in this array is changed instead of re-rendering the entire list again
          // and The thing is that if we pass just the index of the element in the key then the index changes of the element when the element is removed let's say
          // usually we pass ids of the elements in the key attribute, but key is just an attribute of an element or a component, let's say if we're passing some key to a component then in order to access the value of the key as a prop we gotta pass that same value as a prop since this key attribute is made just for react to take hint while updating DOM and not passed in the component itself
        </div>
      </div>
    </div>
  );
}

export default InputBox;
