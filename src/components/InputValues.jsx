import { useState } from "react"
import { Counter } from "./Counter";
import "./styles.css"

export const InputCounter = ()=>{
    const [upperLimit, setUpperLimit] = useState(1000);
    
    return(
        <div className="master_div">
            <div className="maxInput">
            <input type="text" placeholder="Upper Limit" onChange={(e)=>{setUpperLimit(e.target.value)}}/>

            </div>
            <Counter  upperLimit={upperLimit}/>
        </div>
    )
}