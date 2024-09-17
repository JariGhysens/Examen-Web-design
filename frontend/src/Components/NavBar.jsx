// NavBar.jsx
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../Components/UserContext.jsx';
import ButtonHome from './ButtonHome.jsx';
import ButtonLogin from './ButtonLogin.jsx';
import ButtonProfile from './ButtonProfile.jsx';

const display = () => {

  const LoggedIn = "tst";
  if (LoggedIn ===  "test" ) {
    return <ButtonProfile />;
  } else {
    return <ButtonLogin />;
  }

};
const NavBar = () => {
  const { loggedInUser } = useContext(UserContext) || {};



  return (
    <div className="navbar">
      <div className="nav-left">
        <ButtonHome />
      </div>
      <div className="nav-right">
        {loggedInUser ? (
          <div>
            <span>Welcome, {loggedInUser.username}</span>
            <button>Logout</button>
          </div>
        ) : (
          
           display ()
          
        )}
      </div>
    </div>
  );
};

export default NavBar;
