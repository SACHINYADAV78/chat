import React from 'react'
import image from '../image/adani.webp'

function Message() {
  return (
    <div className='message owner'>
      <div className="messageInfo">
        <img src={image} alt="" />
        <span>just now</span>
      </div>
      <div className="messageContent">
        <p>hello</p>
        <img src={image} alt="" />
      </div>
      
    </div>
  )
}

export default Message