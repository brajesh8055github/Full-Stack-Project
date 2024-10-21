import React, { useState } from 'react'
import { useAuth } from '../store/auth'
import { toast } from 'react-toastify'
import contacts from '../images/Contact.webp'

const defaultContactFormData = {
  username:"",
  email:"",
  message:""
}

const Contact = () => {
const[contact,setContact] = useState({defaultContactFormData})

const[userData,setUserData] = useState(true)

const {user} = useAuth()

if(userData && user){
  setContact({
    username:user.username,
    email:user.email,
    message:""
  })

  setUserData(false)

}

const handleInput = (e)=>{
  let name = e.target.name
  let value = e.target.value

  setContact({
    ...contact,
    [name]:value,
  })
  
}

const handleSubmit = async(e)=>{
     e.preventDefault()
    //  alert(contact)
    // console.log(contact)

    try{
       const response = await fetch("http://localhost:5000/api/form/contact",{
        method:"POST",
        headers:{
          'Content-Type':"application/json"
        },
        body:JSON.stringify(contact)
       })
       if(response.ok){
        setContact(defaultContactFormData)
        // alert("Message sent successfully")
        toast.success("Message sent successfully")
       }
    }
    catch(error){
      // alert("Message not send")
      toast.error("Message not send")

      console.log(error)
    }
}

  return (
    <>
    <section>
      <main>
        <div className='input'>
          <img src={contacts} alt='contact'/>
          <div>
          <h1><span>Contact Us</span></h1>
          <br/>
          <form onSubmit={handleSubmit}>
            <div>
            <label htmlFor='username'>Username</label><br/>
            <input type='text' name='username' placeholder='Username' id='username' required autoComplete='off' value={contact.username} onChange={handleInput}></input>
           </div>
           <div>
            <label htmlFor='email'>Email</label><br/>
            <input type='text' name='email' placeholder='email' id='email' required autoComplete='off' value={contact.email} onChange={handleInput}></input>
           </div>
           <div>
            <label htmlFor='message'>Message</label><br/>
            <textarea type='text' name='message'  id='message' cols="20" rows="5" required autoComplete='off' value={contact.message} onChange={handleInput}></textarea>
           </div>
           
           <br />
           <button style={{background:"rgb(96 5 240)",border:"none", padding:"10px 20px",margin:"0"}} type='submit'>Submit</button>
            </form>
        </div>
        </div>
      </main>
    </section>
    </>
  )
}

export default Contact