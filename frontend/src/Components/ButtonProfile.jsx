import React from 'react'


const handleProfile = () => {
    window.location.href = '/profile';
}
const ButtonProfile = () => {
  return (
    <div>
      <button className="button-profile" onClick={handleProfile}>   Profile </button>
      
    </div>
  )
}
export default ButtonProfile

