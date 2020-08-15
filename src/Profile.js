import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import auth from './context/auth';
import './sass/Profile.scss';

function Profile(props) {
  const [isLoggedOut, setLoggedOut] = useState(false);
  function logOut() {
    auth.logout();
    setLoggedOut(true);
  }
  if (isLoggedOut) {
    return <Redirect to="/login" />;
  }
  return (
    <div>
      <div id="ProfileHeading-text">Welcome {localStorage.getItem("userName")}<br></br>
      You were logged in at {localStorage.getItem("LogInTime")}</div>
      <button onClick={logOut} className="btn btn-primary">
        Log out
      </button>
    </div>
  );
}

export default Profile;
