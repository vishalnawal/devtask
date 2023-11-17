import React ,{useState} from 'react'
import './Signup.css'

import { useNavigate } from 'react-router-dom';
const Signup = () => {
  const navigate = useNavigate();
  const [user,setUser] = useState({
    name:"",phone:"",mail:"",password:"",cname:""
  })
  
  let name,value;

  const handleInputs = (e) => {
    console.log(e);
    name = e.target.name;
    value = e.target.value;
    setUser({...user,[name]:value})
  }

  return (
    <>
  <div className='sign'>
  <h1>Create your PopX account</h1>
    <div className="container">

      <div className="entryarea">
        <input type="text" 
          required 
          placeholder='Enter Full name' 
          id='name' 
          autoComplete='off'
          value={user.name}
          onChange={handleInputs}
          name = "name"
        />
        <div className="labelline">Full name<span className='star'>*</span></div>
     </div>

     <div className="entryarea">
        <input type="text" 
        required 
        placeholder='Enter Phone number' 
        id='number'
        value={user.number}
        onChange={handleInputs}
        name = "phone"
          />
        <div className="labelline">Phone Number<span className='star'>*</span></div>
     </div>

     <div className="entryarea">
        <input type="email" 
        required 
        placeholder='Enter Email Address' 
        id='mail'
        value={user.mail}
        onChange={handleInputs}
        name = "mail"
        />
        <div className="labelline">Email Address<span className='star'>*</span></div>
     </div>

     <div className="entryarea">
        <input type="password" 
        required 
        placeholder='Enter Password' 
        id='password' 
        value={user.password}
        onChange={handleInputs}
        name = "password"
        />
        <div className="labelline">Password<span className='star'>*</span></div>
     </div>

     <div className="entryarea">
        <input type="text" 
        required 
        placeholder='Company Name' 
        id='cname' 
        value={user.cname}
        onChange={handleInputs}
        name = "cname"
        />
        <div className="labelline">Company Name </div>
     </div>

     </div>
    </div>

    <div className="radiocontainer">
    <div> Are you an Agency?<span className='star'>*</span></div>
    <div className='wrap-radio'>
        <div class="wrapper-class">
          <input type="radio" id="yes" name ="agency" 
          checked={true}/>
          <label for="yes">Yes</label>
        {/* </div>
        <div class="wrapper-class"> */}
          <input type="radio" id="no" name ="agency" />
          <label for="no">No</label>
        </div>
        </div>
    </div>
  
    <div>
   <button className='signbutton' type='submit' onClick={() =>navigate('/about', { state: { user } })}>Create Account </button>
   </div>
   </>
  )
}

export default Signup;