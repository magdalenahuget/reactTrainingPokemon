import { useState } from "react";


function CounterButton() {
    let [counter, setCounter] = useState(0)

    return (
        <button onClick={_ => setCounter(counter += 1)}>
            {counter}
        </button>
    )
}

export default CounterButton;