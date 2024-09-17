import React from 'react'


const handleLogIn = () => {
    window.location.href = '/login';
}
const ButtonLogIn = () => {
  return (
    <div>
      <button className="button-login" onClick={handleLogIn}>   Log In </button>
    </div>
  )
}
export default ButtonLogIn


