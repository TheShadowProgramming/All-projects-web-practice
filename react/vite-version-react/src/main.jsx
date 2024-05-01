import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Component from "./Component.jsx"
import './index.css'

const randomVariable = "this is an experimental variable"

const firstReactElement = (
  <p>Im using the randomVariable here through this {randomVariable}</p>
) // another thing to note here is that randomVariable used here is
// an instance of evaluated expression, i.e. we're not writing pure js here 
// in this curly brace's scope, we're writing the final outcome of the js 
// working under the hood of the react

const anotherReactElement = (
  "div", // expects the type of html tag
  {class:"button"}, // expects the attributes of the element
  "this div is created using the react syntax" // here it expects the innerHTML of the element
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    <Component />
    {firstReactElement}
    {anotherReactElement}
  </React.StrictMode>,
) // in React, we can use these variables storing the react Elements 
// and inject them directly in our DOM using the curly braces syntax 
// without using the $ syntax
