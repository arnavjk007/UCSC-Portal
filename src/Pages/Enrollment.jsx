import React from "react";
import '../App.css';
import { useNavigate } from "react-router-dom";
import { FaRegCircleXmark } from "react-icons/fa6";

export default function Enrollment() {

    function deleteClass(index) {
        document.getElementById(index).remove();
    }

    var cart_data = [
        {
            index: '0',
            id: 'CSE 13S',
            name: 'Comp Sys & C Prog',
            professor: 'K. Veenstra',
            credits: '7',
            status: 'Open 100/200',
            time: 'MWF 9:20 ⁠—⁠ 10:25AM @ Earth&Marine B206',
            lab: 'Th 2:00 ⁠—⁠⁠ 3:00PM @ Kresge Acad 3401',
        },
        {
            index: '1',
            id: 'CSE 13S',
            name: 'Comp Sys & C Prog',
            professor: 'K. Veenstra',
            credits: '7',
            status: 'Closed 200/200',
            time: ' Earth&Marine B206',
            lab: 'Th 2:00 ⁠—⁠⁠ 3:00PM @ Kresge Acad 3401',
        },
        {
            index: '1',
            id: 'CSE 13S',
            name: 'Comp Sys & C Prog',
            professor: 'K. Veenstra',
            credits: '7',
            status: 'Closed 200/200',
            time: ' Earth&Marine B206',
            lab: 'Th 2:00 ⁠—⁠⁠ 3:00PM @ Kresge Acad 3401',
        },
        {
            index: '1',
            id: 'CSE 13S',
            name: 'Comp Sys & C Prog',
            professor: 'K. Veenstra',
            credits: '7',
            status: 'Closed 200/200',
            time: ' Earth&Marine B206',
            lab: 'Th 2:00 ⁠—⁠⁠ 3:00PM @ Kresge Acad 3401',
        },
        {
            index: '1',
            id: 'CSE 13S',
            name: 'Comp Sys & C Prog',
            professor: 'K. Veenstra',
            credits: '7',
            status: 'Closed 200/200',
            time: ' Earth&Marine B206',
            lab: 'Th 2:00 ⁠—⁠⁠ 3:00PM @ Kresge Acad 3401',
        },
        {
            index: '1',
            id: 'CSE 13S',
            name: 'Comp Sys & C Prog',
            professor: 'K. Veenstra',
            credits: '7',
            status: 'Closed 200/200',
            time: ' Earth&Marine B206',
            lab: 'Th 2:00 ⁠—⁠⁠ 3:00PM @ Kresge Acad 3401',
        },
        {
            index: '1',
            id: 'CSE 13S',
            name: 'Comp Sys & C Prog',
            professor: 'K. Veenstra',
            credits: '7',
            status: 'Closed 200/200',
            time: ' Earth&Marine B206',
            lab: 'Th 2:00 ⁠—⁠⁠ 3:00PM @ Kresge Acad 3401',
        },
        {
            index: '1',
            id: 'CSE 13S',
            name: 'Comp Sys & C Prog',
            professor: 'K. Veenstra',
            credits: '7',
            status: 'Closed 200/200',
            time: ' Earth&Marine B206',
            lab: 'Th 2:00 ⁠—⁠⁠ 3:00PM @ Kresge Acad 3401',
        },
        {
            index: '1',
            id: 'CSE 13S',
            name: 'Comp Sys & C Prog',
            professor: 'K. Veenstra',
            credits: '7',
            status: 'Closed 200/200',
            time: ' Earth&Marine B206',
            lab: 'Th 2:00 ⁠—⁠⁠ 3:00PM @ Kresge Acad 3401',
        },
        {
            index: '1',
            id: 'CSE 13S',
            name: 'Comp Sys & C Prog',
            professor: 'K. Veenstra',
            credits: '7',
            status: 'Closed 200/200',
            time: ' Earth&Marine B206',
            lab: 'Th 2:00 ⁠—⁠⁠ 3:00PM @ Kresge Acad 3401',
        },
        {
            index: '1',
            id: 'CSE 13S',
            name: 'Comp Sys & C Prog',
            professor: 'K. Veenstra',
            credits: '7',
            status: 'Closed 200/200',
            time: ' Earth&Marine B206',
            lab: 'Th 2:00 ⁠—⁠⁠ 3:00PM @ Kresge Acad 3401',
        },
    ]

    var enrollment_data = [
        {
            index: '1',
            id: 'CSE 13S',
            name: 'Comp Sys & C Prog',
            professor: 'K. Veenstra',
            credits: '7',
            time: 'MWF 9:20 ⁠—⁠ 10:25AM @ Earth&Marine B206',
            lab: 'Th 2:00 ⁠—⁠⁠ 3:00PM @ Kresge Acad 3401',
        },
        {
            index: '2',
            id: 'CSE 13S',
            name: 'Comp Sys & C Prog',
            professor: 'K. Veenstra',
            credits: '7',
            time: 'MWF 9:20 ⁠—⁠ 10:25AM @ Earth&Marine B206',
            lab: 'Th 2:00 ⁠—⁠⁠ 3:00PM @ Kresge Acad 3401',
        },
        {
            index: '2',
            id: 'CSE 13S',
            name: 'Comp Sys & C Prog',
            professor: 'K. Veenstra',
            credits: '7',
            time: 'MWF 9:20 ⁠—⁠ 10:25AM @ Earth&Marine B206',
            lab: 'Th 2:00 ⁠—⁠⁠ 3:00PM @ Kresge Acad 3401',
        },
        {
            index: '2',
            id: 'CSE 13S',
            name: 'Comp Sys & C Prog',
            professor: 'K. Veenstra',
            credits: '7',
            time: 'MWF 9:20 ⁠—⁠ 10:25AM @ Earth&Marine B206',
            lab: 'Th 2:00 ⁠—⁠⁠ 3:00PM @ Kresge Acad 3401',
        },
        {
            index: '2',
            id: 'CSE 13S',
            name: 'Comp Sys & C Prog',
            professor: 'K. Veenstra',
            credits: '7',
            time: 'MWF 9:20 ⁠—⁠ 10:25AM @ Earth&Marine B206',
            lab: 'Th 2:00 ⁠—⁠⁠ 3:00PM @ Kresge Acad 3401',
        },
        {
            index: '2',
            id: 'CSE 13S',
            name: 'Comp Sys & C Prog',
            professor: 'K. Veenstra',
            credits: '7',
            time: 'MWF 9:20 ⁠—⁠ 10:25AM @ Earth&Marine B206',
            lab: 'Th 2:00 ⁠—⁠⁠ 3:00PM @ Kresge Acad 3401',
        },
        {
            index: '2',
            id: 'CSE 13S',
            name: 'Comp Sys & C Prog',
            professor: 'K. Veenstra',
            credits: '7',
            time: 'MWF 9:20 ⁠—⁠ 10:25AM @ Earth&Marine B206',
            lab: 'Th 2:00 ⁠—⁠⁠ 3:00PM @ Kresge Acad 3401',
        },
        {
            index: '2',
            id: 'CSE 13S',
            name: 'Comp Sys & C Prog',
            professor: 'K. Veenstra',
            credits: '7',
            time: 'MWF 9:20 ⁠—⁠ 10:25AM @ Earth&Marine B206',
            lab: 'Th 2:00 ⁠—⁠⁠ 3:00PM @ Kresge Acad 3401',
        },
        {
            index: '2',
            id: 'CSE 13S',
            name: 'Comp Sys & C Prog',
            professor: 'K. Veenstra',
            credits: '7',
            time: 'MWF 9:20 ⁠—⁠ 10:25AM @ Earth&Marine B206',
            lab: 'Th 2:00 ⁠—⁠⁠ 3:00PM @ Kresge Acad 3401',
        },
        {
            index: '2',
            id: 'CSE 13S',
            name: 'Comp Sys & C Prog',
            professor: 'K. Veenstra',
            credits: '7',
            time: 'MWF 9:20 ⁠—⁠ 10:25AM @ Earth&Marine B206',
            lab: 'Th 2:00 ⁠—⁠⁠ 3:00PM @ Kresge Acad 3401',
        },
        {
            index: '2',
            id: 'CSE 13S',
            name: 'Comp Sys & C Prog',
            professor: 'K. Veenstra',
            credits: '7',
            time: 'MWF 9:20 ⁠—⁠ 10:25AM @ Earth&Marine B206',
            lab: 'Th 2:00 ⁠—⁠⁠ 3:00PM @ Kresge Acad 3401',
        },
    ]


    return (
        <div className="wrapper" style={{display:'flex', background: 'rgb(173, 200, 231)'}}>
            <div className="enrollment-container">
                <div className="search-bar">
                    <input className="bar"type="text" placeholder="Search Classes"></input>
                </div>

                <div className="enroll-cards">
                    <div className="shopping-cart">
                        <h1 style={{textAlign:'center'}}>Shopping Cart</h1>
                    
                        <section class="table__body" style={{maxHeight: '35vh', width:'100%', fontSize:'15px', border:'2px solid black'}}>
                            <table id="table">
                                <thead>
                                    <tr style={{color: 'black'}}>
                                        <th style={{padding:'5px'}}> ID </th>
                                        <th style={{padding:'5px'}}> Professor </th>
                                        <th style={{padding:'5px'}}> Units </th>
                                        <th style={{padding:'5px'}}> Status </th>
                                        <th style={{padding:'5px'}}> Lecture </th>
                                        <th style={{padding:'5px'}}> Lab </th>
                                        <th style={{padding:'5px'}}></th>
                                    </tr>
                                </thead>
                                <tbody className="no-hover"> 
                                            {cart_data.map((item) => {
                                                return (
                                                    <tr  id={item.index}style={{borderTop: '2px solid black'}}>
                                                        <td style={{padding:'5px'}}> {item.id} </td>
                                                        <td style={{padding:'5px'}}> {item.professor} </td>
                                                        <td style={{padding:'5px'}}> {item.credits} </td>
                                                        <td style={{padding:'5px'}}> {item.status} </td>
                                                        <td style={{padding:'5px'}}> {item.time} </td>
                                                        <td style={{padding:'5px'}}> {item.lab} </td>
                                                        <td style={{padding:'5px'}}><FaRegCircleXmark className="xbtn"onClick={() => deleteClass(item.index)} size={25}/></td>
                                                    </tr>
                                                    )
                                            })}    
                                </tbody>
                            </table>
                        </section>
                    </div>

                    <div className="schedule">
                        <h1 style={{textAlign:'center'}}> Class Schedule </h1>
                            <section class="table__body" style={{maxHeight: '35vh', width:'100%', fontSize:'15px', border:'2px solid black'}}>
                                <table>
                                    <thead>
                                        <tr style={{color: 'black'}}>
                                            <th style={{padding:'5px'}}> ID </th>
                                            <th style={{padding:'5px'}}> Professor </th>
                                            <th style={{padding:'5px'}}> Units </th>
                                            <th style={{padding:'5px'}}> Lecture </th>
                                            <th style={{padding:'5px'}}> Lab </th>
                                            <th style={{padding:'5px'}}> Drop </th>
                                        </tr>
                                    </thead>

                                    <tbody className="no-hover">
                                    {enrollment_data.map((item) => {
                                                            return (
                                                                <tr  id={item.index}style={{borderTop: '2px solid black'}}>
                                                                    <td style={{padding:'5px'}}> {item.id} </td>
                                                                    <td style={{padding:'5px'}}> {item.professor} </td>
                                                                    <td style={{padding:'5px'}}> {item.credits} </td>
                                                                    <td style={{padding:'5px'}}> {item.time} </td>
                                                                    <td style={{padding:'5px'}}> {item.lab} </td>
                                                                    <td style={{padding:'5px'}}><FaRegCircleXmark className="xbtn"onClick={() => deleteClass(item.index)} size={25}/></td>
                                                                </tr>
                                                                )
                                                        })}  
                                    </tbody>
                                </table>
                            </section>
                    </div>
                </div>

                <div className="calendar">
                <iframe src="https://calendar.google.com/calendar/embed?height=600&wkst=1&ctz=America%2FLos_Angeles&bgcolor=%23ffffff&mode=WEEK&src=ZW4udXNhI2hvbGlkYXlAZ3JvdXAudi5jYWxlbmRhci5nb29nbGUuY29t&color=%238E24AA" style={{margin: '20px', border:"solid 1px #777", width:"1440px", height:"400px", frameborder:"0", scrolling:"no"}}></iframe>
                </div>
                </div>

            </div>
    )
}