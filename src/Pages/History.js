import React, { useEffect, useState } from 'react'
import Table from 'react-bootstrap/Table';
import { deleteHistApi, getHistoryApi } from '../apiService/allApi';


function History() {

const [history,setHistory]=useState([])

  const getHistories=async ()=>{
   const result=await getHistoryApi()
   setHistory(result.data)
  }
  useEffect(()=>{
    getHistories()

  },[])

  console.log(history);
///delete th history
  const handleDelete=async(e,id)=>{
    e.preventDefault()
   await  deleteHistApi(id)
   getHistories()
   }
  return (
    <div >
        <h1 className='text-center py-5'>Watch History</h1>
        <Table className='container' striped bordered hover variant="dark">
      <thead className='text-center'>
        <tr>
          <th>0</th>
          <th>title</th>
          <th>time</th>
          <th>video url</th>
          <th></th>
        </tr>
      </thead>
      <tbody className='text-center'>
        {
          history.length>0?(
            history.map((i,index)=>
            
            <tr>
          <td>{index +1}</td>
          <td>{i.title}</td>
          <td>{i.time}</td>
          <td>{i.videoUrl}</td>
          <td className='text-center'>
          <i class="fa-sharp fa-solid fa-trash" style={{color:"red"}} onClick={(e)=> handleDelete(e,i.id)}></i>

          </td>

        </tr>
            )
          )
          : <h1>There is no Histories</h1>
        }
        
       
       
      </tbody>
    </Table>
    </div>
  )
}

export default History