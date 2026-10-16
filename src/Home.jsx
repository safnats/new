import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { deleteAPI, getdataAPI } from './Server/allAPI'



function Home() {

const[data,setdata]=useState([])

useEffect(()=>{
 getdata()
},[])

 const getdata=async()=>{
  try {
    const result=await getdataAPI()
    console.log(result);
    setdata(result.data)
    
    
  } catch (error) {
    console.log(err);
    
  }
 }

const Deleteitem=async(id)=>{
    try {
        
        await deleteAPI(id)
        getdata()
    } catch (error) {
        console.log(error);
        
    }
}

  return (
    <div>
      <div className=" diet-bg container mt-4">
                <h2 className="text-center text-success fw-bold mb-3"style={{fontFamily:"cursive"}}>MEALS PLAN</h2>
                <table className="table border shadow p-5 rounded table-bordered table-striped">
                    <thead >
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Age</th>
                            <th>course</th>
                          
                        </tr>
                    </thead>
                    <tbody>
      
                       {   
                       data.map(datas=>(

                          <tr key={datas.id}>
                                    <td>{datas.id}</td>
                                    <td>{datas.name}</td>
                                    <td>{datas.age}</td>
                                    <td>{datas.course}</td>
                                  
                                    <td>
                                     <Link to={`/edit/${datas.id}`}><button className='btn btn'><i class="fa-solid fa-pencil text-success"></i></button></Link>
                               
                                        <button onClick={()=>Deleteitem(datas.id)} className="btn btn ms-5" ><i class="fa-solid fa-trash text-danger"></i></button>
                                    </td>
                                </tr>
                       ))     
                      }
                        
                    </tbody>
                </table>
              
<Link to="/add" className="btn btn-success">
  + Add Student
</Link>
            </div>
                               
    </div>
  )
}

export default Home
