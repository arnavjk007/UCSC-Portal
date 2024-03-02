import React from "react";
import '../App.css';
import { useNavigate } from "react-router-dom";

export default function Whatif() {

    let navigate = useNavigate();

    return (
        
        <div className="wrapper">

            <div className="container">

                <main class="table" id="table">
                    <section class="table__header">
                        <h1>What-if Report </h1>
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