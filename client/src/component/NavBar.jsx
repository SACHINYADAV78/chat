import React from 'react'
import image from '../image/2.jpg'

function NavBar() {
  return (
    <div className='navbar'>
      <span className='logo'>Sachin Chat</span>
      <div className="user">
        <img src={image} alt="" />
        <span>Rahul</span>
        <button>Logout</button>
      </div>
    </div>
  )
}

export default NavBar