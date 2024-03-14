import React from "react";
import '../App.css';
import { useNavigate } from "react-router-dom";
import { FaCheck } from "react-icons/fa";
import { FaDiamond } from "react-icons/fa6";
import { FaStarOfLife } from "react-icons/fa";
import { ImCross } from "react-icons/im";

export default function Degree() {


    // FIX OVERFLOW 
    return (
        
        <div className="wrapper">

            <div className="container">
                <div className="hstack">
                    <div className="new-card">
                        <div className="info-container">
                            <h2> Academic Summary </h2>
                            <hr></hr>
                            
                            <div className="info">
                                <h3> UC GPA: </h3>
                                <p> 2.0 minimum required </p>
                            </div>

                            <div className="info">
                                <h3> Total Credits: </h3>
                                <p> 180 credits minimum required </p>
                            </div>

                            <div className="info">
                                <h3> % Graded Pass(P): </h3>
                                <p> No more than 25% </p>
                            </div>

                            <div className="info">
                                <h3> Senior Residency: </h3>
                                <p> <a>Learn more </a> about senior residency. </p>
                            </div>

                            <div className="info">
                                <p> *Metrics are based on completed coursework* </p>
                                <p> <a>Learn more </a> about senior residency. </p>
                                <p> <a>Learn more </a> about senior residency. </p>
                            </div>
                        </div>

                    </div>

                    <div className="new-card">
                        <div className="info-container">
                            <h2> Academic Objectives </h2>
                            <hr></hr>

                            <table className="info-table">
                                <tr>
                                    <th> Expected Graduation Date </th>
                                    <td> 2080 Spring Quarter </td>
                                </tr>
                                <tr>
                                    <th> Program </th>
                                    <td> Undergraduate </td>
                                </tr>
                                <tr>
                                    <th> Plan </th>
                                    <td> Computer Science (BS) </td>
                                </tr>
                                <tr>
                                    <th> Req (Catalog) Term </th>
                                    <td> 2023 Fall Quarter </td>
                                </tr>
                            </table>
                        </div>
                    </div>

                    <div className="slim-card">
                        <div className="info-container">
                            <h2> Degree Progress Report Information </h2>
                            <hr></hr>

                            <div className="info">
                                <p style={{fontSize:'16px'}}>The Degree Progress Report (DPR) is a tool to help track your progress toward graduation. Resources are available for all users to aid in the use of the DPR. 
                                    Contact your major or college advisor with any questions about graduation requirements. The DPR is being updated as part of the Degree Audit Initiative. 
                                    More information about the initiative, as well as the current status of each program, is available on the initiative website. (RG2398)</p>
                            </div>
                        </div>
                    </div>

                    <div className="slimmer-card">
                        <div className="info-container">
                            <h2> Legend </h2>
                            <hr></hr>
                            

                            <div className="legend-container">
                            <div className="legend-item">
                                    <FaCheck style={{color:'green'}} size={30}/>
                                    <p>Satisfied</p>
                                </div>

                                <div className="legend-item">
                                    <ImCross style={{color:'red'}} size={30}/>
                                    <p>Not Satisfied</p>
                                </div>

                                <div className="legend-item">
                                    <FaDiamond style={{color:'rgb(232, 171, 16)'}} size={30}/>
                                    <p>In Progress</p>
                                </div>

                                <div className="legend-item">
                                    <FaStarOfLife size={30}/>
                                    <p>Exception</p>
                                </div>
                            </div>
                        </div>

                        
                    </div>

                </div>

                
                
            </div>


        </div>
            
    )
}