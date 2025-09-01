import React from "react";
import "./Footer.css";

const Footer =()=>{
    return (
        <footer className="footer">
            <p>© {new Date().getFullYear()} Hostel Management System</p>
            <div className="footer-socials">
                <a href='https://facebook.com' target="_blank" rel="noopener nonreferrer">Facebook</a>
                <a href="https://x.com" target="_blank" rel="noopener nonreferrer">X/Twitter</a>
                <a href="https://instagram.com" target="_blank" rel="noopener nonreferrer">Instagram</a>
            </div>    
        </footer>
    );

};
export default Footer;
