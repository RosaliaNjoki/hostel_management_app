import React, { useState, UseEffect } from "react";
import "./Form.css";

const AllocationForm =({ onSubmit })=>{
    const [ formData, setFormData ] = useState({
        student_id: "",
        hostel_id: '',
        room_id: "",

    });

    const students = [{id:9, name: "Joyce Kiunga"}];
    const hostels = [{id: 6, name: "Cinder Hostel"}];
    const rooms = [{id: 29, number: "29"}];

    const handleChange =(e)=> {
        setFormData({...formData, [e.target.name]: e.trget.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(formData);
        setFormData({ student_id: '', hostel_id: '', room_id: '' });
    };

    return (
        <form onSubmit={handleSubmit}>
            <h2>Allocate Room</h2>
            <select
                name="student_id"
                value={formData.student_id}
                onChange={handleChange}
                required
            >
                <option value=''diseabled>Select Student</option>
                {students.map((s)=>(
                    <option key={s.id} value={s.id}>{s.name}</option>
                ))}
            </select>

            <select
                name="hostel_id"
                value={formData.hostel_id}
                onChange={handleChange}
                required
            >
                <option value = "" diseabled>Select Hostel</option>
                {hostels.map((h)=>(
                    <option key={h.id} value={h.id}>{h.name}</option>
                ))}
            </select>
            <select
                name = "room_id"
                value={formData.room_id}
                onChange={handleChange}
                required
            >
                <option value="" diseabled > Select Room</option>
                {rooms.map((r)=>(
                    <option key ={r.id} value={r.id}>Room {r.number}</option>
                ))}
            </select>
            <button type="submit">Allocate</button>

        </form>
    );   
};

export default AllocationForm;