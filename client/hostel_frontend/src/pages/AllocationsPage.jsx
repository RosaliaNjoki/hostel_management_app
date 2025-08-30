import { useState, useEffect } from "react";
import AllocationForm from "../components/AllocationForm";
import "./Page.css";

const AllocationsPage=()=>{
    const [allocations, setAllocations] = useState([]);
    

    useEffect(()=>{ 
        fetch("http://127.0.0.1:5000/allocations")
            .then((res)=>res.json())
            .then((data)=>setAllocations(data))
            .catch((err)=> console.error("Error fetching allocations:", err));
    }, []);    
    
    const handleAddAllocation = (newAllocation)=>{
        fetch("http://127.0.0.1:5000/allocations", {
            method: "POST",
            headers: { "Content-Type": "application/json"},
            body: JSON.stringify(newAllocation),
        })
            .then((res)=res.json())
            .then((allocation)=>setAllocations([...allocations, allocation]));
        
    };

    return(
        <div className="page"> 
            <h1>Allocations</h1>
            <AllocationForm onSubmit={handleAddAllocation} />
            <ul className="list">
                {allocations.map((a)=>
                <li key={a.allocation_id}>Student{a.student_id} Hostel{a.hostel_id}, Room{a.room_id}</li>
                )}
            </ul>
        </div>
    );
}

export default AllocationsPage;