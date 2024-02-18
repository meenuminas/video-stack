import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useState } from 'react';

import Modal from 'react-bootstrap/Modal';
import { addHistory, deleteVideoApi } from '../apiService/allApi';
import { format } from 'date-fns';

function VideoCard({video,deleteData}) {


  const deleteVideo=async(e,id)=>{
    e.preventDefault()
   const result= await deleteVideoApi(id)
    //alert("deleted")
    deleteData(result.data)
  }
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = async() => {
      setShow(true);
      /// to history store
      //body data- title,time,video url,id

      const title=video?.title
      const videoUrl=video?.videoUrl

      //for time
      let time=format(new Date(),"dd/MM/yyyy, h:MM a")
      //console.log(time);
      const reqBody={
        title,videoUrl,time,id:""
      }
      // console.log(reqBody);
      await addHistory(reqBody)
      
    }

    const dragStart=(e,id)=>{
      console.log("dragging started,source card is"+id);
      e.dataTransfer.setData("cardId",id)

}
 
  return (
    <div>
         <Card draggable onDragStart={(e)=> dragStart(e,video?.id)} className='border border-danger dbd' bg='dark' style={{width:"260px"}} >
      <Card.Img className='w-100 ' style={{height:'160px'}} onClick={handleShow}
      variant="top" src={video?.coverImg} />
      <Card.Body>
        <Card.Title className='text-center ss'>{video?.title}</Card.Title>
        <div className='text-end'>
        <i onClick={(e)=>deleteVideo(e,video?.id)} class="fa-solid fa-trash" style={{color:" #ff2929"}}></i>
          </div>
      </Card.Body>
    </Card>
    <Modal centered size='lg' 
    show={show} onHide={handleClose}>
        <Modal.Header className='bg-dark text-white' closeButton>
          <Modal.Title>{video?.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body className='bg-dark'>
        <iframe width="100%" height="526" src={video?.videoUrl} title="Luminar Onam Celebration || #luminar #onamcelebration" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </Modal.Body>
        
      </Modal>
    </div>
  )
}

export default VideoCard