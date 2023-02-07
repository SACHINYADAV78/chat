import React from 'react'
import {GrAttachment} from 'react-icons/gr'
import {AiFillFileImage} from 'react-icons/ai'

function Input() {
  return (
    <div className='input'>
      <input type="text" placeholder='Type Something...'/>
      <div className="send">
        <GrAttachment style={{hieght:'24px' , cursor:'pointer'}}/>
        <input type="file" style={{display:'none'}} id='fie' />
        <label htmlFor="file">
         <AiFillFileImage style={{hieght:'24px' , cursor:'pointer'}}/>
        </label>
        <button>Send</button>
      </div>
    </div>
  )
}

export default Input