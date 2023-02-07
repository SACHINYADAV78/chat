import React from 'react'
import Chat from '../component/Chat'
import SideBar from '../component/SideBar'

function Home() {
  return (
    <div className='home'>
        <div className="container">
            <SideBar/>
            <Chat/>
        </div>
    </div>
  )
}

export default Home