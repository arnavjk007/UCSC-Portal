import React from "react";
import { IoHome } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
import { FaLock } from "react-icons/fa";
import { FaList } from "react-icons/fa";
import { FaGraduationCap } from "react-icons/fa6";
import { FaDollarSign } from "react-icons/fa";
import { IoMdCheckboxOutline } from "react-icons/io";
import { FaRegMoneyBillAlt } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import { TfiNewWindow } from "react-icons/tfi";
import { FaIdCard } from "react-icons/fa";
import { FaBuildingColumns } from "react-icons/fa6";
import { BsPencilSquare } from "react-icons/bs";
import { HiMiniPencilSquare } from "react-icons/hi2";
import '../App.css';
import { useNavigate } from "react-router-dom";

export default function Messages() {

    let navigate = useNavigate();

    return (
        
        <div className="wrapper">
            <div className="nav">
                    <div className="image">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/The_University_of_California_1868_UCSC.svg/640px-The_University_of_California_1868_UCSC.svg.png" alt="UCSC logo"></img>
                    </div>
                
                    <div className="btn">
                
                        <button onClick={() => {navigate("/home")}}><IoHome style={{position: 'relative', top: '1.5px'}} /> Home</button>
            
                    </div>

                    <div className="btn">
                        <button onClick={() => {navigate("/messages")}}><MdEmail style={{position: 'relative', top: '2.5px'}}/> Messages</button>
                    </div>

                    <div className="btn">
                        <button onClick={() => {navigate("/holds")}}><FaLock style={{position: 'relative', top: '2.5px'}}/> Holds</button>
                    </div>

                    <div className="btn">
                        <button onClick={() => {navigate("/tasks")}}><FaList style={{position: 'relative', top: '2.5px'}}/> Tasks</button>
                    </div>

                    <div className="btn">
                        <button onClick={() => {navigate("/academics")}}><FaGraduationCap style={{position: 'relative', top: '2.5px'}}/> Academics</button>
                    </div>

                    <div className="btn">
                        <button onClick={() => {navigate("/account")}}><FaDollarSign style={{position: 'relative', top: '2.5px'}}/> Account</button>
                    </div>

                    <div className="btn">
                        <button onClick={() => {navigate("/enrollment")}}><IoMdCheckboxOutline style={{position: 'relative', top: '2.5px'}}/> Enrollment</button>
                    </div>

                    <div className="btn">
                        <button onClick={() => {navigate("/financialaid")}}><FaRegMoneyBillAlt style={{position: 'relative', top: '2.5px'}}/> Financial Aid</button>
                    </div>

                    <div className="btn">
                        <button onClick={() => {navigate("/personalinfo")}}><FaUser style={{position: 'relative', top: '2.5px'}}/> Personal Info</button>
                    </div>

                    <div className="btn">
                        <button onClick={() => {navigate("/resources")}}><TfiNewWindow style={{position: 'relative', top: '2.5px'}}/> Resources</button>
                    </div>

                    <div className="btn">
                        <button onClick={() => {navigate("/passphrase")}}><FaIdCard style={{position: 'relative', top: '2.5px'}}/> Passphrase</button>
                    </div>

                    <div className="btn">
                        <button onClick={() => {navigate("/studentcenter")}}><FaBuildingColumns style={{position: 'relative', top: '2.5px'}}/> Student Center</button>
                    </div>

                    <div className="btn">
                        <button onClick={() => {navigate("/eforms")}}><BsPencilSquare style={{position: 'relative', top: '2.5px'}}/> eForms</button>
                    </div>

                    <div className="logout-btn">
                        <button onClick={() => {navigate("/login")}}>Log out</button>
                    </div>
                    
                    <div className="vl"></div>
            </div>

           
            <div className="msg-container">

                <main class="table" id="table">
                    <section class="table__header">
                        <h1>My Messages</h1>
                    </section>
                    <section class="table__body">
                        <table>
                            <thead>
                                <tr>
                                    <th> From </th>
                                    <th> Date Sent </th>
                                    <th> Date Read </th>
                                    <th> Expiration Date </th>
                                    <th> Subject </th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td> Student Housing Services</td>
                                    <td> January 21</td>
                                    <td> New Message</td>
                                    <td> 03/04/2024</td>
                                    <td> Housing App. Period Now Open!</td>
                                </tr>
                            </tbody>
                        </table>
                    </section>
                </main>
                
            </div>

            



        </div>
            
    )
}


{/*
<div className="contact">
<div className="msg-card-left">
    <div className="msg-create">
        <h1>Messages</h1>
        <button><HiMiniPencilSquare size={40} style={{position:'relative', top: '2px'}} /></button>
       </div>
    
    <div className="msg"><button><h3>Message 1</h3></button></div>

    <div className="msg"><button><h3>Message 2</h3></button></div>

    <div className="msg"><button><h3>Message 3</h3></button></div>

    <div className="msg"><button><h3>Message 4</h3></button></div>

    <div className="msg"><button><h3>Message 5</h3></button></div>
    

</div>
</div>

<div className="msg-section">
<div className="msg-card-right" style={{background:'white'}}>

</div>

</div>
*/}