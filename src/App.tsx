<<<<<<< Updated upstream
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

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
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
=======
import "./App.css";
const { Sidebar, SidebarItem } = require("react-responsive-sidebar");

function App() {
  const items = [
    <SidebarItem>Dashboard</SidebarItem>,
    <SidebarItem>Profile</SidebarItem>,
    <SidebarItem>Settings</SidebarItem>,
  ];

  return (
    <div className="App">
      <Sidebar content={items}></Sidebar>
>>>>>>> Stashed changes
    </div>
  )
}

export default App
