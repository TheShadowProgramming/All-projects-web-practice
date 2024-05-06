import './App.css'

function App() {
  let count = 5;

  return (
    <>
      <div>
        count is : {count}
      </div>

      <button>Add Value</button>
      <br />
      <button>decrease value</button>
      <br />
      <button>remove value</button>
    </>
  )
}

export default App

// react project vite bundler se banaate apan, scripts se dev command samajh liya humne
// and then we install all the node modules in order to run vite commands
// app.jsx se we import the functions in the main.jsx and uske andar hi we use the .render syntax
// jsx functions are called when we use the / operator after the name of the function inside the 
// in order to return html using the jsx syntax, <> and </> is used inside the return function
// babel works under the hood and converts all the modern js syntax into vanilla js 
// in order to support jsx syntax in old browsers and all types of browsers