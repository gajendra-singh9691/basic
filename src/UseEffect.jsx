import { useEffect, useState } from "react"

function UseEffect() {
    const [count, setCount] = useState(0);
    const [count1,setCount1] = useState(0)
    useEffect(() => {
        console.log("hello")
    },[count1])
    return (
        <>
            <h1>{count}</h1>
            <h1>{count1}</h1>
            <button onClick={()=>{setCount(count+1)}}>click</button>
            <br />
            <br />
            <button onClick={()=>{setCount1(count1+1)}}>click</button>
        </>
    )
}
export default UseEffect