import { useState, useEffect } from "react";
import RoomForm from "../components/RoomForm";
import "./Page.css";

const RoomsPage =()=>{
    const [rooms, setRooms] = useState([]);
        
    useEffect(() =>{ 
        fetch("http://127.0.0.1:5000/rooms")
            .then((res) => res.json())
            .then((data) => setRooms(data))
            .catch((err)=> console.error("Error fetching rooms:", err));
  
    }, []);

    const handleAddRoom = (newRoom)=> {
        fetch("http://127.0.0.1:5000/rooms", {
            method: "POST",
            headers: { "Content-Type": "appliction/json" },
            body: JSON.stringify(newRoom),
        })
            .then((res) => res.json())
            .then((room)=> setRooms([...rooms, room]))
    };
    return(
        <div className="Page">
            <h1>Rooms</h1>
            <RoomForm onSubmit={handleAddRoom} />
                   
            <ul className="list">
                {rooms.map((r)=>(
                    <li key={r.room_id}>Room {r.room_number} (Capacity:{r.room_capacity}) - Hostel {r.hostel_id}</li>
                ))}
            </ul>
        </div>
    );
};    

export default RoomsPage;