import React from "react";
import '../App.css';
import { useNavigate } from "react-router-dom";


export default function Home() {
    
    let navigate = useNavigate();

    return (
       
        <div className="wrapper">

        
            <div className="welcome-cards">
                <div className="welcome-card">
                    <img src='https://orientation.ucsc.edu/images/stay-safe-banner-final.png' alt="welcome"></img>

                </div>
                    <div className="card">
                        <h1>Important Dates</h1>
                        <p>These are Dates</p>
                        <p>These are Dates</p>
                        <p>These are Dates</p>
                        <p>These are Dates</p>
                    </div>

                    <div className="card">
                        <h1>Announcements</h1>
                        <p>These are Announcements</p>
                        <p>These are Announcements</p>
                        <p>These are Announcements</p>
                        <p>These are Announcements</p>
                    </div>

                    <div className="card">
                        <h1>Class Schedule</h1>
                        <p>Class 1</p>
                        <p>Class 2</p>
                        <p>Class 3</p>
                    </div>
            

            </div>

            
            
                
            


        </div>
     
            
            
            
    )
}