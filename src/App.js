import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Home from './Home';
import Profile from './Profile';
import PrivateRoute from './PrivateRoute';
import Navbar from './Navbar';
import Login from './Login';
import News from './News';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <div className="container mt-5">                           
        <Route exact path="/" component={Home} />
        <Route path="/login" component={Login} />
        <Route path='/News' component={News} />
        <PrivateRoute path="/profile" component={Profile} />
      </div>
    </BrowserRouter>
  );
}

export default App;
