import React from "react";
import '../App.css';
import { useNavigate } from "react-router-dom";

export default function Summary() {

    let navigate = useNavigate();

    const summary_titles = [
        {
            title:'Date',
        },
        {
            title:'Item',
        },
        {
            title:'Term',
        },
        {
            title:'Charge',
        },
        {
            title:'Payment',
        },
        {
            title:'Refund',
        },
    ]

    var summary_data = [
        
    ]

    return (
            <div className="container">
                <main class="table" id="table">
                    <section class="table__header">
                        <h1> Account Summary </h1>
                    </section>
                    <section class="table__body">
                        <table>
                            <thead>
                                <tr>
                                    {summary_titles.map((item) => {
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