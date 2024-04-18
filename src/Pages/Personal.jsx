import React from "react";
import '../App.css';
import { useNavigate } from "react-router-dom";
import { FaLocationDot } from "react-icons/fa6";
import { MdPermIdentity } from "react-icons/md";
import { TfiEmail } from "react-icons/tfi";
import { MdOutlineDriveFileRenameOutline } from "react-icons/md";
import { RiParentFill } from "react-icons/ri";
import { FaPhoneAlt } from "react-icons/fa";
import { MdPrivacyTip } from "react-icons/md";
import { FaHouseChimneyUser } from "react-icons/fa6";

export default function Personal() {
    
    let navigate = useNavigate();

    const personal_titles = [
        {
            title: 'Addresses',
            icon: <FaLocationDot size={125}/>,
            path: "addresses"
        },
        {
            title: "Gender Identity",
            icon: <MdPermIdentity size={125}/>,
            path: 'gender-identity'
        }, 
        {
            title: "Email Addresses",
            icon: <TfiEmail size={125}/>,
            path: 'email-addresses'
        },
        {
            title: "Names",
            icon: <MdOutlineDriveFileRenameOutline size={125}/>,
            path: 'names'
        },
        {
            title: "Emergency Contacts",
            icon: <RiParentFill size={125}/>,
            path: 'emergency-contacts'
        },
        {
            title: "Phone",
            icon: <FaPhoneAlt size={125}/>,
            path: 'phone'
        },
        {
            title: "Privacy Settings",
            icon: <MdPrivacyTip size={125}/>,
            path: 'privacy-settings'
        },
        {
            title: "Residency Information",
            icon:  <FaHouseChimneyUser size={125}/>,
            path: 'residency-information'
        },

    ]

    return (
            <div className="container">
                <div className="cards">
                    <div className="grid">
                        {personal_titles.map((item) => {
                        return (
                            <div className="card" onClick={() => {navigate(item.path)}}>
                                <h1 style={{fontSize:'30px'}}>{item.title}</h1>
                                {item.icon}
                            </div>
                            )
                        })}
                    </div>
                </div>
            </div>
    )
}