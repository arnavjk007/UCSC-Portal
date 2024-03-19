import React from "react";
import '../App.css';
import { useNavigate } from "react-router-dom";

export default function Committee() {

    let navigate = useNavigate();

    return (

            <div className="container">

                    <div className="info-card-container">
                        <div className="info-card">
                            <h1>Academic Committees</h1>
                            <hr></hr>
                            
                            <div className="info-body">
                                <div className="major">
                                    <h2>Major Advisors</h2>
                                    <h3 style={{padding: '10px'}}>Academic Program: </h3>
                                    <h3 style={{padding: '10px'}}>Academic Plan: </h3>
                                </div>
                
    
                                <section class="table__body" style={{maxHeight: '35vh', width:'100%', fontSize:'15px', border:'2px solid black'}}>
                                    <table className="table">
                                        <thead>
                                            <tr>
                                                <th style={{padding:'10px'}}> Committee </th>
                                                <th style={{padding:'10px'}}> Member Role </th>
                                                <th style={{padding:'10px'}}> Name </th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr onClick={() => navigate('/home')}>
                                                <td style={{padding:'10px'}}> Student Housing Services</td>
                                                <td style={{padding:'10px'}}> January 21</td>
                                                <td style={{padding:'10px'}}> New Hold</td>
                                            </tr>
                                            
                                        </tbody>
                                    </table>
                                </section>
                   
                            </div>
                        </div>

                    </div>
            </div>
            
    )
}