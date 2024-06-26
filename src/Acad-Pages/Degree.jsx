import React from "react";
import '../App.css';
import { useNavigate } from "react-router-dom";
import { FaCheck } from "react-icons/fa";
import { FaDiamond } from "react-icons/fa6";
import { FaStarOfLife } from "react-icons/fa";
import { ImCross } from "react-icons/im";
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import { IoIosArrowDropdown } from "react-icons/io";



//put icons in front of titles to indicate completion status.. retrieve from backend
// dropdown icon -> rotate 180 degrees

var uniData = [
    {
        title: 'UC AH&I: American History'
    },
    {
        title: 'UC AH&I: American Institutions'
    },
    {
        title: 'UC ELWR: Entry Level Writing'
    }
]

var genData = [
    {
        title: 'GE CC: Cross-Cultural Analysis'
    },
    {
        title: 'GE ER: Ethnicity and Race'
    },
    {
        title: 'GE IM: Interpreting Art and Media'
    },
    {
        title: ' GE MF: Mathematical and Formal Reasoning '
    },
    {
        title: ' GE SI: Scientific Inquiry '
    },
    {
        title: 'GE SR: Statistical Reasoning '
    },
    {
        title: ' GE TA: Textual Analysis '
    },
    {
        title: ' GE PE: Perspectives '
    },
    {
        title: ' GE PR: Practice '
    },
    {
        title: ' GE C: Composition '
    },
    {
        title: ' GE DC: Disciplinary Communication ',
        info: 'All students must satisfy the DC requirement of each of their chosen majors. The DC requirement can be found in the Upper-Division Requirements section for each major below (R539)'
    }
]

var majorData = [
    {
        index: '0',
        title: 'Lower-Division Requirements'
    },
    {
        index: '1',
        title: 'Upper-Division Requirements'
    }
]

var innerMajorData = [[
        {
            index: '0',
            id: 'CSE 30',
            title: 'Programming Abs',
            status: <FaCheck style={{color:'green'}} size={17}/>
        },
        {
            index: '1',
            id: 'CSE 12',
            title:'Comp Sys/Assembly Lang',
            status:<FaDiamond style={{color:'rgb(232, 171, 16)'}} size={17}/>
        },
        {
            index: '2',
            id: 'CSE 16',
            title: 'Discrete Mathematics',
            status:<FaDiamond style={{color:'rgb(232, 171, 16)'}} size={17}/>
        }
    ],
    // ABOVE are LOWER divisoin courses list
    // BELOW are UPPER division courses list
    [
        {
            index: '0',
            id: 'CSE 101',
            title: 'Introduction to Data Structures and Algorithms',
            status: <ImCross style={{color:'red'}} size={17}/>
        },
        {
            index: '1',
            id: 'CSE 120',
            title: 'Computer Architecture',
            status: <ImCross style={{color:'red'}} size={17}/>
        },
        {
            index: '2',
            id: 'CSE 101M',
            title: 'Mathematical Thinking For Computer Science',
            status: <ImCross style={{color:'red'}} size={20}/>
        }
    ]

]

function universityReq() {
    return (
        <div className="req-container">
            {uniData.map((item) => {
                return (
                    <div>
                        <Accordion style={{background:'rgb(40, 100, 150)', margin:'1%', color:"yellow", borderRadius:'16px'}}>
                            <AccordionSummary
                            expandIcon={<IoIosArrowDropdown color="yellow" size={30}/>}
                            aria-controls="panel1-content"
                            id="panel1-header"
                            >
                            <h3>{item.title}</h3>
                            </AccordionSummary>
                            <AccordionDetails style={{color:'white'}}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                            malesuada lacus ex, sit amet blandit leo lobortis eget.
                            </AccordionDetails>
                        </Accordion>
                    </div>
                )
            })}
        </div>
    )
}

function generalReq() {
    return (
        <div className="req-container">
            {genData.map((item) => {
                return (
                    <div>
                        <Accordion style={{background:'rgb(40, 100, 150)', margin:'1%', color:"yellow", borderRadius:'16px'}}>
                            <AccordionSummary
                            expandIcon={<IoIosArrowDropdown color="yellow" size={30}/>}
                            aria-controls="panel1-content"
                            id="panel1-header"
                            >
                            <h3>{item.title}</h3>
                            </AccordionSummary>
                            <AccordionDetails style={{color:'white'}}>
                            {item.info}
                            </AccordionDetails>
                        </Accordion>
                    </div>
                )
            })}
        </div>
    )
}

function majorReq() {
    return (
        <div className="req-container">
            <Accordion style={{background:'rgb(40, 100, 150)', margin:'1%', color:"yellow", borderRadius:'16px'}}>
                <AccordionSummary
                expandIcon={<IoIosArrowDropdown color="yellow" size={30}/>}
                aria-controls="panel1-content"
                id="panel1-header"
                >
                <h3>Major Qualification GPA Requirement</h3>
                </AccordionSummary>
                <AccordionDetails style={{color:'white'}}>
                A GPA of 3.0 is required in major qualification courses. 
                The DPR does not calculate major qualification GPA but tracks your progress toward completion of these courses and non-passing attempts. 
                Contact your advisor if you have questions. (R2331)
                </AccordionDetails>
            </Accordion>

            {majorData.map((item) => {
                return (
                    <div>
                        <Accordion style={{background:'rgb(40, 100, 150)', margin:'1%', color:"yellow", borderRadius:'16px'}}>
                            <AccordionSummary
                            expandIcon={<IoIosArrowDropdown color="yellow" size={30}/>}
                            aria-controls="panel1-content"
                            id="panel1-header"
                            >
                            <h3>{item.title}</h3>
                            </AccordionSummary>
                            <AccordionDetails style={{color:'white'}}>
                            {innerMajorReq(item.index)}
                            </AccordionDetails>
                        </Accordion>
                    </div>
                )
            })}
        </div>
    )
}

function innerMajorReq(index) {
    return (
        <div>
            {innerMajorData[index].map((item) => {
                return ( 
                <div>
                    <Accordion style={{background:'rgb(173, 200, 231)', margin:'1%', color:"black", borderRadius:'16px'}}>
                        <AccordionSummary
                        expandIcon={<IoIosArrowDropdown color="black" size={30}/>}
                        aria-controls="panel1-content"
                        id="panel1-header"
                        >
                        <h3>{item.status} {item.id}</h3>
                        </AccordionSummary>
                        <AccordionDetails style={{color:'black'}}>
                        {item.title}
                        </AccordionDetails>
                    </Accordion>
                </div>
                )
            })}
        </div>
    )
}

function affiliateReq() {
    return (
        <div className="req-container">
            
            <div>
                <Accordion style={{background:'rgb(40, 100, 150)', margin:'1%', color:"yellow", borderRadius:'16px'}}>
                    <AccordionSummary
                    expandIcon={<IoIosArrowDropdown color="yellow" size={30}/>}
                    aria-controls="panel1-content"
                    id="panel1-header"
                    >
                    <h3>Merrill Reqs</h3>
                    </AccordionSummary>
                    <AccordionDetails style={{color:'white'}}>
                    Here are req courses
                    </AccordionDetails>
                </Accordion>
            </div>
        
        </div>
    )
}

export default function Degree() {

    const [value, setValue] = React.useState('1');

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    // FIX OVERFLOW 
    return (

            <div className="container" style={{display:'block'}}>
            
                
                    <div className="cards">

                    
                        <div className="degree-grid">
                            <div className="small-info-card">
                                <div className="info-container">
                                    <h2 style={{textAlign:'center'}}> Academic Summary </h2>
                                    <hr></hr>
                                    
                                    <div className="info">
                                        <h3> UC GPA: </h3>
                                        <p> 2.0 minimum required </p>
                                    </div>

                                    <div className="info">
                                        <h3> Total Credits: </h3>
                                        <p> 180 credits minimum required </p>
                                    </div>

                                    <div className="info">
                                        <h3> % Graded Pass(P): </h3>
                                        <p> No more than 25% </p>
                                    </div>

                                    <div className="info">
                                        <h3> Senior Residency: </h3>
                                        <p> <a href="https://ucsc.smartcatalogiq.com/en/current/general-catalog/undergraduate-information/undergraduate-academic-program/university-requirements/residence/" target="_blank" rel="noreferrer">Learn more </a> about senior residency. </p>
                                    </div>

                                    <div className="info">
                                        <p> *Metrics are based on completed coursework* </p>
                                        <p> <a href="https://ue.ucsc.edu/degree-audit-project/resources/basics/academicsummary.html" target="_blank" rel="noreferrer">Learn more </a> about senior residency. </p>
                                        <p> <a href="https://ucsc.smartcatalogiq.com/current/general-catalog/undergraduate-information/undergraduate-academic-program/graduation-requirements/" target="_blank" rel="noreferrer">Learn more </a> about senior residency. </p>
                                    </div>
                                </div>

                            </div>

                            <div className="small-info-card">
                                <div className="info-container">
                                    <h2 style={{textAlign:'center'}}> Academic Objectives </h2>
                                    <hr></hr>

                                    <table className="info-table">
                                        <tr>
                                            <th> Expected Graduation Date </th>
                                            <td> 2080 Spring Quarter </td>
                                        </tr>
                                        <tr>
                                            <th> Program </th>
                                            <td> Undergraduate </td>
                                        </tr>
                                        <tr>
                                            <th> Plan </th>
                                            <td> Computer Science (BS) </td>
                                        </tr>
                                        <tr>
                                            <th> Req (Catalog) Term </th>
                                            <td> 2023 Fall Quarter </td>
                                        </tr>
                                    </table>
                                </div>
                            </div>

                            <div className="small-info-card">
                                <div className="info-container">
                                    <h2 style={{textAlign:'center'}}> Degree Progress Report Information </h2>
                                    <hr></hr>

                                    <div className="info">
                                        <p style={{fontSize:'16px'}}>The Degree Progress Report (DPR) is a tool to help track your progress toward graduation. <a href="https://ue.ucsc.edu/degree-audit-project/resources/index.html" target="_blank" rel="noreferrer">Resources are available </a> for all users to aid in the use of the DPR. 
                                            Contact your major or college advisor with any questions about graduation requirements. The DPR is being updated as part of the Degree Audit Initiative. 
                                            More information <a href="https://ue.ucsc.edu/degree-audit-project/about.html" target="_blank" rel="noreferrer">about the initiative</a>, as well as the <a href="https://ue.ucsc.edu/degree-audit-project/progress.html" target="_blank" rel="noreferrer">current status</a> of each program, is available on the initiative website. (RG2398)</p>
                                    </div>
                                </div>
                            </div>

                            <div className="small-info-card">
                                <div className="info-container">
                                    <h2 style={{textAlign:'center'}}> Legend </h2>
                                    <hr></hr>
                                    

                                    <div className="legend-container">
                                    <div className="legend-item">
                                            <FaCheck style={{color:'green'}} size={30}/>
                                            <p>Satisfied</p>
                                        </div>

                                        <div className="legend-item">
                                            <ImCross style={{color:'red'}} size={30}/>
                                            <p>Not Satisfied</p>
                                        </div>

                                        <div className="legend-item">
                                            <FaDiamond style={{color:'rgb(232, 171, 16)'}} size={30}/>
                                            <p>In Progress</p>
                                        </div>

                                        <div className="legend-item">
                                            <FaStarOfLife size={30}/>
                                            <p>Exception</p>
                                        </div>
                                    </div>
                                </div>

                                
                            </div>
                        </div>
                    </div>
                

                <div className="bttm-hstack">
                    <div className="bottom-card">
                    <Box sx={{ width: '100%', typography: 'body1' }}>
                        <TabContext value={value}>
                            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                            <TabList 
                                style={{display:'flex', justifyContent:'center', overflow:'auto', width:'100%'}} 
                                onChange={handleChange} 
                                variant="scrollable"
                                scrollButtons="auto">
                                <Tab label="University of California" value="1"/>
                                <Tab label="General Education" value="2" />
                                <Tab label="Major Requirements" value="3" />
                                <Tab label="College Requirements" value="4" />
                            </TabList>
                            </Box>
                            <TabPanel value="1">{universityReq()}</TabPanel>
                            <TabPanel value="2">{generalReq()}</TabPanel>
                            <TabPanel value="3">{majorReq()}</TabPanel>
                            <TabPanel value="4">{affiliateReq()}</TabPanel>
                            
                        </TabContext>
                    </Box>
                    </div>
                </div>
            </div>
            
    )
}