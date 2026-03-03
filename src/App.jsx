import { useState } from 'react'
import './App.css'
import PasswordGenerator from './components/PasswordGenerator'

function App() {
  const [count, setCount] = useState(0)

  return (
    <main>
      <div className="container">
        <h1 className="app-title">
          Password Generator
        </h1>
        <PasswordGenerator></PasswordGenerator>
      </div>
    </main>
  );
}

export default App
