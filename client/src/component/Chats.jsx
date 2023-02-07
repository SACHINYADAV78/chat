import React from 'react'
import image from '../image/2.jpg'


function Chats() {
  return (
    <div className='chats'>
       <div className="userChat">
      <img src={image} alt="user" />
      <div className="userChatInfo">
        <span>Hello</span>
        <p>hello</p>
      </div>
      </div>
       <div className="userChat">
      <img src={image} alt="user" />
      <div className="userChatInfo">
        <span>Hello</span>
        <p>hello</p>
      </div>
      </div>
       <div className="userChat">
      <img src={image} alt="user" />
      <div className="userChatInfo">
        <span>Hello</span>
        <p>hello</p>
      </div>
      </div>
       <div className="userChat">
      <img src={image} alt="user" />
      <div className="userChatInfo">
        <span>Hello</span>
        <p>hello</p>
      </div>
      </div>
    </div>
  )
}

export default Chats