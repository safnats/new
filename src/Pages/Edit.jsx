

import { useEffect, useState } from "react";
import { editAPI,  getsingleEditAPI } from "../Server/allAPI";
import { useNavigate, useParams } from "react-router-dom";

function Edit() {



  const[edit,setedit]=useState({id:"",name:"",age:"",course:""})  
  const { id } = useParams();
  const navigate = useNavigate();


useEffect(()=>{
  const getdata=async()=>{
   try {
     const result=await getsingleEditAPI(id)
     console.log(result);
     setedit(result.data)
     
     
   } catch (error) {
     console.log(error);
     
   }
  }
  getdata()
},[id])


const handleedit=async(e)=>{
     e.preventDefault();
    try {

        await editAPI(id,edit)
                    alert("updated successfully!");
      navigate('/');
        
    } catch (error) {
        console.log(error);
        
        
    }
}


  // Handle input changes
const handleChange = (e) => {
  setedit({
    ...edit,
    [e.target.name]: e.target.value
  });
};

  // Update student


  return (
    <div className="container mt-5">
      <h2>Edit Student</h2>

      <form onSubmit={handleedit}>
        <input
          className="form-control mb-3"
          type="text"
          name="id"
          placeholder="Student ID"
          value={edit.id}
          onChange={handleChange}
          required
        />

        <input
          className="form-control mb-3"
          type="text"
          name="name"
          placeholder="Student Name"
          value={edit.name}
          onChange={handleChange}
          required
        />

        <input
          className="form-control mb-3"
          type="number"
          name="age"
          placeholder="Age"
          value={edit.age}
          onChange={handleChange}
          required
        />

        <input
          className="form-control mb-3"
          type="text"
          name="course"
          placeholder="Course"
          value={edit.course}
          onChange={handleChange}
          required
        />

        <button className="btn btn-success" type="submit">
          Update Student
        </button>
      </form>
    </div>
  );
}

export default Edit;
