import React from "react";
import { IoHome } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
import { FaLock } from "react-icons/fa";
import { FaList } from "react-icons/fa";
import { FaGraduationCap } from "react-icons/fa6";
import { FaDollarSign } from "react-icons/fa";
import { IoMdCheckboxOutline } from "react-icons/io";
import { FaRegMoneyBillAlt } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import { TfiNewWindow } from "react-icons/tfi";
import { FaIdCard } from "react-icons/fa";
import { FaBuildingColumns } from "react-icons/fa6";
import { BsPencilSquare } from "react-icons/bs";
import './App.css';
import { useNavigate } from "react-router-dom";

const Sidebar = () => {

    let navigate = useNavigate();

    const sidebar_data = [
        {
            name: 'Home',
            path: '/home',
            icon: <IoHome size={20} style={{position:"relative", top:'2.5px'}}/>
        },
        {
            name: 'Messages',
            path: '/messages',
            icon: <MdEmail size={20} style={{position:"relative", top:'2.5px'}}/>
        },
        {
            name: 'Holds',
            path: '/holds',
            icon: <FaLock size={20} style={{position:"relative", top:'2.5px'}}/>
        },
        {
            name: 'Tasks',
            path: '/tasks',
            icon: <FaList size={20} style={{position:"relative", top:'2.5px'}}/>
        },
        {
            name: 'Academics',
            path: '/academics',
            icon: <FaGraduationCap size={20} style={{position:"relative", top:'2.5px'}}/>
        },
        {
            name: 'Account',
            path: '/account',
            icon: <FaDollarSign size={20} style={{position:"relative", top:'2.5px'}}/>
        },
        {
            name: 'Enrollment',
            path: '/enrollment',
            icon: <IoMdCheckboxOutline size={20} style={{position:"relative", top:'2.5px'}}/>
        },
        {
            name: 'Financial Aid',
            path: '/financialaid',
            icon: <FaRegMoneyBillAlt size={20} style={{position:"relative", top:'2.5px'}}/>
        },
        {
            name: 'Personal Info',
            path: '/personalinfo',
            icon: <FaUser size={20} style={{position:"relative", top:'2.5px'}}/>
        },
        {
            name: 'Resources',
            path: '/resources',
            icon: <TfiNewWindow size={20} style={{position:"relative", top:'2.5px'}}/>
        },
        {
            name: 'Passphrase',
            path: '/passphrase',
            icon: <FaIdCard size={20} style={{position:"relative", top:'2.5px'}}/>
        },
        {
            name: 'Student Center',
            path: '/studentcenter',
            icon: <FaBuildingColumns size={20} style={{position:"relative", top:'2.5px'}}/>
        },
        {
            name: 'eForms',
            path: '/eforms',
            icon: <BsPencilSquare size={20} style={{position:"relative", top:'2.5px'}}/>
        },
    ]
    return (
                <div className="nav">
                        <div className="image">
                            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/The_University_of_California_1868_UCSC.svg/640px-The_University_of_California_1868_UCSC.svg.png" alt="UCSC logo"></img>
                        </div>
                        {sidebar_data.map((item) => {
                            return (
                                <div className="btn">
                                    <button onClick={() => {navigate(item.path)}}>{item.icon} {item.name}</button>
                                </div>
                            )
                        })}
                        <div className="logout-btn">
                            <button onClick={() => {navigate("/login")}}>Log out</button>
                        </div>
                </div>
    )
}

export default Sidebar;


