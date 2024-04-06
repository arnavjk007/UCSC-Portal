import React, { useState } from "react";
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
import { CiLogout } from "react-icons/ci";
import './App.css';
import { useNavigate } from "react-router-dom";

const Sidebar = () => {

    let navigate = useNavigate();

    const [btnState, setBtnState] = useState(null);

    function handleState(id) {
        setBtnState(id);
    }

    //use <footer> tag for logout button

    const sidebar_data = [
        {
            id: 0,
            name: 'Home',
            path: '/',
            icon: IoHome
        },
        {
            id: 1,
            name: 'Messages',
            path: '/messages',
            icon: MdEmail 
        },
        {
            id: 2,
            name: 'Holds',
            path: '/holds',
            icon: FaLock
        },
        {
            id: 3,
            name: 'Tasks',
            path: '/tasks',
            icon: FaList 
        },
        {
            id: 4,
            name: 'Academics',
            path: '/academics',
            icon: FaGraduationCap
        },
        {
            id: 5,
            name: 'Account',
            path: '/account',
            icon: FaDollarSign 
        },
        {
            id: 6,
            name: 'Enrollment',
            path: '/enrollment',
            icon: IoMdCheckboxOutline
        },
        {
            id: 7,
            name: 'Financial Aid',
            path: '/financial-aid',
            icon: FaRegMoneyBillAlt 
        },
        {
            id: 8,
            name: 'Personal Info',
            path: '/personal-info',
            icon: FaUser
        },
        {
            id: 9,
            name: 'Resources',
            path: '/resources',
            icon: TfiNewWindow
        },
        {
            id: 10,
            name: 'Passphrase',
            path: '/passphrase',
            icon: FaIdCard 
        },
        {
            id: 11,
            name: 'Student Center',
            path: '/student-center',
            icon: FaBuildingColumns
        },
        {
            id: 12,
            name: 'eForms',
            path: '/eforms',
            icon: BsPencilSquare
        }
    ]
    return (
            <div className="sidebar"> 
                <div className="image">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/The_University_of_California_1868_UCSC.svg/640px-The_University_of_California_1868_UCSC.svg.png" alt="UCSC logo"></img>   
                </div>
                <div className="contents">
                    <div>
                    {sidebar_data.map((item) => {
                        return (
                            <div className="btn">
                                <button className={btnState === item.id ? 'active' : ''} title={item.name}  style={{display:'block'}} onClick={() => {navigate(item.path); handleState(item.id)}}> 
                                    <div style={{display:'flex', justifyContent:'center'}}>
                                        <item.icon size={25} /> 
                                    </div>
                                    <div style={{display:'flex', textAlign:'center', justifyContent:'center'}}>
                                        <h4> {item.name} </h4>  
                                    </div>
                                </button>
                            </div>
                        )
                    })}
                    </div> 
                </div>
                <footer className="logout-btn">
                    <button style={{justifyContent: "center"}}onClick={() => {navigate("/login")}}> <CiLogout size={35} /> </button>
                </footer>     
            </div>
    )
}

export default Sidebar;
