import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash, faMailBulk } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { Link, useNavigate } from 'react-router-dom';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase';
import './Login.css';

export default function Signup() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [name, setName] = useState('');

  const SignupWithEmail = async (e) => {
    e.preventDefault();
    if (!email || !password) {
      console.error("Please provide Email and Password");
      return;
    }
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password, name);
      console.log("User created:", userCredential.user);
      navigate('/login');
    } catch (error) {
      console.error("Error during signup:", error.message);
    }
  };

  return (
    <>
      {/* Signup Form */}
      <div className='signup_page'>
        <div className='login_body'>
          <h2>Welcome To .</h2>
          <Link to='/'><div className="logo"><span>.CodePen</span></div></Link>
          <form onSubmit={SignupWithEmail}>
            <div id='name_input' className='input-group'>
              <input type="text" placeholder="First Name" value={name} onChange={(e) => setName(e.target.value)} required />
              <input type="text" placeholder="Last Name" required />
            </div>
            <div className="input-group">
              <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
            </div>
            <div className="input-group">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <i className="eye-icon" onClick={() => setShowPassword(!showPassword)}>
                {showPassword ? <FontAwesomeIcon icon={faEye} /> : <FontAwesomeIcon icon={faEyeSlash} />}
              </i>
            </div>
            <button className="signup-btn" type="submit">Register</button>
          </form>
          <p className="login-text">Already have an account? <Link to='/login'>Login</Link></p>
        </div>
        <div className='Background'>
         <p id="green">C</p><p id="white">O</p><p id="white">D</p><p id="white">E</p>
         <div></div>
         <p id="green">P</p><p id="white">E</p><p id="white">N</p><p id="white">...</p>
       </div>
      </div>
      <hr />
      <div className='handles_2'>
        <a href="https://github.com/SahilS2004/codepen" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faGithub} className='awe_2' /></a>
        <a href="https://www.instagram.com/sahil_s2004/" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faInstagram} className='awe_2' /></a>
        <a href="mailto:sahilsarawgi1239@gmail.com"><FontAwesomeIcon icon={faMailBulk} className='awe_2' /></a>
      </div>
    </>
  );
}
