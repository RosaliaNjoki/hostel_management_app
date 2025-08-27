import { useState, useEffect } from "react";
import axios from "axios";

function RoomsPage() {
    const [rooms, setRooms] = useState([]);
    const [form, setForm] = useState({ room_number: "", room_capapcity:"", hostel_id: "" });
    
    useEffect(() =>{ fetchRooms(); },[]);
    
    const fetchRooms = async () => {
        const res = await axios.get("http://127.0.0.1:5000/rooms");
        setRooms(res.data);
            
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        await axios.post("http://127.0.0.1:5000/rooms", form);
        setForm({room_number: "", room_capacity: "", hostel_id: ""});
        fetchRooms();
    }
    

    return (
        <div>
            <h2>Rooms</h2>
            <form onSubmit = {handleSubmit}>
                <input placeholder="Room Number" value={form.room_number} onChange = {(e)=> setForm({...form, room_number: e.target.value})}/>
                <input type="number" placeholder="Capacity" value={form.room_capacity} onChange= {(e)=> setForm({...form, room_capacity: e.target.value })} />
                <button type="submit">Add Hostel</button> 
            </form>

            <ul>
                {rooms.map((r)=>(
                    <li key={r.room_id}>Room {r.room_number} (capacity:{r.room_capacity}) in Hostel {r.hostel_id}</li>
                ))}
            </ul>
        </div>
    );
}    

export default RoomsPage;