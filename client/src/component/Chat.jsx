import React from 'react'
import {BsFillCameraVideoFill} from 'react-icons/bs'
import {AiOutlineUserAdd} from 'react-icons/ai'
import {FiMoreHorizontal} from 'react-icons/fi'
import Messages from './Messages'
import Input from './Input'


function Chat() {
  return (
    <div className='chat'>
      
      <div className="chatInfo">
        <span>jane</span>
        <div className="chatIcons">
          {<BsFillCameraVideoFill style={{hieght:'24px' , cursor:'pointer'}}/>} 
          {<AiOutlineUserAdd style={{hieght:'24px' , cursor:'pointer'}}/>} 
         {<FiMoreHorizontal style={{hieght:'24px' , cursor:'pointer'}}/>}
       
        </div>
      </div>
        <Messages/>
        <Input/>
    </div>
  )
}

export default Chat