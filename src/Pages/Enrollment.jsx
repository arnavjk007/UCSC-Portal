import React from "react";
import '../App.css';
import { useNavigate } from "react-router-dom";
import { FaRegCircleXmark } from "react-icons/fa6";
import { IoMdMore } from "react-icons/io";

export default function Enrollment() {

    function deleteClass(index) {
        document.getElementById(index).remove();
    }

    var cart_data = [
        {
            index: '0',
            id: 'AM 10',
            name: 'Mathematical Methods for Engineers 1',
            professor: 'Katznelson,J.R.',
            credits: '7',
            status: 'Closed 290/290',
            time: 'MWF 09:20AM-10:25AM @ ClassroomUnit 002',
            lab: 'M 04:00PM-05:05PM @ Earth&Marine B210',
        },
    ]

    var enrollment_data = [
        {
            index: '0',
            id: 'CSE 13S',
            name: 'Comp Sys & C Prog',
            professor: 'Veenstra, K.',
            credits: '7',
            status: 'Open 129/240',
            time: 'MWF 9:20 ⁠—⁠ 10:25AM @ Earth&Marine B206',
            lab: 'Th 2:00 ⁠—⁠⁠ 3:00PM @ Kresge Acad 3401',
        },
        {
            index: '1',
            id: 'THEA 80N',
            name: 'Walt Disney',
            professor: 'Valdez, K.',
            credits: '5',
            status: 'Closed 380/380',
            time: 'Online',
            lab: 'TBA',
        },
        {
            index: '2',
            id: 'COWL 168',
            name: 'Social Change',
            professor: 'Stinneford, C.',
            credits: '2',
            status: 'Closed 90/90',
            time: 'Online',
            lab: 'TBA',
        },
    ]


    return (
        <div className="wrapper" style={{display:'flex', background: 'rgb(173, 200, 231)'}}>
            <div className="enrollment-container">
                <div className="search-bar">
                    <input className="bar"type="text" placeholder="Search Classes"></input>
                </div>

                <div className="enroll-cards">
                    <div className="enrollment-table">
                        <h1 style={{textAlign:'center'}}>Shopping Cart</h1>
                    
                        <section class="table__body" style={{height: '35vh', width:'100%', fontSize:'15px', border:'1px solid black'}}>
                            <table id="table" >
                                <thead>
                                    <tr style={{color: 'black', borderBottom:'2px solid black'}}>
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
                                                    <tr  id={item.index} style={{borderTop: '1px solid black', borderBottom:'1px solid black', fontSize:'13px'}}>
                                                        <td style={{padding:'5px'}}> {item.id} </td>
                                                        <td style={{padding:'5px'}}> {item.professor} </td>
                                                        <td style={{padding:'5px'}}> {item.credits} </td>
                                                        <td style={{padding:'5px'}}> {item.status} </td>
                                                        <td style={{padding:'5px'}}> {item.time} </td>
                                                        <td style={{padding:'5px'}}> {item.lab} </td>
                                                        <td style={{padding:'5px'}}><IoMdMore className="more-btn"onClick={() => deleteClass(item.index)} size={25}/></td>
                                                    </tr>
                                                    )
                                            })}    
                                </tbody>
                            </table>
                        </section>
                    </div>

                    <div className="enrollment-table">
                        <h1 style={{textAlign:'center'}}> Class Schedule </h1>
                            <section class="table__body" style={{height: '35vh', width:'100%', fontSize:'15px', border:'1px solid black'}}>
                                <table>
                                    <thead>
                                        <tr style={{color: 'black', borderBottom:'2px solid black'}}>
                                            <th style={{padding:'5px'}}> ID </th>
                                            <th style={{padding:'5px'}}> Professor </th>
                                            <th style={{padding:'5px'}}> Units </th>
                                            <th style={{padding:'5px'}}> Lecture </th>
                                            <th style={{padding:'5px'}}> Lab </th>
                                            <th style={{padding:'5px'}}></th>
                                        </tr>
                                    </thead>

                                    <tbody className="no-hover">
                                    {enrollment_data.map((item) => {
                                                            return (
                                                                <tr  id={item.index}style={{borderTop: '1px solid black', borderBottom:'1px solid black', fontSize:'13px'}}>
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
                <iframe src="https://calendar.google.com/calendar/embed?height=600&wkst=1&ctz=America%2FLos_Angeles&bgcolor=%23ffffff&mode=WEEK&src=ZW4udXNhI2hvbGlkYXlAZ3JvdXAudi5jYWxlbmRhci5nb29nbGUuY29t&color=%238E24AA" style={{margin: '20px', border:"solid 1px #777", borderRadius:'12px', width:"1440px", height:"400px", frameborder:"0", scrolling:"no"}}></iframe>
                </div>
                </div>

            </div>
    )
}