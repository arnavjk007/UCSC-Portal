import React from "react";
import '../App.css';
import { useNavigate } from "react-router-dom";

export default function Activity() {

    let navigate = useNavigate();

    const activity_titles = [
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

    var activity_data = [
        
    ]

    return (
            <div className="container">
                <main class="table" id="table">
                    <section class="table__header">
                        <h1> Account Activity </h1>
                    </section>
                    <section class="table__body">
                        <table>
                            <thead>
                                <tr>
                                    {activity_titles.map((item) => {
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