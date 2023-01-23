import { useState } from "react"

export const Counter = () => {

    const [counter, setCounter] =useState(0)

    const add = ( number : number = 1 ) =>{
        setCounter(counter + number)
    }

  return (
    <div className="mt-5">
        <h1>Counter:</h1>
        <h3>Value: {counter}</h3>
        <hr/>

        <button className="btn btn-outline-primary mt-2" 
        onClick={()=>add(1) }
        >
        +1
        </button>

        <button className="btn btn-outline-primary mt-2" 
        onClick={()=>add(2) }
        >
        +2
        </button>

        <button className="btn btn-outline-danger mt-2" 
        onClick={()=>setCounter(0) }
        >
        Reset Counter
        </button>

        

    </div>
  )
}
