import React from "react";
import '../App.css';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import { IoIosArrowDropdown } from "react-icons/io";
import { useNavigate } from "react-router-dom";

export default function Credit() {

    let navigate = useNavigate();

    const credit_data = [
        {
            title: 'Course Credits',
            institution: 'UC Santa Cruz',
            career: 'Undergraduate',
            program: 'Undergraduate'
        },
        {
            title: 'Test Credits',
            institution: 'UC Santa Cruz',
            career: 'Undergraduate',
            program: 'Undergraduate'
        },
        {
            title: 'Other Credits',
            institution: 'UC Santa Cruz',
            career: 'Undergraduate',
            program: 'Undergraduate'
        },
    ]

    return (
            <div className="container">
                <div className="info-card" style={{maxWidth:'none', padding:'3%'}}>
                    <h1> Transfer Credit Report </h1>
                    <hr></hr>

                    <div className="info-body">
                        {credit_data.map((item) => {
                            return (
                                <Accordion style={{background:'rgb(40, 100, 150)', margin:'1%', color:"yellow", borderRadius:'16px'}} defaultExpanded>
                                    <AccordionSummary
                                    expandIcon={<IoIosArrowDropdown color="yellow" size={30}/>}
                                    aria-controls="panel1-content"
                                    id="panel1-header"
                                    >
                                    <h3>{item.title}</h3>
                                    </AccordionSummary>
                                    <AccordionDetails style={{color:'white'}}>
                                    <h5>Institution: {item.institution}</h5>
                                    <h5>Career: {item.career}</h5>
                                    <h5>Program: {item.program}</h5>

                                    <section class="table__body" style={{height: 'fit-content', width:'100%', fontSize:'15px', border:'1px solid black'}}>
                                        <table id="table" >
                                            <thead>
                                                <tr style={{color: 'black', borderBottom:'2px solid black'}}>
                                                    <th style={{padding:'5px'}}> Term </th>
                                                    <th style={{padding:'5px'}}> Test ID </th>
                                                    <th style={{padding:'5px'}}> Test Component </th>
                                                    <th style={{padding:'5px'}}> Description </th>
                                                    <th style={{padding:'5px'}}> Score </th>
                                                    <th style={{padding:'5px'}}> Status </th>
                                                    <th style={{padding:'5px'}}> Equivalent Course </th>
                                                    <th style={{padding:'5px'}}> Units </th>
                                                    <th style={{padding:'5px'}}> Grade </th>
                                                </tr>
                                            </thead>
                                            <tbody className="no-hover"> 
                                                    <tr style={{borderTop: '1px solid black', borderBottom:'1px solid black', fontSize:'13px', color:'black'}}>
                                                        <td style={{padding:'5px', fontWeight:'bolder'}}> 2023 Fall Quarter </td>
                                                        <td style={{padding:'5px'}}> APV </td>
                                                        <td style={{padding:'5px'}}> 07 </td>
                                                        <td style={{padding:'5px'}}> United States History </td>
                                                        <td style={{padding:'5px'}}> 5.00 </td>
                                                        <td style={{padding:'5px'}}> Posted </td>
                                                        <td style={{padding:'5px'}}> TRCR/AP/IB </td>
                                                        <td style={{padding:'5px'}}> 8.000 </td>
                                                        <td style={{padding:'5px'}}> T </td>
                                                    </tr>
                                                        
                                            </tbody>
                                        </table>
                                    </section>
                                    
                                    </AccordionDetails>
                                </Accordion>
                            )
                        })}

                    </div>
                </div>
            </div>
    )
}