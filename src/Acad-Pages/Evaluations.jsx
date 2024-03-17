import React from "react";
import '../App.css';
import { useNavigate } from "react-router-dom";

export default function Evaluations() {

    let navigate = useNavigate();

    const eval_titles = [
        {
            title: 'Eval'
        },
        {
            title: 'Class ID'
        },
        {
            title: 'Term'
        },
        {
            title: 'Course ID'
        },
        {
            title: 'Class Title'
        },
        {
            title: 'Instructor'
        },
        {
            title: 'Grade'
        },
        {
            title: 'Status'
        },
        {
            title: 'Updated'
        },
    ]



    return (
        
        <div className="wrapper">

            <div className="container">

                <main class="table" id="table">
                    <section class="table__header">
                        <h1> Student Evaluations </h1>
                    </section>
                    <section class="table__body">
                        <table>
                            <thead>
                                <tr>
                                    {eval_titles.map((item) => {
                                        return (                                       
                                                <th> {item.title} </th>
                                        )
                                    })}
                                </tr>
                                
                            </thead>

                            <tbody>
                                <tr>
                                
                                </tr>
                                
                            </tbody>
                        </table>
                    </section>
                </main>
            </div>


        </div>
            
    )
}