import React from "react";
import '../App.css';
import { MdOutlinePayment } from "react-icons/md";
import { TbClockDollar } from "react-icons/tb";
import { LiaMoneyCheckAltSolid } from "react-icons/lia";
import { IoDocumentsOutline } from "react-icons/io5";
import { FaFileInvoiceDollar } from "react-icons/fa6";
import { MdOutlinePayments } from "react-icons/md";
import { PiStudent } from "react-icons/pi";
import { FaWpforms } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import { RxActivityLog } from "react-icons/rx";

const account_titles = [
    {
        title: 'Charges Due',
        icon: <TbClockDollar size={125}/>,
        path: "charges-due",
        link: ''
    },
    {
        title: "eBill/ePay",
        icon: <MdOutlinePayment size={125}/>,
        path: 'epay',
        link: ''
    }, 
    {
        title: "Direct Deposit",
        icon: <LiaMoneyCheckAltSolid size={125}/>,
        path: 'direct-deposit',
        link: ''
    },
    {
        title: "Billing Statements",
        icon: <IoDocumentsOutline size={125}/>,
        path: 'billing-statements',
        link: ''
    },
    {
        title: "Account Summary",
        icon: <FaFileInvoiceDollar size={125}/>,
        path: 'summary',
        link: ''
    },
    {
        title: "Account Activity",
        icon: <RxActivityLog size={125}/>,
        path: 'activity',
        link: ''
    },
    {
        title: "Payments",
        icon: <MdOutlinePayments size={125}/>,
        path: 'payments',
        link: ''
    },
    {
        title: "Student Permissions",
        icon:  <PiStudent size={125}/>,
        path: 'student-permissions',
        link: ''
    },
    {
        title: "Forms & FAQs",
        icon: <FaWpforms size={125}/>,
        path: '',
        link: 'https://sbs.ucsc.edu/faqs_forms/index.html'
    },
]
export default function Account() {
    
    let navigate = useNavigate();

    function openLink(link) {
        if (link === '') {
            return null
        }
        return window.open(link);
    }

    return (
        <div className="container">
                <div className="cards">
                    <div className="grid">
                        {account_titles.map((item) => {
                        return (
                            <div className="card" onClick={() => {navigate(item.path); openLink(item.link)}}>
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