import React from "react";
import '../App.css';
import { useNavigate } from "react-router-dom";

export default function Advisors() {

    let navigate = useNavigate();

    return (
        
        <div className="wrapper">

            <div className="container">

                <main class="table" id="table">
                    <section class="table__header">
                        <h1>Advisors </h1>
                    </section>

                    <div className="advisor-card-container">
                        <div className="advisor-card-1">
                            <h1>JOE</h1>
                        </div>

                        <div className="advisor-card-2">
                            <h1>MAMA</h1>
                        </div>
                    </div>
                    
                </main>
            </div>


        </div>
            
    )
}