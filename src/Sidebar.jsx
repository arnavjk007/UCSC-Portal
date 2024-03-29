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
import { IoLogInOutline } from "react-icons/io5";
import './App.css';
import { useNavigate } from "react-router-dom";

const Sidebar = () => {

    let navigate = useNavigate();
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);

    const sidebar_data = [
        {
            name: 'Home',
            path: '/',
            icon: IoHome
        },
        {
            name: 'Messages',
            path: '/messages',
            icon: MdEmail 
        },
        {
            name: 'Holds',
            path: '/holds',
            icon: FaLock
        },
        {
            name: 'Tasks',
            path: '/tasks',
            icon: FaList 
        },
        {
            name: 'Academics',
            path: '/academics',
            icon: FaGraduationCap
        },
        {
            name: 'Account',
            path: '/account',
            icon: FaDollarSign 
        },
        {
            name: 'Enrollment',
            path: '/enrollment',
            icon: IoMdCheckboxOutline
        },
        {
            name: 'Financial Aid',
            path: '/financial-aid',
            icon: FaRegMoneyBillAlt 
        },
        {
            name: 'Personal Info',
            path: '/personal-info',
            icon: FaUser
        },
        {
            name: 'Resources',
            path: '/resources',
            icon: TfiNewWindow
        },
        {
            name: 'Passphrase',
            path: '/passphrase',
            icon: FaIdCard 
        },
        {
            name: 'Student Center',
            path: '/student-center',
            icon: FaBuildingColumns
        },
        {
            name: 'eForms',
            path: '/eforms',
            icon: BsPencilSquare
        }
    ]
    return (
                <div className="nav"> 
                        <div className="image">
                            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/The_University_of_California_1868_UCSC.svg/640px-The_University_of_California_1868_UCSC.svg.png" alt="UCSC logo"></img>   
                        </div>
                        <div className="contents">
                            <div>
                            {sidebar_data.map((item) => {
                                return (
                                    <div className="btn">
                                  
                                            <button title={item.name}  style={{display:'block'}} onClick={() => {navigate(item.path)}}> 
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
                            <div>
                            </div>
                            
                            </div>
                            <div className="logout-btn">
                                <button style={{justifyContent: "center"}}onClick={() => {navigate("/login")}}> <IoLogInOutline size={35}/> </button>
                            </div>
                            
                        
                       
                </div>
    )
}

export default Sidebar;
