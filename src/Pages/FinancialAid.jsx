import React from "react";
import '../App.css';
import { useNavigate } from "react-router-dom";
import { GiReceiveMoney } from "react-icons/gi";
import { TbMoneybag } from "react-icons/tb";
import { MdOutlinePendingActions } from "react-icons/md";
import { TbReportMoney } from "react-icons/tb";
import { PiStudent } from "react-icons/pi";

export default function FinancialAid() {

    const financial_titles = [
        {
            title: 'View Financial Aid',
            icon: <GiReceiveMoney size={125}/>,
            path: "charges-due"
        },
        {
            title: "Rewards",
            icon: <TbMoneybag size={125}/>,
            path: 'epay'
        }, 
        {
            title: "Pending Financial Aid",
            icon: <MdOutlinePendingActions size={125}/>,
            path: 'direct-deposit'
        },
        {
            title: "Report Other Aid",
            icon: <TbReportMoney size={125}/>,
            path: 'billing-statements'
        },
        {
            title: "Student Permissions",
            icon: <PiStudent size={125}/>,
            path: 'summary'
        },
    ]

    return (
            <div className="container">
                <div className="cards">
                    <div className="grid">
                        {financial_titles.map((item) => {
                        return (
                            <div className="sub-card">
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