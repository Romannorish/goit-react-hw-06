import {useState} from "react"
import "./App.css"

function App() {
  const [counter, setCounter] = useState(0)

  const handleincrement = () => {
    setCounter(counter + 1)
  }
  const handleDecrement = () => {
    setCounter(counter - 1)
  }
  return (
    <>
      <div>
        <h1>This will be home work Redux</h1>
        <h2>Play with counter</h2>
        <p className="text">Counter: {counter}</p>

        <button
          onClick={() => {
            handleDecrement()
          }}
        >
          Decrement - 1
        </button>
        <button
          className="btn"
          onClick={() => {
            handleincrement()
          }}
        >
          increment + 1
        </button>
        <button
          className="btn"
          onClick={() => {
            setCounter(0)
          }}
        >
          Reset Counter
        </button>
      </div>
    </>
  )
}

export default App
