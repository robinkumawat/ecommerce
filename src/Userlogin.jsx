import axios from 'axios'
import React, { useState } from 'react'
import { json } from 'react-router-dom'




function Userlogin() {

    const[user,setUser]=useState("")
    const[password,setPassword]=useState("")
     

    const loginHandle=async()=>{
        let result = await axios.post("http://localhost:5000/login/",{
            user,password
        })
        result=result.data

        if(result.name){
            localStorage.setItem(useData,json.stringify(result))
            navigator("/")
        }
        else{
            alert("please enter correct Detils")
        }
    }
  return (
    <div>
        <form >
            <input type="text"  placeholder='Username'  value={user} onChange={(e)=>setUser(e.target.value)}/>
            <input type="text" placeholder='password' value={password} onChange={(e)=>setPassword(e.target.value)}/>
             <div>
            
                <button onClick={(e)=>{
                    e.preventDefault()
                    loginHandle()
                }}
                 type='submit'>submit</button>

             </div>
            
        </form>
    </div>
  )
}

export default Userlogin