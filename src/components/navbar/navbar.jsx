import React from 'react'
import './navbar.css'
import Li from '../list/li'


export default function Navbar() {
  return (
    <div className='navbar'>
      <h3>Angel Ramirez</h3>
      <div className='listado'>
        <Li/>
      </div>
    </div>
  )
}
