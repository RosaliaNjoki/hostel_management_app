import React, { useState } from "react";
import "./Form.css";

const RoomForm = ({ onSubmit})=>{
    const [formData, setformData] = useState({
        
        room_number: "",
        room_capacity: "",
        hostel_id: "",

    });
    const roomCapacity =[1, 2, 3, 4];
    
    const handleChange = (e)=> {
        setformData({...FormDataEvent, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(formData);
        setformData({ room_number: "", room_capacity: "", hostel_id:"" });
    };
    return (
        <form className="form-container" onSubmit={handleSubmit}>
            <h2>Add Room</h2>
            <input
                name="room_number"
                placeholder="Room Number"
                value={formData.room_number}
                onChange={handleChange}
                required
            />
            <select
                name="room_capacity"
                value={formData.room_capacity}
                onChange={handleChange}
                required
            >
                <option value="" disabled>Select Capacity</option>
                {roomCapacity.map((cap, index)=>(
                    <option key={index} value={cap}>{cap}</option>
                ))}
            </select>
            <input 
                name="hostel_id"
                placeholder="Hostel ID"
                value={formData.hostel_id}
                onChange={handleChange}
                required
            />
            <button type="submit">Add Room</button>
        </form>
    );
};
export default RoomForm;