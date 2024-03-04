import React from "react";
import '../App.css';
import { FaChalkboardTeacher } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { MdGroups } from "react-icons/md";
import { MdOutlineClass } from "react-icons/md";
import { HiOutlineDocumentReport } from "react-icons/hi";
import { GoChecklist } from "react-icons/go";
import { PiListMagnifyingGlassBold } from "react-icons/pi";
import { GrPlan } from "react-icons/gr";
import { PiExam } from "react-icons/pi";
import { FaChartLine } from "react-icons/fa";
import { IoDocumentOutline } from "react-icons/io5";
import { FaFileCircleQuestion } from "react-icons/fa6";

export default function Academics() {
    
    let navigate = useNavigate();

    const academics_data = [
        {
            title: 'Advisors',
            icon: <FaChalkboardTeacher size={150}/>,
            link: "advisors"
        },
        {
            title: "Academic Committees",
            icon: <MdGroups size={150}/>,
            link: 'committees'
        }, 
        {
            title: "Course History",
            icon: <MdOutlineClass size={150}/>,
            link: 'coursehistory'
        },
        {
            title: "Degree Progress",
            icon: <FaChartLine size={150}/>,
            link: 'degreeprogress'
        },
        {
            title: "Evaluations",
            icon: <PiListMagnifyingGlassBold size={150}/>,
            link: 'evaluations'
        },
        {
            title: "Grades",
            icon: <GoChecklist size={150}/>,
            link: 'grades'
        },
        {
            title: "Planner",
            icon: <GrPlan size={150}/>,
            link: 'planner'
        },
        {
            title: "Test Scores",
            icon:  <PiExam size={150}/>,
            link: 'testscores'
        },
        {
            title: "Credit Report",
            icon: <HiOutlineDocumentReport size={150}/>,
            link: 'creditreport'
        },
        {
            title: "Unofficial Transcript",
            icon: <IoDocumentOutline size={150}/>,
            link: 'unofficialtranscript'
        },
        {
            title: "What-if Report",
            icon: <FaFileCircleQuestion size={150}/>,
            link: 'whatifreport'
        },
    ]

    return (
        <div className="wrapper">
            <div className="cards">
                {academics_data.map((item) => {
                    return (
                        <div className="sub-card" onClick={() => {navigate(item.link)}}>
                            <h1>{item.title}</h1>
                            {item.icon}
                        </div>
                    );
                })}
            </div>
        </div>     
    )
}