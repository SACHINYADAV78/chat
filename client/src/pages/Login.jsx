import React from 'react'
// import {BsCardImage} from 'react-icons/bs'

function Login() {
  return (
    <div className='formContainer'>
        <div className='formWrapper'>
            <span className='logo'>Sachin Chat</span>
            <span className='title'>Register</span>
            <form>
                
                <input type="email" placeholder='your email'/>
                <input type="password" placeholder='your password' />
               
            <button>Sign in</button>
            </form>
            <p>You Don't have account? Sign Up</p>
        </div>
    </div>
  )
}

export default Login