import React from 'react'
import image from '../image/2.jpg'

function Search() {
  return (
    <div className='search'>
      <div className="searchForm">
        <input type="text" placeholder='Find A User' />
      </div>
      <div className="userChat">
      <img src={image} alt="user" />
      <div className="userChatInfo">
        <span>jane</span>
      </div>
      </div>
    </div>
  )
}

export default Search