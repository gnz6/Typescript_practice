import { useState } from "react"
import { SonTimer } from "./SonTimer"

export const Timer = () => {
const [miliseconds, setMiliseconds] = useState(1000)

  return (
    <div>
        <span>Miliseconds { miliseconds }</span>

        <button className="btn btn-outline-success"
        onClick={() => setMiliseconds(1000)}
        > 1000 </button>
        
        <button className="btn btn-outline-success"
        onClick={() => setMiliseconds(2000)}
        > 2000 </button>
        
        
        <SonTimer miliseconds = {miliseconds}/>
    </div>
  )
}
