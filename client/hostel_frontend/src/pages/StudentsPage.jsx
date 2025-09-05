import { useState, useEffect } from "react";
import StudentForm from "../components/StudentForm";
import "./Page.css";

const StudentsPage=()=>{
    const [students, setStudents]= useState([]);
    
    useEffect(() =>{
        fetch("http://127.0.0.1:5000/students")
            .then((res)=>res.json())
            .then((data)=>setStudents(data))
            .catch((err)=> console.error('Error fetching students:', err));

    }, []);

   
    const handleAddStudent = (newStudent) =>{
        fetch("http://127.0.0.1:5000/students", {
            Method: "POST",
            headers: {"Contet-Type": "application/json" },
            body: JSON.stringify(newStudent),
        })
          .then((res)=>res.json())
          .then((student)=> setStudents([...students, student]));  
    };

    return(
        <div className="page">
            <h1>Students</h1>
            <StudentForm onSubmit={handleAddStudent} />
            <ul className="list">
                {students.map((s)=>(
                    <li key={s.student_id}>
                        {s.first_name} {s.last_name} - {s.department} ({s.gender})
                    </li>
                ))}

            </ul>
        </div>
    );      
            
}

export default StudentsPage;