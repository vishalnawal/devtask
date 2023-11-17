import React from 'react'
import './Login.css'

const Login = () => {
  return (
    <>
    <div className='loginacc'>
    <h1>Signin to your PopX account</h1>
    <p>Lorem ipsum dolor sit amet,<br /> consectetur adipiscing elit,</p>
    <div className="container">
      <div className="entryarea">
      <input type="email" required placeholder='Enter Email Address'/>
        <div className="labelline">Email Address<span className='star'>*</span></div>
     </div>
     <div className="entryarea">
        <input type="password" required placeholder='Enter Password'/>
        <div className="labelline">Password<span className='star'>*</span></div>
     </div>
    </div>
    
    <div>
    <button className='loginbutton' type='submit'>Login</button>
    </div>
    </div>
    </>
  )
}

export default Login;