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
import Backdrop from '@mui/material/Backdrop';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Typography from '@mui/material/Typography';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';


export default function Enrollment() {

    function deleteClass(index) {
        document.getElementById(index).remove();
    }

    const [filterData, setFilterData] = useState([]);


    const handleFilter = (event) => {
        const searchWords = event.target.value;
        const updatedFilter = classData.filter((value) => {
            value = value.id + value.title + value.professor + value.credits + value.ge + value.lab + value.lecture;
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

    function getAvailability(str) {
        if (str === 'Open' || str === 'open') {return <GoDotFill color="green" size={35} />}
        if (str === 'Waitlist' || str === 'waitlist') {return <IoIosWarning color="gold" size={30} />}
        return <GoDotFill color="red" size={35} />
    }

    const [value, setValue] = React.useState('1');

    const handleValue = (event, newValue) => {
        setValue(newValue);
    };

    const [term, setTerm] = useState('');

    const handleChange = (event) => {
        setTerm(event.target.value);
    };

    const [open, setOpen] = useState(null);
    const handleOpen = (index) => setOpen(index);
    const handleClose = () => setOpen(null);

   //style for modal
    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        width: '60%',
        height: '80%',
        overflow: 'auto',
        transform: 'translate(-50%, -50%)',
        bgcolor: 'background.paper',
        border: '2px solid #000',
        borderRadius: '16px',
        boxShadow: 24,
        p: 4,
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

    var classData = [
        {
            index: 0,
            id: 'CSE 13S',
            title: 'Computer Systems and C Programming',
            career: 'Undergraduate',
            grading: 'Student Option',
            class_number: '51630',
            type: 'Lecture',
            mode: 'In Person',
            credits: '7 units',
            ge: 'None',
            status: 'Closed',
            open_seats: '114',
            max_seats: '240',
            current_seats: '126',
            waitlist_cap: '0',
            waitlist_total: '0',
            prereq: 'CSE12 or BME160',
            notes: 'Enroll in lecture and associated secondary lab',
            professor: 'Kerry Veenstra',
            desc: 'Focuses on C programming, command line, shell programming, editors, debuggers, source code control, and other tools. Examines basic computer systems, algorithm design, and development, data types, and program structures. Develops understanding of process model, compile-link-execute build cycle, language-machine interface, memory, and data representation. Students cannot receive credit for CSE 13S, CSE 13E, and ECE 13. Course is 7 credits with integrated laboratory.',
            lecture: 'MWF 9:20AM-10:25AM',
            lab: ['Th 2:00-3:00PM @ Kresge Acad 3401'],
            location: '	Earth&Marine B206'
        },
        {
            index: 1,
            id: 'CSE 16',
            title: 'Applied Discrete Mathematics',
            career: 'Undergraduate',
            grading: 'Student Option',
            class_number: '51632',
            type: 'Lecture',
            mode: 'In Person',
            credits: '5 units',
            ge: 'MF',
            status: 'Open',
            open_seats: '3',
            current_seats: '287',
            max_seats: '290',
            waitlist_cap: '0',
            waitlist_total: '0',
            prereq: 'MATH 19A or MATH 19B or MATH 11B or AM 11B or AM 15B or ECON 11B',
            notes: '',
            professor: 'Patrick Tantalo',
            desc: 'Introduction to applications of discrete mathematical systems. Topics include sets, functions, relations, graphs, predicate calculus, mathematical proof methods (induction, contraposition, contradiction), counting methods (permutations, combinations), and recurrences. Examples are drawn from computer science and computer engineering. Knowledge of computer programming is useful before taking this course. Students who do not have prior programming experience are strongly recommended to take CSE 20 or CSE 30 before taking this course.',
            lecture: 'TuTh 03:20PM-04:55PM',
            lab: ['M 08:00AM-09:05AM @ Oakes Acad 102'],
            location: 'ClassroomUnit 002'
        },
        {
            index: 2,
            id: 'CSE 12',
            title: 'Computer Systems and Assembly Language and Lab',
            career: 'Undergraduate',
            grading: 'Student Option',
            class_number: '51629',
            type: 'Lecture',
            mode: 'Synchronous Online',
            credits: '7 units',
            ge: '',
            status: 'Open',
            open_seats: '12',
            current_seats: '280',
            max_seats: '268',
            waitlist_cap: '0',
            waitlist_total: '0',
            prereq: 'CSE 5J, or CSE 20, or CSE 30, or BME 160, or equivalent',
            notes: 'Enroll in lecture and associated secondary lab. Enrollment restricted to frosh, sophomores, or computer science, computer engineering, computer game design, bioinformatics, biomolecular engineering and bioinformatics, electrical engineering, network and digital technology, robotics engineering, and technology information management majors and computer science, computer game design, computer engineering, and robotics proposed majors during First Pass enrollment.',
            professor: 'Marcelo Siero',
            desc: 'Introduction to computer systems and assembly language and how computers compute in hardware and software. Topics include digital logic, number systems, data structures, compiling/assembly process, basics of the system software, and computer architecture. Course is 7 credits with integrated laboratories illustrating concepts covered in lecture. Note that CSE 12 assumes some programming experience. Students can show programming experience by taking one of the courses listed in the prerequisite list below or by taking the CSE python Test-out Exam: https://undergrad.soe.ucsc.edu/cse-20-testout-exam (Formerly CSE 12 and CSE 12L)',
            lecture: 'MW 05:20PM-06:55PM',
            lab: ['M 12:15PM-02:00PM @ J Baskin Engr 109'],
            location: 'Remote'
        },
        {
            index: 3,
            id: 'CSE 30',
            title: 'Programming Abstractions: Python',
            professor: 'Oswald Campesato',
            career: 'Undergraduate',
            grading: 'Student Option',
            class_number: '51635',
            type: 'Lecture',
            mode: 'Synchronous Online',
            credits: '7 units',
            ge: '',
            status: 'Waitlist',
            open_seats: '0',
            current_seats: '300',
            max_seats: '300',
            waitlist_cap: '0',
            waitlist_total: '0',
            prereq: 'CSE 20 or BME 160; and MATH 3 or MATH 11A or MATH 19A or AM 3 or AM 11A or ECON 11A, or a score of 400 or higher on the mathematics placement examination (MPE)',
            notes: 'Enroll in lecture and associated secondary lab. Enrollment restricted to frosh, sophomores, or computer science, computer engineering, computer game design, bioinformatics, biomolecular engineering and bioinformatics, electrical engineering, network and digital technology, robotics engineering, and technology information management majors and computer science, computer game design, computer engineering, and robotics proposed majors during First Pass enrollment.',
            desc: 'Introduction to software development in Python focusing on structuring software in terms of objects endowed with primitive operations. Introduces concepts and techniques via a sequence of concrete case studies. Coursework consists of programming assignments and a final examination. Note that CSE 30 assumes some Python experience, students trained in a different language should self-study Python to prepare for CSE 30. See CSE Testout Exam for resources and further information.',
            lecture: 'TuTh 05:20PM-06:55PM',
            lab: ['M 08:00AM-09:05AM @ Cowell Com 134'],
            location: 'Remote'
        },
        
    ]

    function searchTab() {
        return (
            <div className="enrollment-block">
                    <div className="search-bar">
                        <IoSearch style={{justifyContent:'center'}} size={50}/>
                        <input className="bar" style={{margin: '0% 0% 30px 0%'}}type="text" placeholder="Search Classes" onChange={handleFilter}></input>
                        <FormControl required sx={{mx: 1, maxWidth: 150, borderRadius: '16px', width: '100%'}}>
                            <InputLabel>Term</InputLabel>
                            <Select
                            value={term}
                            label="Term *"
                            onChange={handleChange}
                            autoWidth
                            size="medium"
                            >
                            <MenuItem value={'2024 Summer'}>2024 Summer</MenuItem>
                            <MenuItem value={'2024 Spring'}>2024 Spring</MenuItem>
                            <MenuItem value={'2023 Winter'}>2023 Winter</MenuItem>
                            </Select>
                        </FormControl>
                    </div>

                    <div className="search-results-container">
                            <section class="search_table__body">
                        <table className="search-table">
                            <thead>
                                <tr style={{color:'black'}}>
                                    <th style={{padding: '7px'}}> ID </th>
                                    <th style={{padding: '7px'}}> Title </th>
                                    <th style={{padding: '7px'}}> Professor </th>
                                    <th style={{padding: '7px'}}> Units </th>
                                    <th style={{padding: '7px'}}> Status </th>
                                    <th style={{padding: '7px'}}> Lecture </th>
                                    <th style={{padding: '7px'}}> Room </th>
                                    <th style={{padding: '7px'}}> Lab </th>
                                    <th style={{padding: '7px'}}> </th>
                                </tr>
                            </thead>
                            <tbody> 
                            {filterData.map((item) => {
                                return (    
                                    <>
                                        <tr style={{borderBottom: '1px solid black', color:'black'}} >
                                            <td style={{ fontWeight:'bolder'}} onClick={() => handleOpen(item.index)}> {item.id} </td>
                                            <td onClick={() => handleOpen(item.index)}> {item.title} </td>
                                            <td onClick={() => handleOpen(item.index)}> {item.professor} </td>
                                            <td onClick={() => handleOpen(item.index)}> {item.credits[0]}</td>
                                            <td onClick={() => handleOpen(item.index)}> 
                                                <div style={{display:'flex',justifyContent:'center'}}> 
                                                    {getAvailability(item.status)} 
                                                </div> 
                                                <div style={{display:'flex',justifyContent:'center'}}>
                                                    <h5>{item.status}</h5>
                                                </div>
                                            </td>
                                            <td onClick={() => handleOpen(item.index)}> {item.lecture}</td>
                                            <td onClick={() => handleOpen(item.index)}> {item.location}</td>
                                            <td onClick={() => handleOpen(item.index)}> {item.lab} </td>
                                            <td><FiPlusCircle className="addbtn" title="Add Class" size={30} onClick={() => changeState(item)}/></td>
                                        </tr>
                                        <Modal
                                            open={open === item.index}
                                            onClose={handleClose}
                                            closeAfterTransition
                                            slots={{ backdrop: Backdrop }}
                                            key={item.index}
                                            slotProps={{
                                            backdrop: {
                                                timeout: 500,
                                            },
                                            }}
                                            >
                                            <Fade in={open===item.index}>
                                            <Box sx={style}>
                                                <Typography variant="h6" component="h2">
                                                    <h1 style={{color: 'rgb(40, 100, 150)'}}>{item.title}</h1>
                                                    <hr></hr>
                                                </Typography>
                                                <Typography sx={{ mt: 2 }}>
                                                    <div className="class-modal">
                                                        <div className="class-block">
                                                            <div className="sub-title">
                                                                <h2> Class Details</h2>
                                                            </div>
                                                            <div className="class-body" style={{padding:'2% 12% 2% 12%'}}>
                                                                    <div className="cd-box">
                                                                        <div className="labels">
                                                                            <h4>Career: </h4> 
                                                                            <h4>Grading: </h4>
                                                                            <h4>Class Number: </h4>
                                                                            <h4>Type: </h4>
                                                                            <h4>Instruction Mode: </h4>
                                                                            <h4>Credits: </h4>
                                                                            <h4>General Education: </h4>
                                                                        </div>
                                                                        <div className="details">
                                                                            <h4>{item.career}</h4>
                                                                            <h4>{item.grading}</h4>
                                                                            <h4>{item.class_number}</h4>
                                                                            <h4>{item.type}</h4>
                                                                            <h4>{item.mode}</h4>
                                                                            <h4>{item.credits}</h4>
                                                                            <h4>{item.ge}</h4>
                                                                        </div>
                                                                        
                                                                    </div>
                                                                    <div className="cd-box">
                                                                        <div className="labels">
                                                                            <h4>Status: </h4>
                                                                            <h4>Available Seats: </h4>
                                                                            <h4>Enrolled: </h4>
                                                                            <h4>Enrollment Capacity: </h4>
                                                                            <h4>Waitlist Capacity: </h4>
                                                                            <h4>Waitlist Total: </h4>
                                                                        </div>
                                                                        <div className="details">
                                                                            <h4>{item.status}</h4>
                                                                            <h4>{item.open_seats}</h4>
                                                                            <h4>{item.current_seats}</h4>
                                                                            <h4>{item.max_seats}</h4>
                                                                            <h4>{item.waitlist_cap}</h4>
                                                                            <h4>{item.waitlist_total}</h4>
                                                                        </div>
                                                                    </div>
                                                                </div>                                   
                                                            <hr></hr>
                                                        </div>
                                                        
                                                        <div className="class-block">
                                                            <div className="sub-title">
                                                                <h2>Description</h2>
                                                            </div>
                                                            <div className="class-body">
                                                                <p>{item.desc}</p>
                                                            </div>
                                                            <hr></hr>
                                                        </div>
                                                        
                                                        <div className="class-block">
                                                            <div className="sub-title">
                                                                <h2>Enrollment Requirements</h2>
                                                            </div>
                                                            <div className="class-body">
                                                                <p>Prerequisite(s): {item.prereq}</p>
                                                            </div>
                                                            <hr></hr>
                                                        </div>

                                                        <div className="class-block">
                                                            <div className="sub-title">
                                                                <h2>Class Notes</h2>
                                                            </div>
                                                            <div className="class-body">
                                                                <p>{item.notes}</p>
                                                            </div>
                                                            <hr></hr>
                                                        </div>

                                                        <div className="class-block">
                                                            <div className="sub-title">
                                                                <h2>Meeting Information</h2>
                                                            </div>
                                                            <div className="class-body">
                                                                <div className="meeting-info">
                                                                    <div className="meeting-info-block">
                                                                        <h4>Days & Times</h4>
                                                                        <h4>{item.lecture}</h4>
                                                                    </div>
                                                                    <div className="meeting-info-block">
                                                                        <h4>Room</h4>
                                                                        <h4>{item.location}</h4>
                                                                    </div>
                                                                    <div className="meeting-info-block">
                                                                        <h4>Instructor</h4>
                                                                        <h4>{item.professor}</h4>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <hr></hr>
                                                        </div>

                                                        <div className="class-block">
                                                            <div className="sub-title">
                                                                <h2>Associated Discussion Sections or Labs</h2>
                                                            </div>
                                                            <div className="class-body">
                                                                <section class="table__body" style={{border: '2px solid black'}}>
                                                                    <table>
                                                                        <tbody className="no-hover">
                                                                            <tr style={{borderBottom: '1px solid black'}}>
                                                                                <td>
                                                                                    <div className="meeting-info-block">
                                                                                        <h4>#50924 LBS 01A</h4>
                                                                                        <h4>Enrl: 24 / 35</h4>
                                                                                    </div>
                                                                                </td>
                                                                                <td>
                                                                                    <div className="meeting-info-block">
                                                                                        <h4>M 03:00PM-04:30PM</h4>
                                                                                        <h4>Wait: 0 / 0</h4>
                                                                                    </div>
                                                                                </td>
                                                                                <td> 
                                                                                    <div className="meeting-info-block">
                                                                                        <h4>Staff</h4>
                                                                                        <h4> Open</h4>
                                                                                    </div>
                                                                                </td>
                                                                                <td> 
                                                                                    <div className="meeting-info-block">
                                                                                        <h4>Loc: Kresge Acad 3401</h4>
                                                                                    </div>
                                                                                </td>
                                                                            </tr>     
                                                                            
                                                                            <tr style={{borderBottom: '1px solid black'}}>
                                                                                <td>
                                                                                    <div className="meeting-info-block">
                                                                                        <h4>#50924 LBS 01A</h4>
                                                                                        <h4>Enrl: 24 / 35</h4>
                                                                                    </div>
                                                                                </td>
                                                                                <td>
                                                                                    <div className="meeting-info-block">
                                                                                        <h4>M 03:00PM-04:30PM</h4>
                                                                                        <h4>Wait: 0 / 0</h4>
                                                                                    </div>
                                                                                </td>
                                                                                <td> 
                                                                                    <div className="meeting-info-block">
                                                                                        <h4>Staff</h4>
                                                                                        <h4> Open</h4>
                                                                                    </div>
                                                                                </td>
                                                                                <td> 
                                                                                    <div className="meeting-info-block">
                                                                                        <h4>Loc: Kresge Acad 3401</h4>
                                                                                    </div>
                                                                                </td>
                                                                            </tr>   
                                                                        </tbody>
                                                                    </table>
                                                                </section>
                                                            </div>
                                                            <hr></hr>
                                                        </div>
                                                    </div>    
                                                </Typography>
                                            </Box>
                                            </Fade>
                                        </Modal>
                                    </>
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
                                                <td><FaRegCircleXmark className="xbtn" title="Add Class" onClick={() => deleteClass(item.index)} size={30}/></td>
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
                            onChange={handleValue} 
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