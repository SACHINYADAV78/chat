import {  ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import React from 'react'
import {BsCardImage} from 'react-icons/bs'
import { createUserWithEmailAndPassword ,updateProfile} from "firebase/auth";
import { auth ,db,storage} from "../firebase";
import { useState } from 'react';
import { doc, setDoc } from "firebase/firestore";

function Register() {
  const [err ,setErr] = useState(false)
  const handleSubmit= async(e)=>{
     e.preventDefault()
     const displayName = e.target[0].value
     const email = e.target[1].value
     const password = e.target[2].value
     const file = e.target[3].files[0]

    
try {
  const res = await createUserWithEmailAndPassword(auth, email, password)


const storageRef = ref(storage,displayName);

const uploadTask = uploadBytesResumable(storageRef, file);

uploadTask.on( 
  

  (error) => {
    setErr(true)
  }, 
  () => {
    
    getDownloadURL(uploadTask.snapshot.ref).then(async(downloadURL) => {
      await updateProfile(res.user ,{
        displayName,
       photoURL: downloadURL
      })
      await setDoc(doc(db,"users", res.user.uid),{
        uid:res.user.uid,
        displayName,
        photoURL:downloadURL,
        email
      })
    });
  }
);
} catch (err) {
  setErr(true)
}


  
  }
  return (
    <div className='formContainer'>
        <div className='formWrapper'>
            <span className='logo'>Sachin Chat</span>
            <span className='title'>Register</span>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder='display name'/>
                <input type="email" placeholder='your email'/>
                <input type="password" placeholder='your password' />
                <input style={{display:"none"}} type="file" id='file'/>
                <label htmlFor="file">
                   {<BsCardImage style={{fontSize:"30px"}}/>} 
                   <span>Add an Avtar</span>
                </label>
            <button>Sign Up</button>
            {err && <span>something is wrong</span>}
            </form>
            <p>You Do have account? Login</p>
        </div>
    </div>
  )
}

export default Register