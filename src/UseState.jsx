import { useState } from "react";

function UseState(){
    const[count,setCount] = useState(0)

    function Incriment(){
        setCount(count+1)
    }
    function Dicriment(){
        setCount(count-1)
    }
    return(
        <>
            <button onClick={Dicriment}>Decrement</button>
            <h1>{count}</h1>
            <button onClick={Incriment}>Increment</button>
        </>
    )
}
export default UseState;