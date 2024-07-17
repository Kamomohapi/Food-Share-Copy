

import React, { useState, useContext } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { UserContext } from '../App';


const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [userType, setUserType] = useState('');
  const { setUser } = useContext(UserContext);
  const navigate = useNavigate();

  const handleLogin = async (event) => {
    event.preventDefault();
  
    try {
      let result;
      if (userType.toLowerCase() === 'recipient') {
         result = await axios.post('http://localhost:5282/api/Recipient/Login', {
          RecipientEmail: email,
          password,
        });
      } else {
        result = await axios.post('http://localhost:5282/api/Donor/Login', {
          DonorEmail: email,
          password,
        });
      }
      

      if (result.data.flag) {
        toast.success(result.data.message);

        const prefixUsername = getPrefixUsername(email);
        setUser({ prefixUsername });

        setTimeout(() => {
          if (userType.toLowerCase() === 'recipient') {
            navigate('/RecipientLandingPage');
          } else {
            navigate('/home');
          }
        }, 5000);
      } else {
        toast.warning(result.data.message);
      }
      const token = result.data.token;
      localStorage.setItem('token', token);
      console.log(token)
    } catch (error) {
      console.error('Login failed:', error.response);
      toast.error('Login failed. Please check your credentials.');
    }
    
  };

  const getPrefixUsername = (email) => {
    const username = email.split('@')[0];
    return username.charAt(0).toUpperCase() + username.slice(1);
  };

  return (
    <div className="signup-container" style={{ height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center', margin: 0 }}>
      <ToastContainer />
      <div className="signup">
        <form style={{ width: '450px', margin: 'auto', background: '#A9A9A9', boxShadow: '0px 14px 80px rgba(34, 35, 58, 0.2)', padding: '40px 55px 45px 55px', borderRadius: '15px', transition: 'all .3s' }} onSubmit={handleLogin}>
          <h3 style={{ textAlign: 'center', margin: '0', lineHeight: '1', paddingBottom: '20px' }}>Login</h3>
          <div>
            <input
              type="radio"
              name="userType"
              value="Recipient"

              onChange={(e) => setUserType(e.target.value)} required




            />{' '}
            Recipient
            <input
              type="radio"
              name="userType"
              value="Donor"

              onChange={(e) => setUserType(e.target.value)} required


              



            />{' '}
            Donor
          </div>
          <div className="mb-3">
            <label>Email address</label>
            <input
              type="email"
              className="form-control"
              placeholder="Enter email"
              value={email}

              onChange={(e) => setEmail(e.target.value)} required


              



            />
          </div>
          <div className="mb-3">
            <label>Password</label>
            <input
              type="password"
              className="form-control"
              placeholder="Enter password"
              value={password}

              onChange={(e) => setPassword(e.target.value)} required


              



            />
          </div>
          <div className="mb-3">
            <div className="custom-control custom-checkbox">
              <input
                type="checkbox"
                className="custom-control-input"
                id="customCheck1"
              />
              <label className="custom-control-label" htmlFor="customCheck1">
                Remember me
              </label>
            </div>
          </div>
          <div className="d-grid">
            <button type="submit" className="btn btn-dark" style={{ width: '100%' }}>
              Submit
            </button>
          </div>
          <p className="forgot-password text-right">
            Forgot <a href="#">password?</a>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;

