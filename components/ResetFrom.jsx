import React, { useState } from 'react'
import AxiosService from "../utils/API"
import { useNavigate } from 'react-router-dom'

function ResetFrom() {
  let navigate=useNavigate()


  let [token,setToken]=useState("")
  let [password,setPassword]=useState("")
  let [mail,setMail]=useState("")
  let handleResetUpdate=async()=>{
    let data = { "email": mail,"password":password };
    let config = {
        headers: {
            "Authorization": `Bearer ${token}`
        }
    };
    
    let res=await AxiosService.post("/user/checkPass",data,config)
    if(res.status===200){
      navigate("/Update")
    }
  }
  return <>
  
  <div className='d-flex flex-column mt-5 justify-content-center align-items-center'>
    <label style={{"color":"white"}}>Your Token</label>
    <textarea  className='w-25 mt-3 mb-2' type="text" onChange={(e)=>setToken(e.target.value)} />
<label style={{"color":"white"}} htmlFor="">Email ID</label>
<input  className='w-25 mt-3 mb-2' type="text" onChange={(e)=>setMail(e.target.value)} />
<label style={{"color":"white"}} htmlFor="">New Password</label>
<input className='w-25 mt-3 mb-2' type="text" onChange={(e)=>setPassword(e.target.value)} />
<a  onClick={handleResetUpdate} className='w-25 btn btn-primary mt-3'>Change My old Password</a>


</div>
  </>
}

export default ResetFrom