import { useState } from 'react';
import reactLogo from './assets/react.svg';  // Resmin doğru yolu
import workintechLogo from './assets/workintech.svg';  // Resmin doğru yolu
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="logo-container">
        <a href="https://github.com/Workintech/fsweb-s7-challenge-pizza" target="_blank" rel="noopener noreferrer">
          <img src={workintechLogo} className="logo" alt="Workintech logo" />
        </a>
        <a href="https://react.dev" target="_blank" rel="noopener noreferrer">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>

      <h1>Workintech + 🍕</h1>

      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          Absolute Acı Pizza sayısı: {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>

      <p className="read-the-docs">
        Click on the Workintech or Pizza logos to learn more!
      </p>
    </>
  );
}

export default App;
