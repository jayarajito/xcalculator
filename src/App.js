// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;

// import logo from "./logo.svg";
import "./App.css";
import React, { useState } from "react";

function App() {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");

  const handleClick = (value) => {
    setInput((prevInput) => prevInput + value);
  };

  const handleClear = () => {
    setInput("");
    setOutput("");
  };

  const handleCalculate = () => {
    if (input === "" || "+-x/".includes(input[input.length - 1])) {
      setOutput("Error");
      return;
    }
    try {
      // eslint-disable-next-line no-eval
      const result = eval(input);
      setOutput(result);
    } catch (error) {
      setOutput("Error");
    }
  };
  return (
    <div>
      <div className="App">
        <h1>React Calculator</h1>
        <div className="calculator">
          <input
            type="text"
            className="inputField"
            value={input}
            placeholder=""
            readOnly
          />
          <div className="output">{output}</div>
          <div className="buttons">
            {[7, 8, 9, "+", 4, 5, 6, "-", 1, 2, 3, "*", "C", 0, "=", "/"].map(
              (item) => (
                <button
                  key={item}
                  className="button"
                  onClick={() => {
                    if (item === "=") {
                      handleCalculate();
                    } else if (item === "C") {
                      handleClear();
                    } else {
                      handleClick(item);
                    }
                  }}
                >
                  {item}
                </button>
              )
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
