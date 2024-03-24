import React, { useState } from "react";
import '../App.css';
import { useNavigate } from "react-router-dom";
import { FaRegCircleXmark } from "react-icons/fa6";
import { IoMdMore } from "react-icons/io";
import { FiPlusCircle } from "react-icons/fi";
import { Checkmark } from 'react-checkmark'
import { MdOutlineSwapHorizontalCircle } from "react-icons/md";
import { GoDotFill } from "react-icons/go";
import { IoIosWarning } from "react-icons/io";
import { FaSearch } from "react-icons/fa";

export default function Enrollment() {

    function deleteClass(index) {
        document.getElementById(index).remove();
    }

    function getStatus(index) {
        if (index === '0') {
            return <GoDotFill color="green" size={35} />
        }
        if (index === '1') {
            return <IoIosWarning color="gold" size={30} />
        }
        
        return <GoDotFill color="red" size={35} />
    }

    const [filterData, setFilterData] = useState([]);


    const handleFilter = (event) => {
        const searchWords = event.target.value;
        const updatedFilter = searchData.filter((value) => {
            value = value.id + value.name + value.professor + value.credits + value.ge + value.lab + value.time
            return value.toLowerCase().includes(searchWords.toLowerCase());
        })
        setFilterData(updatedFilter);
    }

    function changeState(value) {
        if (value.state === '1') {
            value.state = '0'
        }
        else {
            value.state = '1'
        }
        return
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

    var searchData = [
        {
            index: '0',
            id: 'CSE 13S',
            name: 'Comp Sys & C Prog',
            professor: 'Veenstra, K.',
            credits: '7',
            status: '129/240',
            time: 'MWF 9:20 ⁠—⁠ 10:25AM @ Earth&Marine B206',
            lab: 'Th 2:00 ⁠—⁠⁠ 3:00PM @ Kresge Acad 3401',
            state: '0'
        },
        {
            index: '1',
            id: 'THEA 80N',
            name: 'Walt Disney',
            professor: 'Valdez, K.',
            credits: '5',
            status: '380/380',
            time: 'Online',
            lab: 'TBA',
            state: '0'
        },
        {
            index: '2',
            id: 'COWL 168',
            name: 'Social Change',
            professor: 'Stinneford, C.',
            credits: '2',
            status: '90/90',
            time: 'Online',
            lab: 'TBA',
            state: '0'
        },
    ]


    return (
        <div className="enrollment-container">

                <div className="enrollment-block">
                    <div className="search-bar">
                        <input className="bar" style={{margin: '0% 0% 1% 0%'}}type="text" placeholder="Search Classes" onChange={handleFilter}></input>
                    </div>

                    <div className="search-results-container">
                            <section class="search_table__body">
                        <table className="search-table">
                            <thead>
                                <tr>
                                    <th> ID </th>
                                    <th> Title </th>
                                    <th> Professor </th>
                                    <th> Status </th>
                                    <th> Lecture </th>
                                    <th> Lab </th>
                                    <th> </th>
                                </tr>
                            </thead>
                            <tbody> 
                            {filterData.map((item) => {
                                return (
                                        
                                            <tr style={{borderBottom: '1px solid black'}}>
                                                <td style={{ fontWeight:'bolder'}}> {item.id} </td>
                                                <td> {item.name} ({item.credits}) </td>
                                                <td> {item.professor} </td>
                                                <td> <div style={{display:'flex',justifyContent:'center'}}> {getStatus(item.index)} </div> 
                                                <div style={{display:'flex',justifyContent:'center'}}><h5>{item.status}</h5></div></td>
                                                
                                                <td> {item.time} </td>
                                                <td> {item.lab} </td>
                                                <td> <FiPlusCircle className="addbtn" size={25} onClick={() => changeState(item)}/> </td>
                                            </tr>
                                        
                                
                                )
                            })}
                        </tbody>
                        </table>
                        </section>
                    </div>
                </div>

                


                <div className="enrollment-block">
                <div className="enroll-cards" style={{margin:'5% 0% 5% 0%'}}>
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
                                        <th style={{padding:'5px'}}></th>
                                        <th style={{padding:'5px'}}></th>
                                    </tr>
                                </thead>
                                <tbody className="no-hover"> 
                                            {cart_data.map((item) => {
                                                return (
                                                    <tr  id={item.index} style={{borderTop: '1px solid black', borderBottom:'1px solid black', fontSize:'13px'}}>
                                                        <td style={{padding:'5px', fontWeight:'bolder'}}> {item.id} </td>
                                                        <td style={{padding:'5px'}}> {item.professor} </td>
                                                        <td style={{padding:'5px'}}> {item.credits} </td>
                                                        <td style={{padding:'5px'}}> {item.status} </td>
                                                        <td style={{padding:'5px'}}> {item.time} </td>
                                                        <td style={{padding:'5px'}}> {item.lab} </td>
                                                        <td style={{padding:'5px'}}><FiPlusCircle className="addbtn"  onClick={() => changeState(item)} size={27}/></td>
                                                        <td style={{padding:'5px'}}><MdOutlineSwapHorizontalCircle className="swapbtn" size={30}/></td>
                                                        <td style={{padding:'5px'}}><FaRegCircleXmark className="xbtn"onClick={() => deleteClass(item.index)} size={27}/></td>
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
                                                                    <td style={{padding:'5px', fontWeight:'bolder'}}> {item.id} </td>
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
                </div>

        </div>
                
                


                
    )
}