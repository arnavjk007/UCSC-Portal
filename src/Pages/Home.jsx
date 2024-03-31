import React from "react";
import '../App.css';
import { useNavigate } from "react-router-dom";
import { RiNumber1 } from "react-icons/ri";

export default function Home() {
    
    let navigate = useNavigate();

    // replace with carousel
    return (
            <div className="home-container">
                <div className="banner">
                    <div className="banner-card">
                        <div className="welcome-box">

                        </div>
                    </div>
                </div>

                <div className="home-cards">
                    <div className="home-grid">
                            <div className="card">
                                <h1>Messages</h1>
                                <hr></hr>
                                <RiNumber1 size={150}/>
                            </div>

                            <div className="card">
                                <h1>Messages</h1>
                                <hr></hr>
                                <RiNumber1 size={150}/>
                            </div>

                            <div className="card">
                                <h1>Messages</h1>
                                <hr></hr>
                                <RiNumber1 size={150}/>
                            </div>

                            <div className="card">
                                <h1>Messages</h1>
                                <hr></hr>
                                <RiNumber1 size={150}/>
                            </div>

                            <div className="card">
                                <h1>Messages</h1>
                                <hr></hr>
                                <RiNumber1 size={150}/>
                            </div>

                            <div className="card">
                                <h1>Messages</h1>
                                <hr></hr>
                                <RiNumber1 size={150}/>
                            </div>
                        
                    </div>

                    <div className="home-misc">
                        
                    </div>
                </div>
            </div>

    )
}