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
            
        </div>
    )
}