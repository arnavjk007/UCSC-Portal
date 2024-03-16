import React from "react";
import '../App.css';
import { useNavigate } from "react-router-dom";

export default function Messages() {

    let navigate = useNavigate();

    return (
        
        <div className="wrapper">
       
            <div className="container">

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
                                <tr onClick={() => navigate('/home')}>
                                    <td> Student Housing Services</td>
                                    <td> January 21</td>
                                    <td> New Message</td>
                                    <td> 03/04/2024</td>
                                    <td> Housing App. Period Now Open!</td>
                                </tr>
                                
                                <tr>
                                    <td> Student Housing Services</td>
                                    <td> January 21</td>
                                    <td> New Message</td>
                                    <td> 03/04/2024</td>
                                    <td> Housing App. Period Now Open!</td>
                                </tr>

                                <tr>
                                    <td> Student Housing Services</td>
                                    <td> January 21</td>
                                    <td> New Message</td>
                                    <td> 03/04/2024</td>
                                    <td> Housing App. Period Now Open!</td>
                                </tr>

                                <tr>
                                    <td> Student Housing Services</td>
                                    <td> January 21</td>
                                    <td> New Message</td>
                                    <td> 03/04/2024</td>
                                    <td> Housing App. Period Now Open!</td>
                                </tr>

                                <tr>
                                    <td> Student Housing Services</td>
                                    <td> January 21</td>
                                    <td> New Message</td>
                                    <td> 03/04/2024</td>
                                    <td> Housing App. Period Now Open!</td>
                                </tr>

                                <tr>
                                    <td> Student Housing Services</td>
                                    <td> January 21</td>
                                    <td> New Message</td>
                                    <td> 03/04/2024</td>
                                    <td> Housing App. Period Now Open!</td>
                                </tr>

                                <tr>
                                    <td> Student Housing Services</td>
                                    <td> January 21</td>
                                    <td> New Message</td>
                                    <td> 03/04/2024</td>
                                    <td> Housing App. Period Now Open!</td>
                                </tr>

                                <tr>
                                    <td> Student Housing Services</td>
                                    <td> January 21</td>
                                    <td> New Message</td>
                                    <td> 03/04/2024</td>
                                    <td> Housing App. Period Now Open!</td>
                                </tr>

                                <tr>
                                    <td> Student Housing Services</td>
                                    <td> January 21</td>
                                    <td> New Message</td>
                                    <td> 03/04/2024</td>
                                    <td> Housing App. Period Now Open!</td>
                                </tr>

                                <tr>
                                    <td> Student Housing Services</td>
                                    <td> January 21</td>
                                    <td> New Message</td>
                                    <td> 03/04/2024</td>
                                    <td> Housing App. Period Now Open!</td>
                                </tr>

                                <tr>
                                    <td> Student Housing Services</td>
                                    <td> January 21</td>
                                    <td> New Message</td>
                                    <td> 03/04/2024</td>
                                    <td> Housing App. Period Now Open!</td>
                                </tr>

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