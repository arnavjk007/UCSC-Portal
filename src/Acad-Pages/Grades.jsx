import React from "react";
import '../App.css';
import { useNavigate } from "react-router-dom";

export default function Grades() {

    let navigate = useNavigate();

    return (
        
        <div className="wrapper">

            <div className="container">

                <main class="table" id="table">
                    <section class="table__header">
                        <h1>Grades </h1>
                    </section>
                    <section class="table__body">
                        <table>
                            <thead>
                                <tr>
                                
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                
                                </tr>
                                
                            </tbody>
                        </table>
                    </section>
                </main>
            </div>


        </div>
            
    )
}