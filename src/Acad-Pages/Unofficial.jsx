import React from "react";
import '../App.css';
import { useNavigate } from "react-router-dom";

export default function Unofficial() {

    let navigate = useNavigate();

    return (
            <div className="container">
                <div className="info-card" style={{maxWidth:'none', padding:'3%'}}>
                    <h1> Unofficial Transcript </h1>
                    <hr></hr>

                    <div className="info-body">
                        <p>	
                            Choose an institution and report type and press View Report
                             **This process may take a few minutes to complete. Please do 
                             not press any other buttons or links while processing is taking place**
                        </p>

                        <p> Academic Institution: 
                            <select className="dropdown">
                                <option value="UC Santa Cruz"> UC Santa Cruz </option>
                            </select>             
                        </p>

                        <p> Report Type: 
                            <select className="dropdown">
                                <option value="Printable Transcript (PDF)"> Printable Transcript (PDF) </option>
                                <option value="Viewable Transcript (HTML)"> Viewable Transcript (HTML) </option>
                            </select>             
                        </p>

                        <button className="form-btn" > View Report </button>

                        <p> Past Requests </p>
                        <hr></hr>

                        <section class="table__body" style={{height: 'fit-content', width:'100%', fontSize:'15px', border:'1px solid black'}}>
                            <table id="table" >
                                <thead>
                                    <tr style={{color: 'black', borderBottom:'2px solid black'}}>
                                        <th style={{padding:'5px'}}>  </th>
                                        <th style={{padding:'5px'}}> Request Date </th>
                                        <th style={{padding:'5px'}}> Description </th>
                                        <th style={{padding:'5px'}}> Institution </th>
                                        <th style={{padding:'5px'}}> User ID </th>
                                    </tr>
                                </thead>
                                <tbody className="no-hover"> 
                                        <tr style={{borderTop: '1px solid black', borderBottom:'1px solid black', fontSize:'13px', color:'black'}}>
                                            <td style={{padding:'5px', fontWeight:'bolder'}}> <button className="report-btn" > View Report </button></td>
                                            <td style={{padding:'5px'}}> 03/30/2024 </td>
                                            <td style={{padding:'5px'}}> Printable Transcript (PDF) </td>
                                            <td style={{padding:'5px'}}> UCSCM </td>
                                            <td style={{padding:'5px'}}> 11111111 </td>
                                        </tr>
                                            
                                </tbody>
                            </table>
                        </section>
                    </div>
                </div>
            </div> 
    )
}