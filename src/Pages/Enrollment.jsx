import React from "react";
import '../App.css';
import { useNavigate } from "react-router-dom";
import { FaRegCircleXmark } from "react-icons/fa6";

export default function Enrollment() {
    
    let navigate = useNavigate();

    function deleteClass(index) {
        document.getElementById(index).remove();
    }

    const enrollment_data = [
        {
            index: '0',
            id: 'CSE 13S',
            name: 'Comp Sys & C Prog',
            professor: 'K. Veenstra',
            credits: '7',
            time: 'MWF 9:20 ⁠—⁠ 10:25AM @ Earth&Marine B206',
            lab: 'Th 2:00 ⁠—⁠⁠ 3:00PM @ Kresge Acad 3401',
        },
        {
            index: '0',
            id: 'CSE 13S',
            name: 'Comp Sys & C Prog',
            professor: 'K. Veenstra',
            credits: '7',
            time: 'MWF 9:20 ⁠—⁠ 10:25AM @ Earth&Marine B206',
            lab: 'Th 2:00 ⁠—⁠⁠ 3:00PM @ Kresge Acad 3401',
        },
        {
            index: '0',
            id: 'CSE 13S',
            name: 'Comp Sys & C Prog',
            professor: 'K. Veenstra',
            credits: '7',
            time: 'MWF 9:20 ⁠—⁠ 10:25AM @ Earth&Marine B206',
            lab: 'Th 2:00 ⁠—⁠⁠ 3:00PM @ Kresge Acad 3401',
        },
        {
            index: '0',
            id: 'CSE 13S',
            professor: 'K. Veenstra',
            credits: '7',
            time: 'MWF 9:20 ⁠—⁠ 10:25AM @ Earth&Marine B206',
            lab: 'Th 2:00 ⁠—⁠⁠ 3:00PM @ Kresge Acad 3401',
        },
        {
            index: '1',
            id: 'CSE 13S',
            professor: 'K. Veenstra',
            credits: '7',
            time: ' Earth&Marine B206',
            lab: 'Th 2:00 ⁠—⁠⁠ 3:00PM @ Kresge Acad 3401',
        },
        {
            index: '0',
            id: 'CSE 13S',
            professor: 'K. Veenstra',
            credits: '7',
            time: 'MWF 9:20 ⁠—⁠ 10:25AM @ Earth&Marine B206',
            lab: 'Th 2:00 ⁠—⁠⁠ 3:00PM @ Kresge Acad 3401',
        },
        {
            index: '0',
            id: 'CSE 13S',
            professor: 'K. Veenstra',
            credits: '7',
            time: 'MWF 9:20 ⁠—⁠ 10:25AM @ Earth&Marine B206',
            lab: 'Th 2:00 ⁠—⁠⁠ 3:00PM @ Kresge Acad 3401',
        },
        {
            index: '0',
            id: 'CSE 13S',
            professor: 'K. Veenstra',
            credits: '7',
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

    var cart_data = [
        {
            index: '0',
            id: 'CSE 13S',
            name: 'Comp Sys & C Prog',
            professor: 'K. Veenstra',
            credits: '7',
            time: 'MWF 9:20 ⁠—⁠ 10:25AM @ Earth&Marine B206',
            lab: 'Th 2:00 ⁠—⁠⁠ 3:00PM @ Kresge Acad 3401',
        },
        {
            index: '1',
            id: 'CSE 13S',
            name: 'Comp Sys & C Prog',
            professor: 'K. Veenstra',
            credits: '7',
            time: ' Earth&Marine B206',
            lab: 'Th 2:00 ⁠—⁠⁠ 3:00PM @ Kresge Acad 3401',
        },
        {
            index: '0',
            id: 'CSE 13S',
            name: 'Comp Sys & C Prog',
            professor: 'K. Veenstra',
            credits: '7',
            time: 'MWF 9:20 ⁠—⁠ 10:25AM @ Earth&Marine B206',
            lab: 'Th 2:00 ⁠—⁠⁠ 3:00PM @ Kresge Acad 3401',
        },
        {
            index: '0',
            id: 'CSE 13S',
            name: 'Comp Sys & C Prog',
            professor: 'K. Veenstra',
            credits: '7',
            time: 'MWF 9:20 ⁠—⁠ 10:25AM @ Earth&Marine B206',
            lab: 'Th 2:00 ⁠—⁠⁠ 3:00PM @ Kresge Acad 3401',
        },
        {
            index: '0',
            id: 'CSE 13S',
            name: 'Comp Sys & C Prog',
            professor: 'K. Veenstra',
            credits: '7',
            time: 'MWF 9:20 ⁠—⁠ 10:25AM @ Earth&Marine B206',
            lab: 'Th 2:00 ⁠—⁠⁠ 3:00PM @ Kresge Acad 3401',
        },
        {
            index: '0',
            id: 'CSE 13S',
            name: 'Comp Sys & C Prog',
            professor: 'K. Veenstra',
            credits: '7',
            time: 'MWF 9:20 ⁠—⁠ 10:25AM @ Earth&Marine B206',
            lab: 'Th 2:00 ⁠—⁠⁠ 3:00PM @ Kresge Acad 3401',
        },
        {
            index: '0',
            id: 'CSE 13S',
            name: 'Comp Sys & C Prog',
            professor: 'K. Veenstra',
            credits: '7',
            time: 'MWF 9:20 ⁠—⁠ 10:25AM @ Earth&Marine B206',
            lab: 'Th 2:00 ⁠—⁠⁠ 3:00PM @ Kresge Acad 3401',
        },
        {
            index: '0',
            id: 'CSE 13S',
            name: 'Comp Sys & C Prog',
            professor: 'K. Veenstra',
            credits: '7',
            time: 'MWF 9:20 ⁠—⁠ 10:25AM @ Earth&Marine B206',
            lab: 'Th 2:00 ⁠—⁠⁠ 3:00PM @ Kresge Acad 3401',
        },
        {
            index: '0',
            id: 'CSE 13S',
            name: 'Comp Sys & C Prog',
            professor: 'K. Veenstra',
            credits: '7',
            time: 'MWF 9:20 ⁠—⁠ 10:25AM @ Earth&Marine B206',
            lab: 'Th 2:00 ⁠—⁠⁠ 3:00PM @ Kresge Acad 3401',
        },
    ]
    return (
        <div className="wrapper">
            <div className="container" style={{display: 'block'}}>
                
                
                <div className="enrollment-cards">
                    <div className="search-card">
                        <div className="inner-search-inputs">
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

                    <div className="inner-search-results">
                    <section class="table__body" style={{width:'100%', fontSize:'15px', border:'2px solid black'}}>
                                <table id="table">
                                    <thead>
                                        <tr style={{color: 'black'}}>
                                            <th style={{padding:'10px'}}> ID </th>
                                            <th style={{padding:'10px'}}> Professor </th>
                                            <th style={{padding:'10px'}}> Units </th>
                                            <th style={{padding:'10px'}}> Lecture </th>
                                            <th style={{padding:'10px'}}> Lab </th>
                                            <th style={{padding:'10px'}}> Drop </th>
                                        </tr>
                                    </thead>
                                    <tbody className="no-hover">
                                        {cart_data.map((item) => {
                                            return (
                                                <tr id={item.index} style={{borderTop: '2px solid black'}}>
                                                    <td style={{padding:'10px'}}> {item.id} </td>
                                                    <td style={{padding:'10px'}}> {item.professor} </td>
                                                    <td style={{padding:'10px'}}> {item.credits} </td>
                                                    <td style={{padding:'10px'}}> {item.time} </td>
                                                    <td style={{padding:'10px'}}> {item.lab} </td>
                                                    <td style={{padding:'10px'}}><FaRegCircleXmark className="xbtn"onClick={() => deleteClass(item.index)} size={25}/></td>
                                                </tr>
                                            );
                                        })}
                                    </tbody>
                                </table>
                            </section>
                    </div>
                    </div>


                    <div className="cart-card">
                        <div className="shopping-cart">
                            <h2>Shopping Cart</h2>
                        
                            <section class="table__body" style={{maxHeight: '400px',width:'100%', fontSize:'15px', border:'2px solid black'}}>
                                <table id="table">
                                    <thead>
                                        <tr style={{color: 'black'}}>
                                            <th style={{padding:'10px'}}> ID </th>
                                            <th style={{padding:'10px'}}> Professor </th>
                                            <th style={{padding:'10px'}}> Units </th>
                                            <th style={{padding:'10px'}}> Lecture </th>
                                            <th style={{padding:'10px'}}> Lab </th>
                                            <th style={{padding:'10px'}}> Drop </th>
                                        </tr>
                                    </thead>
                                    <tbody className="no-hover">
                                        {cart_data.map((item) => {
                                            return (
                                                <tr id={item.index} style={{borderTop: '2px solid black'}}>
                                                    <td style={{padding:'10px'}}> {item.id} </td>
                                                    <td style={{padding:'10px'}}> {item.professor} </td>
                                                    <td style={{padding:'10px'}}> {item.credits} </td>
                                                    <td style={{padding:'10px'}}> {item.time} </td>
                                                    <td style={{padding:'10px'}}> {item.lab} </td>
                                                    <td style={{padding:'10px'}}><FaRegCircleXmark className="xbtn"onClick={() => deleteClass(item.index)} size={25}/></td>
                                                </tr>
                                            );
                                        })}
                                    </tbody>
                                </table>
                            </section>
                        </div>

                        <div className="schedule">
                            <h2> Class Schedule </h2>
                                <section class="table__body" style={{maxHeight: '400px', width:'100%', fontSize:'15px', border:'2px solid black'}}>
                                <table>
                                    <thead>
                                        <tr style={{color: 'black'}}>
                                            <th style={{padding:'10px'}}> ID </th>
                                            <th style={{padding:'10px'}}> Professor </th>
                                            <th style={{padding:'10px'}}> Units </th>
                                            <th style={{padding:'10px'}}> Lecture </th>
                                            <th style={{padding:'10px'}}> Lab </th>
                                            <th style={{padding:'10px'}}> Drop </th>
                                        </tr>
                                    </thead>
                                    <tbody className="no-hover">
                                        {enrollment_data.map((item) => {
                                            return (
                                                <tr id={item.index}style={{borderTop: '2px solid black'}}>
                                                    <td style={{padding:'10px'}}> {item.id} </td>
                                                    <td style={{padding:'10px'}}> {item.professor} </td>
                                                    <td style={{padding:'10px'}}> {item.credits} </td>
                                                    <td style={{padding:'10px'}}> {item.time} </td>
                                                    <td style={{padding:'10px'}}> {item.lab} </td>
                                                    <td style={{padding:'10px'}}><FaRegCircleXmark className="xbtn"onClick={() => deleteClass(item.index)} size={25}/></td>
                                                </tr>
                                            );
                                        })}
                                    </tbody>
                                </table>
                            </section>
                        </div>

                            
                    </div>

                </div>




            </div>
        </div>     
    )
}

{/*<main class="table" id="table" style={{height: 'fit-content'}}>
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
                                    <th style={{padding:'10px'}}> Units </th>
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
                            </main>*/}