import { useState, useEffect } from "react";
import axios from "axios";

function HostelsPage(){
    const [hostels, setHostels] = useState([]);
    const [form, setForm] = useState({ hostel_name: "", hostel_capacity: ""});

    useEffect(()=> { fetchHostels(); }, []);

    const fetchHostels = async ()=>{
        const res = await azios.get("http://127.0.0.1:5000/hostels");
        setHostels(res.data);
    };

    const handleSubmit = async (e)=>{
        e.preventDefault();
        await axios.post("http://127.0.0.1:5000/hostels", form);
        setForm({hostel_name: "", hostel_capacity: ""});
        fetchHostels();
    };

    return(
        <div>
           <h2>Hostels</h2> 
           <form onSubmit ={handleSubmit}>
            <input placeholder = "Hostel Name" value={form.hostel_name} onChange = {(e)=> setForm({...form, hostel_name: e.target.value })} />
            <input type = "number" placeholder = "Capacity" value = {form.hostel_capacity} onChange={(e)=> setForm({...form, hostel_capacity: e.target.value})}/>
            <button type = "submit">Add Hostel</button>
            </form>

            <ul>
                {hostels.map((h)=>(
                    <li key={h.hostel_id}>{h.hostel_name} (Capacity: {h.hostel_capacit})</li>
                ))}
            </ul>
        </div>
    );
}

export default HostelPage;