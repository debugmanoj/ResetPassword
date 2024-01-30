import React, { useState } from 'react'

import AxiosService from "../utils/API"
import { Link, useNavigate } from 'react-router-dom'

function signIn() {
  let navigate=useNavigate()
    let [password,setPassword]=useState("")
    let [mail,setMail]=useState("")

    let handleSubmit=async()=>{

        try {
            let data = {"email":mail,"password":password}
            let res = await AxiosService.post("/user/forgottenPass",data)
            console.log(res);
            if(res.status===200)
            {
                console.log("User Added Succesfully");
                navigate("/signIn")
            }
         } catch (error) {
            console.log(error)
         }
    }


    
  return <>
  <div className='text-center mt-5'>.</div>
  <h1 className='text-center mt-5' style={{"color":"white"}} >Sign In</h1>
  <div className='d-flex flex-column mt-5 justify-content-center align-items-center'>

    <label style={{"color":"white"}} htmlFor="">Email ID</label>
    <input  className='w-25 mt-3 mb-2' type="text" onChange={(e)=>setMail(e.target.value)} />
    <label style={{"color":"white"}} htmlFor="">Password</label>
    <input className='w-25 mt-3 mb-2' type="text" onChange={(e)=>setPassword(e.target.value)} />
    <a   className='w-25 btn btn-primary mt-3'>Sign In</a>
    <Link  to="/email" className='w-25 btn btn-primary mt-3'>Reset Password</Link>


  </div>

  
  </>
}

export default signIn