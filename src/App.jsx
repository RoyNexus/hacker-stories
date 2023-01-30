import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

let count = 0;

function App() {
  console.log("Starting App()");

  return (
    <div className="App">
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h2>Vite + React</h2>
      <div className="card">
        <button onClick={() => {
          console.log("button clicked");
          count++;
          console.log("count: " + count);
        }
        }>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        This is super cool
      </p>
    </div>
  )
}

export default App
