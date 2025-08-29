import {Link} from "react-router-dom";

function Navbar(){
    return(
        <nav style={{padding: "1rem", background: "#282c34", color: "white" }}>
            <Link to = "/" style={{margin:"1rem", color: "white" }}>Students</Link>
            <Link to = "/hostels" style={{margin: "1rem", color: "white" }}>Hostels</Link>
            <Link to = "/rooms" style ={{margin: "1rem", color: "white" }}>Rooms</Link>
            <Link to = "/allocations" style={{color: "white" }}>Allocations</Link>

        </nav>
    );
}

export default Navbar;