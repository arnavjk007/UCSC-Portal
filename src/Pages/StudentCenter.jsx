import React from "react";
import { useNavigate } from "react-router-dom";

export default function StudentCenter() {

    var student_center_data = [
        {
            title: "Messages",
            buttons: ["Open Messages"],
            link: '/messages',
            rows: [
                {
                    first: 'Student Housing Status',
                    second: 'April 1'
                }
            ]
        },
        {
            title: "Holds",
            buttons: ["Open Holds"],
            link: 'messages',
            rows: [
                {
                    first: 'Financial Services',
                    second: 'April 1'
                }
            ]
        },
        {
            title: "Tasks",
            buttons: ["Open Tasks"],
            link: 'tasks',
            rows: [
                {
                    first: 'Student Housing Status',
                    second: 'April 1'
                }
            ]
        },
        {
            title: "Advisors",
            buttons: ["Contact Advisors"],
            link: 'advisors',
            rows: [
                {
                    first: 'Major Advisor',
                    second: 'John Doe'
                }
            ]
        },
        {
            title: "Financial Aid",
            buttons: ["Open Finances"],
            link: 'tasks',
            rows: [
                {
                    first: 'Fee',
                    second: '$100'
                }
            ]
        },
        {
            title: "Resources",
            buttons: ["Open Resources"],
            link: 'tasks',
            rows: [
                {
                    first: 'Academic Calendar'
                }
            ]
        },
        {
            title: 'Classes',
            buttons: ["Add/Drop", "Class Search"],
            link: 'enrollment',
            rows: [
                {
                    first: "COWL168",
                    second: "Online",
                },
            ]
        },
        {
            title: 'Forms',
            buttons: [],
            link: 'e-forms',
            rows: [
                {
                    first: "Part Time Application",
                    second: "",
                },
                {
                    first: "Petition for Major/Minor",
                    second: "",
                },
                {
                    first: "Request Legal Name Change",
                    second: "",
                },
                {
                    first: "Request Letter of Reciprocity",
                    second: "",
                },
            ]
        }
    ]

    let navigate = useNavigate();

    return (
        <div className="container">
            <div className="info-card" style={{height:'100%', overflow:'auto'}}>
                <h1>Student Center</h1>
                <hr></hr>

                <div className="cards">
                    <div className="info-grid">
                        {student_center_data.map((item) => {
                            return (
                                <div className="sc-card">
                                    <h2> {item.title} </h2>
                                    <hr></hr>
                                    <div className="sc-body">
                                        <div className="sc-btns">
                                            {item.buttons.map((value) => {
                                                return (
                                                    <button className="sc-btn"> {value} </button>
                                                )
                                            })}
                                            
                                        </div>
                                        
                                        <div className="rows">
                                            {item.rows.map((value) => {
                                                return (
                                                    <div className="row" onClick={() => navigate(value.link)}>
                                                        <div className="row-text">
                                                            <h5> {value.first} </h5>
                                                            <h5> {value.second}</h5>
                                                        </div>
                                                    </div>
                                                )
                                            })}
                                            

                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                        


                    </div>
                </div>
                
             
                
            </div>
        </div>
    )
}