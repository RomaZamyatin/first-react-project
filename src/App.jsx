//декларативный стиль, так как тут используем готовые решения, реализация не важна
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  //декларативный
  const [count, setCount] = useState(0)
  let date = new Date();
  // вся верстка - декларативный стиль
  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
		{/*Кроме этого, тут императивный - описываем как работает счётчик*/}
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more <br></br>
		{date.getFullYear()} 
      </p>
    </>
  )
}
//декларативный
export default App
