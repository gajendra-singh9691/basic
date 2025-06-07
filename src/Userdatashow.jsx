import React, { useEffect, useState } from 'react'

const Userdatashow = () => {
    const [username,setUsername] = useState("")
    const [password,setPassword] = useState("")
    useEffect(()=>{
        const data = JSON.parse(localStorage.getItem("User"));
        console.log(data);
        
        setUsername(data.username);
        setPassword(data.password);
    },[])
  return (
    <div>
      <h1>Username : {username}</h1>
      <h1>Password : {password}</h1>
    </div>
  )
}

export default Userdatashow