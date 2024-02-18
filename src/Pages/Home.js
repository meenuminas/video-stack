import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'

import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div>
        <Row className='container w-100'>
            <Col lg={6} md={6}>
              <div className='container3 mt-5'>
            <h1 className='' ><span>V</span>ideo <span>U</span>ploader</h1>
            <p className='text-left gh'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit dolorem quae nihil aliquid <br /> error quam labore voluptates dicta nostrum magni. Deserunt non amet expedita <br />
             dignissimos facilis! Suscipit dolorum quam incidunt!</p>
           <Link to={'/main'}> <button className='bb ' >
        Get Started
      </button>
      </Link>
      </div>
            </Col>
            <Col lg={6} md={6} >
            <img  src="https://i.postimg.cc/xThGRHtH/output-onlinegiftools-1.gif"
             alt=""
              // width="400"
              // height="350"
              className="d-inline-block align-top mt-5 w-50" />
              
            </Col>
        </Row>
          
        <Container>
           <hr></hr>
           <h2 className='text-center mt-2 pp'><b>FEATURES</b></h2>
           
            <div className="card-container">
            <Row className='w-100 container'>
            <Col>
            <Card style={{ width: '14rem' }}>
      <Card.Img className='hm' variant="top" src="https://i.postimg.cc/ZRqLNpzX/HFW-Video-Player-Icon-3.gif" />
      <Card.Body>
        <Card.Title className='ss'><b>Managing Vedios</b></Card.Title>
        <Card.Text className='gh'>
        Lorem ipsum dolor sit amet doloremque, eaque, modi iusto, quae eius nesciunt magni labore soluta illum aliquid aspernatur est. Soluta atque optio quo! Culpa, facere?
        </Card.Text>
         </Card.Body>
    </Card> <br />
    </Col>
    <Col >
    <Card style={{ width: '14rem' }}>
      <Card.Img className='hm' variant="top" src="https://i.postimg.cc/d0WJnPgD/image-processing20190913-7360-19dzl4f.gif" />
      <Card.Body>
        <Card.Title className='ss'><b>Categorize Vedios</b></Card.Title>
        <Card.Text className='gh'>
        Lorem ipsum dolor sit amet doloremque, eaque, modi iusto, quae eius nesciunt magni labore soluta illum aliquid aspernatur est. Soluta atque optio quo! Culpa, facere?
              </Card.Text>
         </Card.Body>
    </Card> <br />
    </Col>
    <Col>
    <Card style={{ width: '14rem' }}>
      <Card.Img className='hm' variant="top" src="https://i.postimg.cc/W1Wz3kSd/dj-mix.gif" />
      <Card.Body>
        <Card.Title className='ss'><b>Watch History</b></Card.Title>
        <Card.Text className='gh'>
        Lorem ipsum dolor sit amet doloremque, eaque, modi iusto, quae eius nesciunt magni labore soluta illum aliquid aspernatur est. Soluta atque optio quo! Culpa, facere?
       
            </Card.Text>
         </Card.Body>
    </Card>
     <br />
    </Col>
            
           </Row>
           
        </div>

        </Container>
    </div>
  )
}

export default Home