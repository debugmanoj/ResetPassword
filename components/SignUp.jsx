import React, { useState } from 'react'
import AxiosService from "../utils/API"
import { useNavigate } from 'react-router-dom'

function SignUp() {
  let navigate=useNavigate()
  let [name,setName]=useState("")
    let [password,setPassword]=useState("")
    let [mail,setMail]=useState("")

    let handleSubmit=async()=>{

        try {
            let data = {"name":name,"email":mail,"password":password}
          
            let res = await AxiosService.post("/user/addUser",data)
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
  <h1 className='text-center mt-5' style={{"color":"white"}} >Sign Up</h1>
  <div className='d-flex flex-column mt-5 justify-content-center align-items-center'>

    <label className='' style={{"color":"white"}} htmlFor="">Name</label>
    <input className='w-25 mt-3 mb-2' type="text" onChange={(e)=>setName(e.target.value)} />
    <label style={{"color":"white"}} htmlFor="">Email ID</label>
    <input  className='w-25 mt-3 mb-2' type="text" onChange={(e)=>setMail(e.target.value)} />
    <label style={{"color":"white"}} htmlFor="">Password</label>
    <input className='w-25 mt-3 mb-2' type="text" onChange={(e)=>setPassword(e.target.value)} />
    <a  onClick={handleSubmit} className='w-25 btn btn-primary mt-3'>Sign Up</a>

  </div>

  
  </>
}

export default SignUp