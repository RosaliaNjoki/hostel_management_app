import React from "react";
import Sidebar from "../components/Sidebar";
import Footer from "../components/Footer";
import "./HomePage.css";

const HomePage =()=>{
    return(
        <div className="layout">
            {/* Sidebar */}
            <Sidebar />

        <div className="homepage">
        {/* logo section */}
            <header className ="homepage-header">
                <img src="/images/logo.png" alt="Hostel Logo" className="logo" />
                <h1> Welcome to Our Hostel Management System</h1>
                <p>Comfort, Convenience, and Community - all in one place. </p>
            </header>
         {/* Banner Image */}
            <div>
                <img
                    src="/images/hostel2.png" 
                    alt="Hostel Banner"
                    className = "banner-image"
            />
            </div>
           
         {/* information Section */}
            <section className="info-section">
                <h2>About Our Hostel</h2>
                <p>
                    Our hostel offers a welcoming environment for students, with modern facilitis, safe accomodations, and a vibrant community. Manage students, rooms, hostels, and allocations seamlessly with our system.
                </p>
            </section> 
            {/* Footer */}
            <Footer />
        </div> 
        </div>      

    );
};

export default HomePage;