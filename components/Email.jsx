import React, { useState } from 'react'
import AxiosService from "../utils/API"
import { Navigate, useNavigate } from 'react-router-dom'


function Email() {
    let navigate = useNavigate();
    let [validity,setValidity]=useState("")
    let [reset,setReset]=useState(false)
    let [datas,setDatas]=useState("")
    let [mail,setMail]=useState("")
    let handleReset=async()=>{
        let data={"email":mail}
        let res=await AxiosService.post("/user/forgottenPass",data)
        if(res.status===200){
            setValidity(res.data.validity)
            setDatas(res.data.token)
            setReset(true)
        }

    }
let handleResetUpdate=()=>{
    navigate("/resetForm")
}

    return <>
    {
        
        reset? <>
        <h5 className='text-center mt-5' style={{"color":"white"}}>Your token to reset password</h5>
        <div className='d-flex mt-5 justify-content-center align-item-center'>
            
        <div class="card " style={{"width": "18rem"}}>
        <div class="card-body">
          <p class="card-text">{datas} </p>
          
        </div>
      </div>
      
      </div>
      <p  className='text-center mt-5'style={{"color":"white"}} >Make sure to Copy the token code<span className='mx-3' style={{"color":"Red"}}>Valid till {validity}</span>
      <br />
      {/* to="/resetForm" */}
      <a onClick={handleResetUpdate}  className='mt-3 btn btn-danger'>Change Password</a>
      </p>
      </>
             
          :<div className='d-flex flex-column mt-5 justify-content-center align-items-center'>

        <label style={{"color":"white"}} htmlFor="">Enter Email ID to reset</label>
        <input  className='w-25 mt-3 mb-2' type="text" onChange={(e)=>setMail(e.target.value)} />
        <a  onClick={handleReset} className='w-25 btn btn-primary mt-3'>Reset Password</a>
        </div>
    }

    </>
}

export default Email