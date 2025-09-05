import React, {useState} from "react";
import "./Form.css";

const StudentForm =({ onSubmit })=>{
    const [formData, setFormData]=useState({
        first_name: "",
        last_name: "",
        gender: "",
        department:"",
    });
    const departments = [
        'Computer Science',
        'Information Science', 
        "Economics",
        "Engineering", 
        "Education",
        "Mathematics"
    
    ];

    const handleChange = (e) => {
        setFormData({...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e)=>{
        e.preventDefault();
        onSubmit(formData);
        setFormData({first_name: "", last_name: "", gender: "", department: ""})
    };

    return (
        <form className="form-container" onSubmit = {handleSubmit}>
            <h2>Add Student</h2>
            <input 
                name="first_name"
                placeholder="First Name"
                value={formData.first_name}
                onChange={handleChange}
                required
            />
            <input
                name="last_name"
                placeholder="Last Name"
                value={formData.last_name}
                onChange={handleChange}
                require
            />
            <select 
                name="gender"
                value={formData.gender}
                onChange={handleChange}
                required
            >
                <option value="" disabled>Select Gender</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>

            </select>
            <select 
                name="department"
                value = {formData.department}
                onChange={handleChange}
                required
            >
                <option value = "" disabled>Select your department </option>
                {departments.map((dept, index)=>(
                    <option key={index} value={dept}>{dept}</option>
                ))}
        
            </select>    
            <button type="submit">Add Student</button>


        </form>
    );
};
export default StudentForm;