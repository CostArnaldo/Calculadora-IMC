import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import styles from "./App.modules.css"

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className={styles.main}>
      <header>
        <div className={styles.headerContainer}>
        </div>
      </header>
      
    </div>
  )
}

export default App
