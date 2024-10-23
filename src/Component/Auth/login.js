import React from 'react'
import '../Auth/auth.css'
function Login() {
  return (
    <div>
         <div className='form-card'>
            <h1>Create Account
            </h1>
            <label>Name</label><br />
            <input type='text' name='' /><br />
            <label>mobile</label><br />
            <input type='text' name='' /><br />
            <label>Password</label><br />
            <input type='password' name='' /><br />
            <button className='form-button'>Continue</button>
            <p>
            To verify your number, we will send you a text message with a temporary code. Message and data rates may apply.
            </p>
            <hr></hr>
            <p>Buying for work?<br />
                Shop on Amazon Business</p>

        </div>
    </div>
  )
}

export default Login