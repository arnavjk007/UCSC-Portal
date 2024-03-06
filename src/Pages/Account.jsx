import React from "react";
import '../App.css';
import { MdOutlinePayment } from "react-icons/md";
import { TbClockDollar } from "react-icons/tb";
import { LiaMoneyCheckAltSolid } from "react-icons/lia";
import { IoDocumentsOutline } from "react-icons/io5";
import { FaFileInvoiceDollar } from "react-icons/fa6";
import { SiContactlesspayment } from "react-icons/si";
import { PiStudent } from "react-icons/pi";
import { FaWpforms } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";

export default function Account() {
    
    let navigate = useNavigate();

    const account_data = [
        {
            title: 'Charges Due',
            icon: <TbClockDollar size={125}/>,
            link: "charges-due"
        },
        {
            title: "eBill/ePay",
            icon: <MdOutlinePayment size={125}/>,
            link: 'epay'
        }, 
        {
            title: "Direct Deposit",
            icon: <LiaMoneyCheckAltSolid size={125}/>,
            link: 'direct-deposit'
        },
        {
            title: "Billing Statements",
            icon: <IoDocumentsOutline size={125}/>,
            link: 'billing-statements'
        },
        {
            title: "Summary & Activity",
            icon: <FaFileInvoiceDollar size={125}/>,
            link: 'summary'
        },
        {
            title: "Payments",
            icon: <SiContactlesspayment size={125}/>,
            link: 'payments'
        },
        {
            title: "Student Permissions",
            icon:  <PiStudent size={125}/>,
            link: 'student-permissions'
        },
        {
            title: "Forms & FAQs",
            icon: <FaWpforms size={125}/>,
            link: 'forms'
        },
    ]

    return (
        <div className="wrapper">
            <div className="cards">
                {account_data.map((item) => {
                    return (
                        <div className="sub-card" onClick={() => {navigate(item.link)}}>
                            <h1 style={{fontSize:'30px'}}>{item.title}</h1>
                            {item.icon}
                        </div>
                    )
                })}
            </div>
        </div>     
    )
}