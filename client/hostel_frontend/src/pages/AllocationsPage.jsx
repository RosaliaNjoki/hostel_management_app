import { useState, useEffect } from "react";
import axios from "axios";

function AllocationsPage() {
    const [allocations, setAllocations] = useState([]);
    const [form, setForm] = useState({ student_id: "", hostel_id: "", room_id:""});

    useEffect(()=>{ fetchAllocations(); }, []);

    const fetchAllocations = async ()=> {
        const res = await axios.get("http://127.0.0.1:5000/allocations");
        setAllocations(res.data);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        await axios.post("http://127.0.0.1:5000/allocations", form);
        setForm({ student_id: "", hostel_id: "", room_id: ""});
        fetchAllocations();
    };

    return(
        <div>
            <h2>Allocations</h2>
            <form onSubmit = {handleSubmit}>
                <input placeholder="Student ID" value={form.student_id} onChange={(e)=>setForm({...form, student_id: e.target.value })}/>
                <input placeholder="Hostel ID" value={form.hostel_id} onChange={(e)=>setForm({...form, hostel_id: e.target.value })}/>
                <input placeholder="Room ID" value={form.room_id} onChange={(e)=>setForm({...form, room_id: e.target.value })}/>
                <button type="submit">Allocate</button>
            </form>
            <ul>
                {allocations.map((a)=>
                <li key={a.allocation_id}>Student{a.student_id}, Hostel{a.hostel_id}, Room{a.room_id}</li>
                )}
            </ul>
        </div>
    );
}

export default AllocationsPage;