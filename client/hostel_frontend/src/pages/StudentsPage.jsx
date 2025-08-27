import { useState, useEffect } from "react";
import axios from "axios";

function StudentsPage(){
    const [students, setStudents]= useState([])
    const [form, setForm]= useState({
        first_name: "",
        last_name: "",
        gender: "",
        department: ""
    });
    
    useEffect(() =>{
        fetchStudents();

    }, []);

    const fetchStudents = async () => {
        const res = await axios.get('https://127.0.0.1:5000/students');
        setStudents(res.data);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        await axios.post('http://127.0.0.1:5000/students', form);
        setForm({first_name: "", last_name: "", gender: "", department: ""});
        fetchStudents();
    };

    return (
        <div>
            <h2>Students</h2>
            {/*Add Student Form */}
            <form onSubmit={handleSubmit} style={{ marginBottom: "20px"}}>
                <input
                type = "text"
                placeholder = "First Name"
                value = {form.first_name}
                onChange={(e) => setForm({...form, gender: e.target.value })}
                required
                />
               
                <input 
                type = 'text'
                placeholder = "Last Name"
                value = {form.last_name}
                onChange = {(e) => setForm ({...form, last_name: e.target.value })}
                required 
                />

                <input
                type = "text"
                placeholder="Gender"
                value={form.gender}
                onChange={(e) => setForm({...form, gender: e.target.value})}
                required

                />

                <input
                type="text"
                placeholder="Department"
                value={form.department}
                onChange={(e)=>setForm({...form, department: e.target.value})}
                required
                />
                <button type='submit'>Add Student</button>

            </form>
            {/* display student */}
            <ul>
                {students.map((s)=>(
                    <li key={s.student_id}>
                        {s.first_name} {s.last_name} ({s.gender})-{s.department}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default StudentsPage;