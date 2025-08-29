import React, { useState } from "react";
import "./Form.css";

const HostelForm = ({ onSubmit }) => {
    const [formData, setFormData] = useState({
        hostel_name: "",
        hostel_capacity: "",
    });

    const capacities =[50, 100, 150, 200,250, 300];

    const handleChange = (e) => {
        setFormData({...formData, [e.target.name]: e.target.value });

    };
    const handleSubmit = (e)=> {
        e.preventDefault();
        onSubmit(formData);
        setFormData({hostel_name: "", hostel_capacity: "" });
    };
    return (
        <form onSubmit={handleSubmit}>
            <h2>Add Hostel</h2>
            <input 
                name="hostel_name" 
                placeholder="Hostel Name" 
                value={formData.hostel_name} 
                onChange={handleChange} 
                required 
            />
           
            <select
                name="hostel_capacity"
                value={formData.hostel_capacity}
                onChange={handleChange}
                required
            >  
            <option value="">Select Capacity</option>  
            {capacities.map((cap, index)=>(
                <option key={index} value={cap}>{cap}</option>
            ))}

            </select>
            <button type="submit">Add Hostel</button>


        </form>
    );
};
export default HostelForm;