import React, { useState } from 'react'
import './App4.css'
export default function App4() {
    //state

   const[firstName,setFirstName]=useState('')
   const[lastName,setLastName] =useState('')
   const[email,setEmail]=useState('')
   const[err,setError]=useState(false)
   const[emailError,setEmailError]=useState


    //function
     const handalSubmit=(e)=>{
        e.preventDefault()
       
        if(firstName.length==0||lastName.length==0||email.length==0){
            setError(true)
        }
        console.log(firstName,lastName)

     }

    //return
  return (
  <>
   
   <form onSubmit={handalSubmit}>
     <div>
        <input onChange={(e)=>{setFirstName(e.target.value)}}/>
     </div>
     {err&&firstName.length<=0?<label>first name can't be empty</label>:""}
     
     <div>
        <input onChange={(e)=>{setLastName(e.target.value)}}/>
     </div>
     {err&&lastName.length<=0?<label>last name can't be empty</label>:""}
     <div>
        <input onChange={(e)=>{setEmail(e.target.value)}}/>
     </div>
     {err&&email.length<=0?<label>Email can't be empty</label>:""}
     
     <br></br>

     <button > submit</button>

   </form>
   
  </>
  )
}
