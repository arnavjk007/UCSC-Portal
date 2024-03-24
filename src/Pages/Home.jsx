import React from "react";
import '../App.css';
import { useNavigate } from "react-router-dom";


export default function Home() {
    
    let navigate = useNavigate();
    // replace with carousel
    return (
            <div>
                <div className="welcome-cards">
                    <div className="welcome-card">
                        <img src='https://orientation.ucsc.edu/images/stay-safe-banner-final.png' alt="welcome"></img>
                    </div>
                </div>
                <div className="home-container">
                    <div className="hstack" style={{margin: '0', maxHeight: '55vh'}}>
                        <div className="slim-card">
                            <div className="info-container">
                                <h2>News 1</h2>
                                <hr></hr>
                            </div>
                        </div>

                        <div className="slim-card">
                            <div className="info-container">
                                <h2>News 1</h2>
                                <hr></hr>
                            </div>
                        </div>

                        <div className="slim-card">
                            <div className="info-container">
                                <h2>News 1</h2>
                                <hr></hr>
                            </div>
                        </div>

                        <div className="slim-card">
                            <div className="info-container">
                                <h2>News 1</h2>
                                <hr></hr>
                            </div>
                        </div>

                        <div className="slim-card">
                            <div className="info-container">
                                <h2>News 1</h2>
                                <hr></hr>
                            </div>
                        </div>
                    </div>
                </div>
                
            </div>

    )
}