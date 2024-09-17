import React from 'react'
import HomeIcon from '@mui/icons-material/Home';
import { Home } from '@mui/icons-material';

const handleHome = () => {
    window.location.href = '/';
}
const ButtonHome = () => {
  return (
    <div>
      <button className="button-home" onClick={handleHome}>    <HomeIcon sx={{ fontSize: 40 }} /> <h2 className="Logo">MovieFun</h2> </button>
    </div>
  )
}
export default ButtonHome

