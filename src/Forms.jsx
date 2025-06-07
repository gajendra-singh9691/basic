import React, { useState } from 'react'

const Forms = () => {
    const [Username,setUsername] = useState("");
    const [password,setPassword] = useState("");

    const Submitfun = (e)=>{
        e.preventDefault();
        let data = {
            username : Username,
            password : password
        }
        localStorage.setItem("User",
            JSON.stringify(data)
        )
        console.log("working");
        setUsername("");
        setPassword("");

    }
  return (
    <form>
        <input type="text" onChange={(e)=>{setUsername(e.target.value)}} value={Username} placeholder='Enter Username' />
        <input type="password" onChange={(e)=>{setPassword(e.target.value)}} value={password} placeholder='Enter password' />
        <button onClick={Submitfun}>Submit</button>
    </form>
  )
}

export default Forms
