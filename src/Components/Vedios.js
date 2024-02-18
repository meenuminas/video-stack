import React, { useEffect, useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import VideoCard from './VideoCard'
import { getVideoApi } from '../apiService/allApi'


function Vedios({data}) {


  const [allVideos,setallVideos]=useState([])

  const[deleteUpdate,setdeleteUpdate]=useState({})

  const accessAllVideos=async()=>{
  const   result=await getVideoApi()
// console.log(result.data);

  setallVideos(result.data)

  }
  useEffect(()=>{
    accessAllVideos()
  },[data,deleteUpdate])
console.log(allVideos);

  return (
    <Container>
    <Row className=' gl ms-5 w-100'>
      {
        
        allVideos?.length>0?
        allVideos?.map(i=>(
          <Col className='my-5' lg={6} md={12}>
<VideoCard deleteData={setdeleteUpdate} video={i} ></VideoCard>
</Col>
        ))
       
        : <h1>No Video added yet! Add a new video..</h1>
        }
    </Row> <br /> <br />
    </Container>
  )
}

export default Vedios