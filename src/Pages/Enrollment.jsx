import React from "react";
import '../App.css';
import { useNavigate } from "react-router-dom";

export default function Enrollment() {
    
    let navigate = useNavigate();

    const enrollment_data = [
        {
            id: 'CSE 13S',
            name: 'Comp Sys & C Prog',
            professor: 'Kerry Scott Veenstra',
            credits: '7.00',
            time: 'MWF 9:20 ⁠—⁠ 10:25AM @ Earth&Marine B206',
            lab: 'Th 2:00 ⁠—⁠⁠ 3:00PM @ Kresge Acad 3401',
        },
        {
            id: 'CSE 13S',
            name: 'Comp Sys & C Prog',
            professor: 'Kerry Scott Veenstra',
            credits: '7.00',
            time: 'MWF 9:20 ⁠—⁠ 10:25AM @ Earth&Marine B206',
            lab: 'Th 2:00 ⁠—⁠⁠ 3:00PM @ Kresge Acad 3401',
        },

    ]

    const unit_dropdown = [
        {
            cred: ' '
        },
        {
            cred: '1'
        },
        {
            cred: '2'
        },
        {
            cred: '3'
        },
        {
            cred: '4'
        },
        {
            cred: '5'
        },
        {
            cred: '6'
        },
        {
            cred: '7'
        },
    ]

    const term_dropdown = [
        {
            term: 'Spring 24\''
        },
        {
            term: 'Winter 24\''
        },
        {
            term: 'Fall \'23'
        },
    ]

    const status_dropdown = [
        {
            status: ' Open'
        },
        {
            status: ' All'
        },
    ]

    const subject_dropdown = [
        {
            subject: ' '
        },
        {
            subject: 'All Subjects'
        },
        {
            subject: 'Anthropology'
        },
        {
            subject: 'Applied Linguistics'
        },
    ]

    const genEd_dropdown = [
        {
            genEd: 'A'
        },
        {
            genEd: 'C'
        },
        {
            genEd: 'C1'
        },
    ]

    const meetingdays_dropdown = [
        {
            day: ' '
        },
        {
            day: 'All Days'
        },
        {
            day: 'MTuWTh'
        },
    ]

    const meetingtime_dropdown = [
        {
            time: ' '
        },
        {
            time: 'All Times'
        },
        {
            time: 'Morning'
        },
        {
            time: 'Afternoon'
        },
        {
            time: 'Evening'
        },
    ]

    return (
        <div className="wrapper">
            <div className="container" style={{display: 'block'}}>
                <main class="table" id="table" style={{height: 'fit-content'}}>
                    <section class="table__header" style={{padding: '10px'}}>
                        <h1>Class Schedule</h1>
                    </section>
                    <section class="table__body">
                        <table>
                            <thead>
                                <tr>
                                    <th style={{padding:'10px'}}> ID </th>
                                    <th style={{padding:'10px'}}> Name </th>
                                    <th style={{padding:'10px'}}> Professor </th>
                                    <th style={{padding:'10px'}}> Credits </th>
                                    <th style={{padding:'10px'}}> Time </th>
                                    <th style={{padding:'10px'}}> Lab </th>
                                </tr>
                            </thead>
                            <tbody>
                                {enrollment_data.map((item) => {
                                    return (
                                        <tr>
                                            <td style={{padding:'15px'}}> {item.id} </td>
                                            <td style={{padding:'15px'}}> {item.name} </td>
                                            <td style={{padding:'15px'}}> {item.professor} </td>
                                            <td style={{padding:'15px'}}> {item.credits} </td>
                                            <td style={{padding:'15px'}}> {item.time} </td>
                                            <td style={{padding:'15px'}}> {item.lab} </td>
                                        </tr>
                                    );
                                })}
                            </tbody>
                        </table>
                    </section>
                </main>
                
                <div className="enrollment-cards">
                    <div className="search-card">
                        <h2>Class Search</h2>
                        <div className="row">
                            <input className="search"type="text" placeholder="Search.."></input>
                            <h3>Units:</h3>
                            <select className="unit">
                                {unit_dropdown.map((item) => {
                                    return (
                                        <option>{item.cred}</option>
                                    )
                                })}
                            </select>
                        </div>

                        <div className="row">
                            <h3>Term: </h3>
                            <select className="term">
                                {term_dropdown.map((item) => {
                                    return (
                                        <option>{item.term}</option>
                                    )
                                })}
                            </select>
                            <h3 style={{marginLeft:'30px'}}>Status: </h3>
                            <select className="status">
                                {status_dropdown.map((item) => {
                                    return (
                                        <option>{item.status}</option>
                                    )
                                })}
                            </select>
                            <h3 style={{marginLeft:'30px'}}>Subject: </h3>
                            <select className="subject">
                                {subject_dropdown.map((item) => {
                                    return (
                                        <option>{item.subject}</option>
                                    )
                                })}
                            </select>
                        </div>

                        <div className="row">
                            <h3>Gen Ed: </h3>
                            <select className="gen-ed">
                                {genEd_dropdown.map((item) => {
                                    return (
                                        <option>{item.genEd}</option>
                                    )
                                })}
                            </select>

                            <h3 style={{marginLeft:'10px'}}>Meeting Days: </h3>
                            <select className="meeting-days">
                                {meetingdays_dropdown.map((item) => {
                                    return (
                                        <option>{item.day}</option>
                                    )
                                })}
                            </select>

                            <h3 style={{marginLeft:'10px'}}>Meeting Time: </h3>
                            <select className="meeting-time">
                                {meetingtime_dropdown.map((item) => {
                                    return (
                                        <option>{item.time}</option>
                                    )
                                })}
                            </select>
                        </div>

                    </div>


                    <div className="cart-card">
                        <h2>Shopping Cart</h2>
                        
                    </div>
                </div>




            </div>
        </div>     
    )
}