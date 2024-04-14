import React from "react";
import '../App.css';
import { useNavigate } from "react-router-dom";

export default function Charges() {

    let navigate = useNavigate();

    const holds_titles = [
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

    var charges_data = [
        
    ]

    return (
            <div className="container">

                <main class="table" id="table">
                    <section class="table__header">
                        <h1> Charges Due </h1>
                    </section>
                    <section class="table__body">
                        <table>
                            <thead>
                                <tr>
                                    {holds_titles.map((item) => {
                                        return (
                                            <th> {item.title} </th>
                                        )
                                    })}
                                </tr>
                            </thead>
                            <tbody>
                                
                            </tbody>
                        </table>
                    </section>
                </main>
            </div>
            
    )
}