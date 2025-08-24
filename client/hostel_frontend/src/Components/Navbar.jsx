import {Link} from "react-router-dom";

function Navbar(){
    return(
        <nav style={{padding: "10px", background: "#333", color: "white" }}>
            <Link to = "/" style={{margin: "0 10px", color: "white" }}>Students</Link>
            <Link to = "/hostels" style={{margin: "0 10px", color: "white" }}>Hostels</Link>
            <Link to = "/rooms" style ={{margin: "0 10px", color: "white" }}>Rooms</Link>
            <Link to = "/rooms" style={{margin: "0 10px", color: "white" }}>Allocations</Link>

        </nav>
    );
}