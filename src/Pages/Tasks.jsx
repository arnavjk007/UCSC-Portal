import React from "react";
import '../App.css';
import { useNavigate } from "react-router-dom";

const tasks_titles = [
    {
        title:'From',
    },
    {
        title:'Date Sent',
    },
    {
        title:'Date Read',
    },
    {
        title:'Expiration Date',
    },
    {
        title:'Subject',
    },
]

export default function Tasks() {

    let navigate = useNavigate();

    //style for modal
    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        width: '60%',
        height: '80%',
        overflow: 'auto',
        transform: 'translate(-50%, -50%)',
        bgcolor: 'background.paper',
        border: '2px solid #000',
        borderRadius: '16px',
        boxShadow: 24,
        p: 4,
    };
    
    var tasks_data = [
        {
           from: 'Financial Services',
           sent: 'April 1',
           read: 'New Message',
           expiration: '05/05/2024',
           subject: 'Tuition Fees'
        },
        {
            from: 'Financial Services',
            sent: 'April 1',
            read: 'New Message',
            expiration: '05/05/2024',
            subject: 'Tuition Fees'
         },
         {
            from: 'Financial Services',
            sent: 'April 1',
            read: 'New Message',
            expiration: '05/05/2024',
            subject: 'Tuition Fees'
         },
         {
            from: 'Financial Services',
            sent: 'April 1',
            read: 'New Message',
            expiration: '05/05/2024',
            subject: 'Tuition Fees'
         },
         {
            from: 'Financial Services',
            sent: 'April 1',
            read: 'New Message',
            expiration: '05/05/2024',
            subject: 'Tuition Fees'
         },
    ]

    return (
            <div className="container">

                <main class="table" id="table">
                    <section class="table__header">
                        <h1>Tasks </h1>
                    </section>
                    <section class="table__body">
                        <table>
                            <thead>
                                <tr>
                                    {tasks_titles.map((item) => {
                                            return (
                                                <th> {item.title} </th>
                                            )
                                    })}        
                                </tr>
                            </thead>
                            <tbody>
                                {tasks_data.map((item) => {
                                    return (
                                        <tr>
                                            <td> {item.from} </td>
                                            <td> {item.sent} </td>
                                            <td> {item.read} </td>
                                            <td> {item.expiration} </td>
                                            <td> {item.subject} </td>
                                        </tr>
                                    )
                                })}  
                            </tbody>
                        </table>
                    </section>
                </main>
            </div>
            
    )
}