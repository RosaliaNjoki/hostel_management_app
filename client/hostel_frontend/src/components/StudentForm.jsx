import React, {useState} from "react";
import "./Form.css";

const StudentForm =({ onSubmit })=>{
    const [formData, setFormData]=useState({
        first_name: "",
        last_name: "",
        gender: "",
        department:"",
    });

    const handleChange = (e) => {
        setFormData({...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e)=>{
        e.preventDefault();
        onSubmit(formData);
        setFormData({first_name: "", last_name: "", gender: "", department: ""})
    };

    return (
        <form onSubmit = {handleSubmit}>
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
                onChnge={handleChange}
                require
            />
            <select 
                name="gender"
                value={formData.gender}
                onchange={handleChange}
                required
            >
                <option value="">Select Gender</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>

            </select>
            <select 
                name="department"
                value = {formData.department}
                onChange={handleChange}
                required
            >
                <option value = "" disabled>Select Your Department </option>
                <option value = "Computer Science ">Computer Science </option>
                <option value = "Mathematics" >Mathematics </option>
                <option value = "Economics" >Economics </option>
                <option value = "Education" > Education </option>
                <option value = "Information Science" >Information Science </option>
                <option value = "Engineering"> Engineering </option>
        
            </select>    
            <button type="submit">Add Student</button>


        </form>
    );
};
export default StudentForm;