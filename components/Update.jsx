import React from 'react'
import { useNavigate } from 'react-router-dom'

function Update() {
    let navigate=useNavigate()
return    <>
<div className='mt-5'>.</div><div className='mt-5'>.</div><div className='mt-5'>.</div><div className='mt-5 d-flex justify-content-center align-item-center'>
<h1 style={{"color":"white"}}> Your Password has been resetted</h1>


</div>
<br />
<a onClick={()=>navigate("/signIn")} className='d-flex justify-content-center align-item-center  btn btn-primary'>Get back to Sign in</a>


</>
}

export default Update