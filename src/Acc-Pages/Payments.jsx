import React from "react";
import '../App.css';
import { useNavigate } from "react-router-dom";

export default function Payments() {

    let navigate = useNavigate();

    const payments_titles = [
        {
            title:'Date Paid',
        },
        {
            title:'Payment Type',
        },
        {
            title:'Paid Amount',
        },
    ]

    var payments_data = [
        
    ]

    return (
            <div className="container">
                <main class="table" id="table">
                    <section class="table__header">
                        <h1> Payments </h1>
                    </section>
                    <section class="table__body">
                        <table>
                            <thead>
                                <tr>
                                    {payments_titles.map((item) => {
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