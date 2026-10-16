
import React, { useState } from "react";

import { addAPI } from "../Server/allAPI";
import { useNavigate } from "react-router-dom";


function Add() {
const [student,setstudent]=useState({id:"",name:"",age:"",course:""})

  
const handleChange=(e)=>{
    setstudent({
        ...student,[e.target.name]:e.target.value
    })
}

  const navigate=useNavigate() //re-direct to otherpage


const handleAdd=async(e)=>{
        e.preventDefault();
    try {
        await addAPI(student)

        setstudent({id:"",name:"",age:"",course:""})
        alert("student added successfully")

navigate('/')
    } catch (error) {
        console.log(error);
        
        
    }
}

  return (
    <div className="container mt-4">
      <h2 className="text-center text-success mb-4">
        Add Student
      </h2>

      <form onSubmit={handleAdd} className="card p-4 shadow">
        <label className="form-label">id</label>
        <input
          type="number"
          name="id"
          className="form-control mb-3"
          value={student.id}
          onChange={handleChange}
          required
        />

        <label className="form-label">name</label>
        <input
          type="text"
          name="name"
          className="form-control mb-3"
          value={student.name}
          onChange={handleChange}
          required
        />

        <label className="form-label">age</label>
        <input
          type="number"
          name="age"
          className="form-control mb-3"
          value={student.age}
          onChange={handleChange}
          required
        />
          <label className="form-label">course</label>
 <input
          type="text"
          name="course"
          className="form-control mb-3"
          value={student.course}
          onChange={handleChange}
          required
        />

        <button type="submit" className="btn btn-success">
          Add Student
        </button>
      </form>
    </div>
  );
}

export default Add;
