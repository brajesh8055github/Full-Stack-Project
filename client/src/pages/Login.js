import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
// import { useAuth } from './store/auth'
import { useAuth } from '../store/auth'
import {toast} from "react-toastify"
import login from '../images/Login.webp'


const URL = "http://localhost:5000/api/auth/login"

const Login = () => {

const[user,setUser] = useState({
  email:"",
  password:""
})

const navigate = useNavigate()
const {storeTokenInLS} = useAuth()


const handleInput = (e)=>{
  let name = e.target.name
  let value = e.target.value

  setUser({
    ...user,
    [name]:value,
  })
}

const handleSubmit = async (e)=>{
     e.preventDefault()
    //  alert(user)
    // console.log(user)

    try{
      const response = await fetch(URL,{
       method:"POST",
       headers:{"Content-Type":"application/json"},
       body:JSON.stringify(user)
      })

      console.log("login form",response)
 
      const res_data = await response.json()
        console.log("res from server",res_data)
      if(response.ok){
        
        storeTokenInLS(res_data.token)
        // localStorage.setItem("token",res_data)

       
       setUser({email:"",password:""})
       toast.success("login successful")
      navigate("/")
      }
      else{
        // alert("invalid credential")
        // alert(res_data.extraDetails ? res_data.extraDetails:res_data.message)
        toast.error(res_data.extraDetails ? res_data.extraDetails:res_data.message)

        console.log("invalid credential")
      }
 
 
      console.log(response)
     }
     catch(error){
       console.log("register",error)
     }
 
 }


  return (
    <>
    <section>
      <main>
        <div className='input'>
          <img src={login} alt='login'/>
          <div>
          <h1><span>Login Form</span></h1>
          <br/>
          <form onSubmit={handleSubmit}>
           <div>
            <label htmlFor='email'>Email</label><br/>
            <input type='text' name='email' placeholder='Enter email' id='email' required autoComplete='off' value={user.email} onChange={handleInput}></input>
           </div>
           
           <div>
            <label htmlFor='password'>Password</label><br/>
            <input type='text' name='password' placeholder='Enter Password' id='password' required autoComplete='off' value={user.password} onChange={handleInput}></input>
           </div>
           <br />
           <button style={{background:"rgb(96 5 240)",border:"none",margin:"0"}} type='submit'>Login Now</button>
            </form>
        </div>
        </div>
      </main>
    </section>
    </>
  )
}

export default Login