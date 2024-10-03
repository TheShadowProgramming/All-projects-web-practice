import { useCallback, useEffect, useState, useRef } from "react";
import React from "react";
import "./App.css";

function App() {
  const [password, setPassword] = useState("");
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);

  let passwordRef = useRef(null); // password ko highlight karwaane ke liye useRef hook ka use kar raha hai 

  const randomPasswordGenerator = useCallback(
    (length, numberAllowed, charAllowed) => {
      let passStr = "ABCDEFGHIJLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
      let pass = "";

      if (numberAllowed) {
        passStr += "1234567890";
      }

      if (charAllowed) {
        passStr += "~!@#$%^&*()";
      }

      for (let i = 0; i < length; i++) {
        let randomIndex = Math.floor(Math.random() * (passStr.length - 1));
        pass += passStr[randomIndex];
      }
      return pass;
    },
    [length, charAllowed, numberAllowed]
  );
  // wrapping almost all functions in the wrapper of useCallback to avoid multiple instances of functions after every re-render using memoization that useCallback provides

  useEffect(() => {
    setPassword(randomPasswordGenerator(length, numberAllowed, charAllowed));
  }, [length, charAllowed, numberAllowed]);

  const copyToClipboard = () => {
    passwordRef.current?.select() // passwordRef nahi hua to fir select nahi hoga again, the same thing good practice to avoid errors
    passwordRef.current?.setSelectionRange(0, 12)
    window.navigator.clipboard.writeText(password)
  }

  return (
    <>
      <div className="w-screen h-screen pt-16 bg-slate-950 relative">
        <div className="bg-slate-800 w-[55vw] h-auto mx-auto py-8 flex flex-wrap justify-center rounded-2xl">
          <div className="w-[90%] h-auto flex flex-wrap gap-0 justify-center">
            <input
              value={password} // it maintains the previous value of the input given by the user across re-renders which means even after the re-render we'll get the previous value 
              placeholder="Password" // this is the hint text which appears when we remove everything from the input box 
              readOnly
              type="text"
              ref={passwordRef} // passwordRef.current will reference this input JSX node
              className="bg-white w-[85%] text-orange-500 text-left px-4 py-4 rounded-l-2xl"
            />
            <div onClick={copyToClipboard} className="bg-sky-600 w-[15%] px-4 py-4 rounded-r-2xl text-white text-center cursor-pointer">
              copy
            </div>
          </div>
          <div className="mt-4">
            <input
              type="range"
              name=""
              id="lengthOfPass"
              min={4}
              max={12}
              onChange={(e) => {
                setLength(e.target.value); // event jis DOM node se trigger hua uss node ki value, agar innerText chahiye to fir e.target.innerText Daal dete 
              }}
            />
            <label htmlFor="lengthOfPass" className="text-white">
              {" "}
              length {length}{" "}
            </label>
            <input
              type="checkbox"
              name=""
              id="numberAllowed"
              onChange={() => {
                setNumberAllowed((prev) => !prev);
              }}
            />
            <label htmlFor="numberAllowed" className="text-white">
              {" "}
              number{" "}
            </label>
            <input
              type="checkbox"
              name=""
              id="charAllowed"
              onChange={() => {
                setCharAllowed((prev) => !prev);
              }}
            />{" "}
            <label htmlFor="charAllowed" className="text-white">
              {" "}
              characters{" "}
            </label>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
