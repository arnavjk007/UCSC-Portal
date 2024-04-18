import React from "react";
import '../App.css';
import { useNavigate } from "react-router-dom";

const messages_titles = [
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

export default function Messages() {

    var messages_data = [
        {
           from: 'Student Housing Services',
           sent: 'April 1',
           read: 'New Message',
           expiration: '05/05/2024',
           subject: 'Housing App. Period Now Open!'
        },
        {
            from: 'Student Housing Services',
            sent: 'April 1',
            read: 'New Message',
            expiration: '05/05/2024',
            subject: 'Housing App. Period Now Open!'
         },
         {
            from: 'Student Housing Services',
            sent: 'April 1',
            read: 'New Message',
            expiration: '05/05/2024',
            subject: 'Housing App. Period Now Open!'
         },
         {
            from: 'Student Housing Services',
            sent: 'April 1',
            read: 'New Message',
            expiration: '05/05/2024',
            subject: 'Housing App. Period Now Open!'
         },
         {
            from: 'Student Housing Services',
            sent: 'April 1',
            read: 'New Message',
            expiration: '05/05/2024',
            subject: 'Housing App. Period Now Open!'
         }
    ]

    let navigate = useNavigate();

    return (      
            <div className="container">

                <main class="table" id="table">
                    <section class="table__header">
                        <h1>Messages</h1>
                    </section>
                    <section class="table__body">
                        <table>
                            <thead>
                                <tr>
                                    {messages_titles.map((item) => {
                                            return (
                                                <th> {item.title} </th>
                                            )
                                    })}
                                </tr>
                            </thead>
                            <tbody>
                                {messages_data.map((item) => {
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