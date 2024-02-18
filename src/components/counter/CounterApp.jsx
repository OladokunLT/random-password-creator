import { useState } from "react";


function CounterApp() {
    const [counter, setCounter] = useState(15)
    
    // let counter = 15;
    const addValue = () => {
        setCounter((prevcounter) => prevcounter + 1)
    }
    const removeValue = () => {       
        setCounter( (counter) => counter -1 )
    }
    console.log(counter)
    return(
        <>
        <h1>React course with hitesh </h1>
        <h2>Counter value {counter}:</h2>
        <button className="p-2 rounded bg-yellow-200" onClick={addValue}>Add value</button> {" "}
        <button onClick={removeValue}>Remove value</button>
        <p>footer: {counter}</p>
        </>
    )
}

export default CounterApp