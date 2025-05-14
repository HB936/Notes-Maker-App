import { useState } from 'react'
import './App.css'
import Card from './Card'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="container">
        <div className="row">
          <Card/>
        </div>
      </div>
    </>
  )
}

export default App
