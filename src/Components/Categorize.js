import React, { useEffect } from 'react'
import { Container } from 'react-bootstrap'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import { addCateApi, deleteCateApi, getCateApi, getVideo, updateCateApi} from '../apiService/allApi';
import { logDOM } from '@testing-library/react';


function Categorize() {
  const [show, setShow] = useState(false);

///state to store categories
  const[categories,setCategories]=useState([])

  ///to get the categories

  const getCategories=async ()=>{
    const result=await getCateApi()
    setCategories(result.data);
  }
useEffect(()=>{
  getCategories()
},[])
console.log(categories);




  const handleClose = () => {
    setShow(false);
    setCatinput({title:"",id:"",videos:[]})
  
  }
  const handleShow = () => setShow(true);

  ///create a state to hold datas in category
  const[catinput,setCatinput]=useState({
    title:"",id:"",videos:[]
  })
  console.log(catinput);

///create function in button

const handleAdd=async (e)=>{
  e.preventDefault()
  if(!catinput.title){
    alert("please fill the input")
  }
  else{
   const result=await addCateApi(catinput)
  if(result.status>=200 && result.status<300){
    
   await getCategories()
   alert("category is added")
    handleClose()
  }
  }
}

//delete the category

const handleDelete=async(e,id)=>{
 e.preventDefault()
await  deleteCateApi(id)
getCategories()
}

///dragging function
const draggingOver= (e)=>{
  e.preventDefault()
  console.log("dragging over the category");
}

//dropping function
const dropped=async(e,id)=>{
  console.log("dropped and cat id"+id);
  const vidId=e.dataTransfer.getData("cardId")
  console.log("dragged data", vidId);


  //access video
const result=await getVideo(vidId)
const video=result.data


//select categ
let selectedCat=categories.find(i=> i.id==id);
selectedCat.videos.push(video)
// console.log(selectedCat);
await  updateCateApi(id,selectedCat)
getCategories()
}

  return (
    <div className='gl'>
      <Container>
        <button className='w-75 text-center mt-3' type="text"  onClick={handleShow}>Add Category </button>
        {
          categories?.length>0?
          categories?.map(i=>(
            <div droppable onDragOver={e => draggingOver(e)} onDrop={(e)=>dropped(e,i?.id) } className='p-5 rounded my-4 bg-dark w-75'>
              <h5 className='text-center'>{i?.title}</h5>
             <marquee>
              <div className='d-flex'>
              {i?.videos.length>0?(
                i.videos.map(j=>(
              <div style={{width:'150px'}}>
               <img style={{height:'120px'}} className='w-100 px-2' src={j?.coverImg} alt="" />
               </div>
                ))
              ):""}
              </div>
              </marquee>
              
            <div className='text-end'>
            <i class="fa-sharp fa-solid fa-trash " onClick={(e)=> handleDelete(e,i.id)} style={{color:"lightblue"}}></i>

            </div>
            
            </div>
          ))
          : 
          <p className='ss'>No categories added..</p>
        }
        <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title className='ss'>Add New Category</Modal.Title>
        </Modal.Header>
        <FloatingLabel
        controlId="floatingInput"
        label="Category Name"
        className="mb-3 mt-4 ms-3"
      >
        <Form.Control onChange={(e)=> setCatinput({...catinput,["title"]:e.target.value})}  type="text" placeholder="Category Name" />
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
       
        </Container>
    </div>
  )
}

export default Categorize