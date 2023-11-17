import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Home.css';
const Home = () => {
  const navigate = useNavigate();
  return (
  
  <>
    <div className='front'>
      <h1>Welcome to PopX</h1>
      <p>Lorem ipsum dolor sit amet,<br /> consectetur adipisicing elit,</p>
    <button className='signup' onClick={()=>navigate('/signup')}>Create Account</button>
    <button className='login' onClick={()=>navigate('/login')}> Already Registered? Login</button>
    </div>
      </>

  )
}

export default Home;