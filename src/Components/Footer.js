import React from 'react'
import { Col, Container, Navbar, Row } from 'react-bootstrap'

function Footer() {
  return (
    <div className='container1 mt-5 ' >
     
     <Container className='p-3 text-black'>
       <Row>
        <Col >
        <Navbar className="bg-body-black ">
        <Container>
          <Navbar.Brand href="#home">
            <img 
              alt=""
              src="https://i.postimg.cc/YCRjfVCc/30060-5-video-icon-free-download.png"
              width="30"
              height="30"
              className="d-inline-block align-top"
              
            />{' '}
        <span className='text-info ss'> V</span><span className='text-white'>ideo</span> <span className='text-info ss'>T</span><span className='text-white'>herapy</span>
          </Navbar.Brand>
        </Container>
      </Navbar>
      <p className='text-left text-white mm'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse, ducimus debitis. Ullam eligendi neque aspernatur quasi perferendis dolore soluta pariatur consequuntur eos a! Nihil, ab ullam. Ipsa nesciunt labore praesentium!</p>
        </Col>



        <Col>
        <h2 className='text-white ss' >Link</h2>
        <a href="" className='text-info mm' style={{textDecoration:'none'}}>Landing Page</a><br />
        <a href="" className='text-info mm' style={{textDecoration:'none'}}>Home</a><br />
        <a href="" className='text-info mm' style={{textDecoration:'none'}}>Watch History</a><br />
        </Col>


        <Col>
        <h2 className='ss text-white' >Guides</h2>
        <p className='mm text-white'>react</p>
        <p className='mm text-white'>react Bootstrap</p>
        <p className='mm text-white'>routing</p>
        </Col>


        <Col>
        <h2 className='ss text-white'>Contact Us</h2>
        <input className='w-100 p-2' type="text" name="" id="" placeholder='enter email' /><br /><br />
        <button className='bg-info w-100 p-2'>Send</button>
        <div >
          <i style={{ marginLeft: '3rem' }} class="fa-brands fa-instagram"></i>
          <i  style={{ marginLeft: '3rem' }} class="fa-brands fa-facebook"></i>
          <i style={{ marginLeft: '3rem' }}class="fa-brands fa-twitter"></i>
          <i style={{ marginLeft: '3rem' }}class="fa-brands fa-github"></i>
        </div>

        
        </Col>


       </Row>
     </Container>


    </div>
  )
}

export default Footer