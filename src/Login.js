import React, { useState } from 'react';  
import { Redirect } from 'react-router-dom';
import auth from './context/auth';
import './sass/Login.scss';

export default function Login() {
  const [isError, setIsError] = useState(false);
  const [isLoggedIn, setLoggedIn] = useState(false);
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');

  const verifyLogin = (e) => {
    e.preventDefault(); 
  
    if (userName === 'Admin' && password === '12345') {    // If Login correct
   
      auth.login();
  
      localStorage.setItem('userName', userName);
      localStorage.setItem('LogInTime', new Date());

      setLoggedIn(true);
      } else {
        setIsError(true);
      }
  };
  if (auth.isAuthenticated || isLoggedIn) {
    return <Redirect to="/profile" />;
  }

  return (
    <div>
      {isError && (
        <div className="alert alert-danger">
          The username or password provided were incorrect!
        </div>
      )}
      <div id="LoginHeading-text">Login Page</div>
      <form>
        <div className="form-group">
          <label >Username</label> 
          <input
            type="text"
            value={userName}
            onChange={(e) => {
              setUserName(e.target.value);
            }}
            className="form-control"
            id="exampleInputEmail1"
          />
        </div>
        <div className="form-group">
          <label >Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            className="form-control"
            id="password"
            aria-describedby="passsword"
          />
        </div>
        <button className="btn btn-primary" onClick={verifyLogin}> 
          Submit
        </button>
      </form>
    </div>
  );
}
