import React from "react";
import '../App.css';
import { useNavigate } from "react-router-dom";
import { HiAcademicCap } from "react-icons/hi2";
import { IoCalendarSharp } from "react-icons/io5";
import { MdEmergency } from "react-icons/md";
import { GrSecure } from "react-icons/gr";
import { IoLogInOutline } from "react-icons/io5";
import { FaWheelchair } from "react-icons/fa";
import { MdContactSupport } from "react-icons/md";


function openLink(link) {

    if (link === '') {
        return 
    }
    return window.open(link);
}

export default function Resources() {
    
    let navigate = useNavigate();

    const resources_titles = [
        {
            title: 'Academic Calendar',
            icon: <HiAcademicCap size={125}/>,
            path: '',
            link: 'https://registrar.ucsc.edu/calendar/2023-24calendar.pdf'
        },
        {
            title: "Campus Events",
            icon: <IoCalendarSharp size={125}/>,
            path: '',
            link: 'https://events.ucsc.edu/'
        }, 
        {
            title: "Emergency Services",
            icon: <MdEmergency size={125}/>,
            path: '',
            link: 'https://oes.ucsc.edu/'
        },
        {
            title: "Student Priacy/FERPA",
            icon: <GrSecure size={125}/>,
            path: '',
            link: 'https://registrar.ucsc.edu/records/privacy/index.html'
        },
        {
            title: "Canvas",
            icon: <img src="https://apps.asdk12.org/TechMenu/Item/GetFile/1064" alt="Canvas Logo" style={{maxWidth:'60%', color:'blue'}}/>,
            path: '',
            link: 'https://canvas.ucsc.edu/'
        },
        {
            title: "Login Services",
            icon: <IoLogInOutline size={125}/>,
            path: 'login-services',
            link: ''
        },
        {
            title: "Disability Resources",
            icon: <FaWheelchair size={125}/>,
            path: '',
            link: 'https://ucsc-accommodate.symplicity.com/students/index.php?s=home'
        },
        {
            title: "Slug Support",
            icon: <MdContactSupport size={125}/>,
            path: '',
            link: 'https://deanofstudents.ucsc.edu/slug-support/program/index.html'
        },
    ]

    return (
            <div className="container">
                <div className="cards">
                    <div className="grid">
                            {resources_titles.map((item) => {
                            return (
                                    <div className="sub-card" onClick={() => {{{navigate(item.path)} {openLink(item.link)}}}}>
                                        <h1 style={{fontSize:'30px'}}>{item.title}</h1>
                                        {item.icon}
                                    </div>
                            );
                        })}
                    </div>
                </div>
            </div>
    )
}