import React from "react";
import { Link } from "react-router-dom";
import "./Sidebar.css";

const Sidebar = () => {
    return (
        <aside className="sidebar">
            <h2 className="sidebar-title">Hostel App</h2>
            <nav>
                <ul>
                    <li><Link to ="/" style={{ textDecoration: 'none', color: 'inherit' }}>Home</Link ></li>
                    <li><Link to ="/about" style={{ textDecoration: 'none', color: 'inherit' }}> About</Link></li>
                    <li><Link to ="/contact" style={{ textDecoration: 'none', color: 'inherit' }}> Contact Us</Link></li>
                    <li><Link to ="/reserve" style={{ textDecoration: 'none', color: 'inherit' }}> Reserve/Book</Link></li>
                    <li><Link to ="/login" style={{ textDecoration: 'none', color: 'inherit' }}>Login</Link></li>
                    <li><Link to ="/payment" style={{ textDecoration: 'none', color: 'inherit' }}> Payment</Link></li>
                    
                </ul>
            </nav>
        </aside>

    );
};

export default Sidebar;