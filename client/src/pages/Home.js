import React from 'react'
import { NavLink } from 'react-router-dom'
import home from '../images/Homewebp.webp'
import start from '../images/Start.webp'

const Home = () => {
  return (
    <div>
    {/* <div className='input'> */}
    <div className='input'>
      
    <div style={{margin:"60px 0"}}>
    <p>We are the World best IT Company</p>
    <h1>Welcome to Brajesh<br></br> Website</h1>
    <p>Are you ready to take your business to the next level with cutting-edge IT solutions? Look no further! At Brajesh Kumar. We specialize in providing innovative IT services and solutions tailored to meet your unique needs.</p>
    <button style={{background:"rgb(96 5 240)",border:"1px solid #fff",margin:"0"}}><NavLink style={{color:"#fff"}} to='/contact'>Connect Now</NavLink></button>
    <button>Learn More</button>
    </div>
    <img  src={home} alt='home'/>
    </div>
    <div className='input'>
      <img  src={start} alt='start'/>
    <div style={{margin:"60px 0"}}>
      <p>We are here to help you</p>
      <h1>Get Started Today</h1>
      <p>Ready to take the first step towards a more efficient and secure IT infrastructure? Contact us today for a free consultation and let's discuss how Thapa Technical can help your business thrive in the digital age</p>
      <button style={{background:"rgb(96 5 240)",border:"1px solid #fff",margin:"0"}}><NavLink style={{color:"#fff"}} to='/contact'>Connect Now</NavLink></button>
    <button>Learn More</button>
    </div>
    </div>
    </div>
  )
}

export default Home