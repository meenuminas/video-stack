import React from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import { addVideoApi } from '../apiService/allApi';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';

function Add({updateData}) {

  //state to store inpout data (add id key tool)
   const [inputDatas,setinputDatas]=useState({
    title:"",coverImg:"",videoUrl:"",id:""
   })

   ///function to update inputre state
const setDatas=(e)=>{
  let {value,name}=e.target
  ///update state with existing datats
  setinputDatas({...inputDatas,[name]:value})
  
}

///extract url
const extractUrl=(e)=>{
  const {value,name}=e.target
  let urlCode=value.slice(-11,)

  const finalURL=` https://www.youtube.com/embed/${urlCode}?autoplay=1`
  setinputDatas({...inputDatas,[name]:finalURL})
}

console.log(inputDatas);

  const [show, setShow] = useState(false);

  const handleClose = () => {
    setShow(false);

  //reset state

  setinputDatas({...inputDatas,title:"",coverImg:"",videoUrl:"",id:""})
  }
  const handleShow = () => setShow(true);
  
//add video
const handleAdd= async (e)=>{
  //prevent the event
  e.preventDefault()

  const {title, coverImg,videoUrl}=inputDatas

  if(!title|| !coverImg || !videoUrl){
    
    toast.error('please fill all datas', {
      position: "top-center",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
      });
  }
  else{
    const result=await addVideoApi(inputDatas)
    if(result.status >= 200 && result.status<300){
      ////update state with added data
      updateData(result.data)
      toast.success('Video Added Successfully', {
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        });
      handleClose()
    }
  } 
}

  return (
    <div className='gll ms-5 ' >
      <i style={{color:'orange'}} class="fa-solid fa-upload fa-beat fs-1 mt-3"  onClick={handleShow}></i>
          
     <Modal show={show} onHide={handleClose}  >
        <Modal.Header closeButton >
          <Modal.Title className='ss'>Upload Video</Modal.Title>
        </Modal.Header>
        <FloatingLabel
        controlId="floatingInput"
        label="Video Caption"
        className="mb-3 ms-3 mt-4"
        >
        <Form.Control name='title' onChange={(e)=> setDatas(e)} type="text" placeholder="Video Caption" />
      </FloatingLabel>


      <FloatingLabel controlId="floatinCover" label="Cover Image URL" className="mb-3 ms-3">
        <Form.Control  name='coverImg' onChange={(e)=> setDatas(e)} type="text" placeholder="Cover Image URL" />
      </FloatingLabel>

      <FloatingLabel controlId="floatinYoutube" label="Youtube Video URL" className="mb-3 ms-3">
        <Form.Control name='videoUrl' onChange={(e)=> extractUrl(e)} type="text" placeholder="Youtube Video URL" />
      </FloatingLabel>


        <Modal.Footer>
          <Button variant="danger" onClick={handleClose}>
            Close
          </Button>
          <Button variant="light" className='text-dark' onClick={(e)=> handleAdd(e)}>
            Add
          </Button>
        </Modal.Footer>
      </Modal>
      <ToastContainer />
    </div>
  )
}

export default Add