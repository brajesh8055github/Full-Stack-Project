import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../store/auth'
import { toast } from 'react-toastify'
import register from '../images/Register.webp'

const Register = () => {

  const [user, setUser] = useState({
    username: "",
    email: "",
    phone: "",
    password: ""
  })

  const navigate = useNavigate()

  const {storeTokenInLS} = useAuth()

  const handleInput = (e) => {
    let name = e.target.name
    let value = e.target.value

    setUser({
      ...user,
      [name]: value,
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    //  alert(user)
    console.log(user)
    try {
      const response = await fetch(`http://localhost:5000/api/auth/register`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(user)
      })

      // console.log(response)
      const res_data = await response.json()
      console.log("res from server",res_data.extraDetails)
      if (response.ok) {
       
        storeTokenInLS(res_data.token)
        // localStorage.setItem("token",res_data)
        setUser({
          username: "",
          email: "",
          phone: "",
          password: ""
        })
        toast.success("Registration successful")
        // navigate("/login")
        navigate("/")
      }
      else{
        // alert('Not valid registation')
        // alert(res_data.extraDetails ? res_data.extraDetails:res_data.message)
        toast.error(res_data.extraDetails ? res_data.extraDetails:res_data.message)
      }
    }
    catch (error) {
      console.log("register", error)
    }

  }

  return (
    <>
      <section>
        <main>
          <div className='input'>
            <img  src={register} alt='contact-img'/>
            <div>
            <h1><span>Registation Form</span></h1>
            <br />
            <form onSubmit={handleSubmit}>
              <div>
                <label htmlFor='username'>Username</label><br/>
                <input type='text' name='username' placeholder='Username' id='username' required autoComplete='off' value={user.username} onChange={handleInput}></input>
              </div>
              <div>
                <label htmlFor='email'>Email</label><br/>
                <input type='text' name='email' placeholder='Email' id='email' required autoComplete='off' value={user.email} onChange={handleInput}></input>
              </div>
              <div>
                <label htmlFor='phone'>Phone</label><br/>
                <input type='number' name='phone' placeholder='Phone' id='phone' required autoComplete='off' value={user.phone} onChange={handleInput}></input>
              </div>
              <div>
                <label htmlFor='password'>Password</label><br/>
                <input type='text' name='password' placeholder='Password' id='password' required autoComplete='off' value={user.password} onChange={handleInput}></input>
              </div>
              <br />
              <button style={{background:"rgb(96 5 240)",border:"none",margin:"0"}} type='submit'>Register Now</button>
            </form>
            </div>
          </div>
        </main>
      </section>
    </>
  )
}

export default Register