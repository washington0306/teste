import React, {useState} from "react";
import './counter.css';

function Counter(){

    const [counter, setCounter] = useState(0)

    return(
        <section className="aplication">
            <h1 className="result">{counter}</h1>
                <div className="buttons">
                     <button className="button" onClick={()=>setCounter(counter+1)}>+1</button>
                     <button className="button" onClick={counter > 0 ? ()=>setCounter(counter-1):()=>{alert('Valor não pode ser negativo!!!')}}>-1</button>
                </div>
                
           
           
        </section>
       
        
    )
}

export default Counter