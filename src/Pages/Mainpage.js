import React, { useState } from 'react'
import { Col, Row } from 'react-bootstrap'
import Add from '../Components/Add'
import Categorize from '../Components/Categorize'
import Vedios from '../Components/Vedios'
import { Link } from 'react-router-dom'

function Mainpage() {

  //state for state lifting
  const[addUpdate,setaddupdate]=useState("")
  return (
    <div>
        <Row className='container w-100'>
            <Col lg={6}>
            <h1 className='ms-5 mt-3'><span>S</span>tart <span>U</span>ploading <span>V</span>ideos <span>F</span>or <span>F</span>ree</h1> 
           <Link to={'/history'} style={{textDecoration:'none'}}>
            <a className='fs-3' style={{textDecoration:'none'}} href="">
            <i class="fa-solid fa-clock fa-spin text-white  mt-3 ms-5" ></i><p className='ghf fs-1 ' style={{color:'rgb(25, 230, 175) '}}>View Watch History</p>
            </a>
           
            </Link>
           
           
            <p className='gh ms-5' style={{textAlign:'left'}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste culpa corrupti dolorem veritatis  assumenda nostrum vel esse voluptas quae adipisci optio dolores ipsum laudantium assumenda nos velesse voluptas quae perspiciatis, sit minus quis alias adsjkbf.</p>
            <Add updateData={setaddupdate}></Add>
                </Col>
            <Col lg={6}> 
            <img src="https://i.postimg.cc/sfwcdgR2/png-transparent-youtube-live-streaming-live-streaming-on-youtube-live-on-youtube-youtube-live-live-s.png" alt=""  
            width={340}
            height={240}
            className='dbd'
            />
            
            </Col>
        </Row> <br />  <br /> <br />
     <hr />
     
        <Row className='container w-100'>
            <Col lg={6} md={12}>
            <Vedios data={addUpdate}>
              </Vedios></Col> 
            

            <Col lg={6} md={12}>
            <Categorize></Categorize></Col>
        </Row>

    </div>
  )
}

export default Mainpage