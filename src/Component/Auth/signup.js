import React from 'react'
import '../Auth/auth.css'
function Signup() {
    return (

        <div className='form-card'>
            <h1> Sign in</h1>
            <label>Email or mobile phone number</label><br />
            <input type='text' name='' /><br />
            <button className='form-button'>Continue</button>
            <p>
                By continuing, you agree to Amazon's Conditions of Use and Privacy Notice.<br />
                Need help?</p>
            <hr></hr>
            <p>Buying for work?<br />
                Shop on Amazon Business</p>

        </div>
    )
}

export default Signup