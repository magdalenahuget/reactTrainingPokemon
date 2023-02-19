import { useState } from "react";


function CounterButton({counter, onClick}) {

    return (
        <button onClick={_ => onClick()}>
            {counter}
        </button>
    )
}

export default CounterButton;