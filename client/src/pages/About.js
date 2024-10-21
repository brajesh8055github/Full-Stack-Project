import React from 'react'
import { useAuth } from '../store/auth'
import { NavLink } from 'react-router-dom'
import about from '../images/About.webp'

const About = () => {
  const { user } = useAuth()
  return (
    <div style={{ margin: "25px auto 15px" }} className='input'>
      <img src={about} alt='about' />
      <div>
        <p>Welcome, {user ? `${user.username}` : 'to our website'} </p>
        <h1>Why Choose Us?</h1>
        <p>Expertise: Our team consists of experienced IT professionals who are passionate about staying up-to-date with the latest industry trends.</p>

        <p style={{ margin: "5px 0" }}>Customization We understand that every business is unique. That's why we create solutions that are tailored to your specific needs and goals.</p>

        <p style={{ margin: "5px 0" }}>Customer-Centric Approach We prioritize your satisfaction and provide top-notch support to address your IT concerns.</p>

        <p style={{ margin: "5px 0" }}>Affordability We offer competitive pricing without compromising on the quality of our services.</p>

        <p style={{ margin: "5px 0" }}>Rallobility: Count on us to be There when you need us We're committed

          to ensuring your IT environment is reliable and available 24/7.</p>
        <button style={{ background: "rgb(96 5 240)", border: "1px solid #fff", margin: "0" }}><NavLink style={{ color: "#fff" }} to='/contact'>Connect Now</NavLink></button>
        <button>Learn More</button>
      </div>
    </div>

  )
}

export default About