import React from "react";
import "./Footer.css";

const Footer =()=>{
    return (
        <footer ClassName="footer">
            <p>© {new Date().getFullYear()} Hostel Management System</p>
            <div className="footer-socials">
                <a href='https://facebook.com' target="_blank" rel="nonreferrer">Facebook</a>
                <a href="https://x.com" target="_blank" rel="nonreferrer">X/Twitter</a>
                <a href="https://instagram.com" target="_blank" rel="nonreferrer">Instagram</a>
            </div>    
        </footer>
    );

};
export default Footer;
