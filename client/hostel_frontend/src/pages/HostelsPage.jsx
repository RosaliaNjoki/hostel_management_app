import { useState, useEffect } from "react";
import HostelForm from "../components/HostelForm";
import "./Page.css";

const HostelsPage = () => {
    const [hostels, setHostels] = useState([]);
    

    useEffect(()=> { 
        fetch("http://127.0.0.1:5000/hostels")
            .then((res)=>res.json())
            .then((data) => setHostels(data))
            .catch((err)=>console.error("Error fetching hostels:", err));
    }, []);

    const handleAddHostel = (newHostel)=>{
        fetch("http://127.0.0.1:5000/hostels", {
            method: "POST",
            header: { "Content-Type": "application/json" },
            body: JSON.stringify(newHostel),
        })
            .then((res) => res.json())
            .then((hostel) => setHostels([...hostels,hostel]));
    };


    return(
        <div className="page">
           <h1>Hostels</h1> 
           <HostelForm onSubmit ={handleAddHostel} />

            <ul className = 'list'>
                {hostels.map((h)=>(
                    <li key={h.hostel_id}>{h.hostel_name} (Capacity: {h.hostel_capacit})</li>
                ))}
            </ul>
        </div>
    );
}

export default HostelsPage;