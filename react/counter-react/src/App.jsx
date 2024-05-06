import { useState } from "react";
import "./App.css";

function App() {
  let [count, setCounter] = useState(0)

  let [warning, setWarning] = useState("")

  function addValue () {
    if (count == 20) {
      setCounter(count)
      setWarning("can't increase more than 20")
    }
    else {
      setCounter(count + 1)
      setWarning("")
    }
  }
  function decreaseValue () {
    if (count == 0) {
      setCounter(count)
      setWarning("can't decrease less than 0")
    }
    else {
      setCounter(count - 1)
      setWarning("")
    }
  }
  function removeValue () {
    setCounter(0)
    setWarning("")
  }
  return (
  <>
    <div id="MainContainer">
      <div id='CounterContainer'>
        count is :- {count}
        {warning}
      </div>
      <div id="ButtonContainer">
        <button
        onClick={addValue}
        >Add Value, current value :- {count}
        {warning}
        </button>
        <br />
        <button
        onClick={decreaseValue}
        >decrease value, current value :- {count}
        {warning}
        </button>
        <br />
        <button
        onClick={removeValue}
        >remove value, current value :- {count}
        {warning}
        </button>
        </div>
    </div>
  </>
  )
}

export default App

// react project vite bundler se banaate apan, scripts se dev command samajh liya humne
// and then we install all the node modules in order to run vite commands
// app.jsx se we import the functions in the main.jsx and uske andar hi we use the .render syntax
// jsx functions are called when we use the / operator after the name of the function inside the 
// in order to return html using the jsx syntax, <> and </> is used inside the return function
// we can't write logic in 
// babel works under the hood and converts all the modern js syntax into vanilla js 
// in order to support jsx syntax in old browsers and all types of browsers