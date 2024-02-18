import React from 'react'
import { Col,Row } from 'react-bootstrap';


import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

function Header() {
  return (
    <div style={{background:'whitesmoke'}} className='w-100 '>
      
      <h1 className='ms-5 fs-4 p-2 text-dark'><i class="fa-solid fa-circle-play" style={{color: "#e82011;" }}></i><span  > 
      V</span>ideo <span >T</span>herapy</h1>

</div>
  )
}

export default Header