import React, { useState } from "react";
import '../App.css';
import { useNavigate } from "react-router-dom";
import { FaRegCircleXmark } from "react-icons/fa6";
import { FiPlusCircle } from "react-icons/fi";
import { Checkmark } from 'react-checkmark'
import { IoSearch } from "react-icons/io5";
import { MdOutlineSwapHorizontalCircle } from "react-icons/md";
import { GoDotFill } from "react-icons/go";
import { IoIosWarning } from "react-icons/io";
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';


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

    const [value, setValue] = React.useState('1');

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

   

    
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

    function searchTab() {
        return (
            <div className="enrollment-block">
                    <div className="search-bar">
                        <IoSearch style={{justifyContent:'center'}} size={50}/>
                        <input className="bar" style={{margin: '0% 0% 30px 0%'}}type="text" placeholder="Search Classes" onChange={handleFilter}></input>
                    </div>

                    <div className="search-results-container">
                            <section class="search_table__body">
                        <table className="search-table">
                            <thead>
                                <tr style={{color:'black'}}>
                                    <th> ID </th>
                                    <th> Title </th>
                                    <th> Professor </th>
                                    <th> Units </th>
                                    <th> Status </th>
                                    <th> Lecture </th>
                                    <th> Lab </th>
                                    <th> </th>
                                </tr>
                            </thead>
                            <tbody> 
                            {filterData.map((item) => {
                                return (    
                                    <tr style={{borderBottom: '1px solid black', color:'black'}}>
                                        <td style={{ fontWeight:'bolder'}}> {item.id} </td>
                                        <td> {item.name} </td>
                                        <td> {item.professor} </td>
                                        <td> {item.credits}</td>
                                        <td> <div style={{display:'flex',justifyContent:'center'}}> {getStatus(item.index)} </div> 
                                        <div style={{display:'flex',justifyContent:'center'}}><h5>{item.status}</h5></div></td>
                                        
                                        <td> {item.time} </td>
                                        <td> {item.lab} </td>
                                        <td><FiPlusCircle className="addbtn" title="Add Class" size={30} onClick={() => changeState(item)}/></td>
                                    </tr>
                                )
                            })}
                        </tbody>
                        </table>
                        </section>
                    </div>
                </div>
        )
    }

    function cartTab() {
        return (
            <div className="enrollment-table">
                        <h1 style={{textAlign:'center'}}>Shopping Cart</h1>
                    
                        <section class="table__body" style={{width:'100%', border:'1px solid black', maxHeight:'60vh'}}>
                            <table id="table" >
                                <thead>
                                    <tr style={{color: 'black', borderBottom:'2px solid black'}}>
                                        <th > ID </th>
                                        <th > Professor </th>
                                        <th > Units </th>
                                        <th > Status </th>
                                        <th > Lecture </th>
                                        <th> Lab </th>
                                        <th ></th>
                                        <th ></th>
                                        <th ></th>
                                    </tr>
                                </thead>
                                <tbody className="no-hover"> 
                                            {cart_data.map((item) => {
                                                return (
                                                    <tr  id={item.index} style={{borderTop: '1px solid black', borderBottom:'1px solid black', color:'black'}}>
                                                        <td style={{fontWeight:'bolder'}}> {item.id} </td>
                                                        <td > {item.professor} </td>
                                                        <td > {item.credits} </td>
                                                        <td > {item.status} </td>
                                                        <td > {item.time} </td>
                                                        <td > {item.lab} </td>
                                                        <td ><FiPlusCircle className="addbtn" title="Add Class"onClick={() => changeState(item)} size={30}/></td>
                                                        <td ><MdOutlineSwapHorizontalCircle className="swapbtn" title="Swap Class"size={33}/></td>
                                                        <td ><FaRegCircleXmark className="xbtn" title="Delete Class" onClick={() => deleteClass(item.index)} size={30}/></td>
                                                    </tr>
                                                )
                                            })}    
                                </tbody>
                            </table>
                        </section>
                    </div>
        )
    }
    
    function scheduleTab() {
        return (
            <div className="enrollment-table">
                        <h1 style={{textAlign:'center'}}> Class Schedule </h1>
                            <section class="table__body" style={{width:'100%', fontSize:'15px', border:'1px solid black', maxHeight:'60vh'}}>
                                <table>
                                    <thead>
                                        <tr style={{color: 'black', borderBottom:'2px solid black'}}>
                                            <th > ID </th>
                                            <th > Professor </th>
                                            <th > Units </th>
                                            <th > Lecture </th>
                                            <th > Lab </th>
                                            <th ></th>
                                        </tr>
                                    </thead>

                                    <tbody className="no-hover">
                                    {enrollment_data.map((item) => {
                                        return (
                                            <tr  id={item.index}style={{borderTop: '1px solid black', borderBottom:'1px solid black', color:'black'}}>
                                                <td style={{fontWeight:'bolder'}}> {item.id} </td>
                                                <td > {item.professor} </td>
                                                <td > {item.credits} </td>
                                                <td > {item.time} </td>
                                                <td >{item.lab} </td>
                                                <td ><FaRegCircleXmark className="xbtn" title="Add Class" onClick={() => deleteClass(item.index)} size={30}/></td>
                                            </tr>
                                        )
                                    })}  
                                    </tbody>
                                </table>
                            </section>
                    </div>

        )
    }

    
    return (
        
        <div className="container">
            <div className="info-card" style={{maxWidth:'none', height:'100%'}}>
                <h1>Enrollment</h1>
                <hr></hr>

                <Box sx={{ width: '100%', typography: 'body1' }}>
                    <TabContext value={value}>
                        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                        <TabList 
                            style={{display:'flex', justifyContent:'center', overflow:'auto', width:'100%'}} 
                            onChange={handleChange} 
                            variant="scrollable"
                            scrollButtons="auto">
                            <Tab label="Class Search" value="1"/>
                            <Tab label="Shopping Cart" value="2" />
                            <Tab label="Class Schedule" value="3" />
                        </TabList>
                        </Box>
                        <TabPanel value="1">{searchTab()}</TabPanel>
                        <TabPanel value="2">{cartTab()}</TabPanel>
                        <TabPanel value="3">{scheduleTab()}</TabPanel>                        
                    </TabContext>
                </Box>
            </div>
        </div>
                        
    )
}