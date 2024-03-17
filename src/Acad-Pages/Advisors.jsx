import React from "react";
import '../App.css';
import { useNavigate } from "react-router-dom";

export default function Advisors() {

    let navigate = useNavigate();

    return (
        
        <div className="wrapper">

            <div className="container">

                    <div className="info-card-container">
                        <div className="info-card">
                            <h1>Advisors</h1>
                            <hr></hr>
                            
                            <div className="info-body">
                                <div className="major">
                                    <h2>Major Advisors</h2>
                                    <h3 style={{padding: '10px'}}>Academic Program: Undergraduate</h3>
                                    <h3 style={{padding: '10px'}}>Proposed Major: Computer Science</h3>
                                    <h3 style={{padding: '10px'}}>Contact: <a href="mailto:advising@soe.ucsc.edu">advising@soe.ucsc.edu</a></h3>
                                </div>
                                <div className="college">
                                    <h2>College Advisors</h2>
                                    <h3 style={{padding: '10px'}}>Academic Program: Undergraduate</h3>
                                    <h3 style={{padding: '10px'}}>College: Merrill</h3>
                                    <h3 style={{padding: '10px'}}>Contact: <a href="mailto:merrilladvising@ucsc.edu">merrilladvising@ucsc.edu </a></h3>
                                </div>
                            </div>
                        </div>

                    </div>
            </div>


        </div>
            
    )
}