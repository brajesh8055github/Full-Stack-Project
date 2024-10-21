import React from 'react'
import { NavLink } from 'react-router-dom'

const Error = () => {
  return (
    <>
     <NavLink to='/'>Return Home</NavLink>
     <NavLink to='/contact'>Report problem</NavLink>
    </>
  )
}

export default Error