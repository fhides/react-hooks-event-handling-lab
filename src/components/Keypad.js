// Code Keypad Component Here
import React from 'react'

function Keypad() {
    const handleAuth=(event)=>{
        event.preventDefault()
        console.log("Entering password...");

    }
  return (
    <div>
    <label >Passcode
        <input onChange={handleAuth}
        id="passcode"
        type="password"
        placeholder='****'
        />
        </label>
    </div>
  )
}

export default Keypad 