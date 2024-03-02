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

    return (
       
        <div className="wrapper">

            <div className="cards">
                <div className="academic-card" onClick={() => {navigate("/academics/advisors")}}>
                    <h1>Advisors</h1>
                    <FaChalkboardTeacher size={150}/>
                    </div>
                <div className="academic-card" onClick={() => {navigate("/academics/committees")}}>
                    <h1>Academic Committees</h1>
                    <MdGroups size={150}/>
                    </div>
                <div className="academic-card" onClick={() => {navigate("/academics/coursehistory")}}>
                    <h1>Course History</h1>
                    <MdOutlineClass size={150}/>
                    </div>
                <div className="academic-card" onClick={() => {navigate("/academics/degreeprogress")}}>
                    <h1>Degree Progress</h1>
                    <FaChartLine size={150}/>
                    </div>
                <div className="academic-card" onClick={() => {navigate("/academics/evaluations")}}>
                    <h1>Evaluations</h1>
                    <PiListMagnifyingGlassBold size={150}/>
                    </div>
                <div className="academic-card" onClick={() => {navigate("/academics/grades")}}>
                    <h1>Grades</h1>
                    <GoChecklist size={150}/>
                    </div>
                <div className="academic-card" onClick={() => {navigate("/academics/planner")}}>
                    <h1>Planner</h1>
                    <GrPlan size={150}/>
                    </div>
                <div className="academic-card" onClick={() => {navigate("/academics/testscores")}}>
                    <h1>Test Scores</h1>
                    <PiExam size={150}/>
                    </div>
                <div className="academic-card" onClick={() => {navigate("/academics/creditreport")}}>
                    <h1>Credit Report</h1>
                    <HiOutlineDocumentReport size={150}/>
                    </div>
                <div className="academic-card" onClick={() => {navigate("/academics/unofficialtranscript")}}>
                    <h1>Unofficial Transcript</h1>
                    <IoDocumentOutline size={150}/>
                    </div>
                <div className="academic-card" onClick={() => {navigate("/academics/whatifreport")}}>
                    <h1>What-if Report</h1>
                    <FaFileCircleQuestion size={150}/>
                    </div>
            </div>
                
        </div>
            
    )
}