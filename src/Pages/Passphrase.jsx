import React from "react";
import '../App.css';

export default function Passphrase() {

    return (
        
        <div className="wrapper">

            <div className="container">

                    <div className="info-card-container">
                        <div className="info-card">
                            <h1>Passphrase</h1>
                            <hr></hr>
                            
                            <div className="info-body">
                                <div className="info-block">
                                    <p>	If you need to contact the university either in person or over the phone, 
                                        we will ask you to verify your identity by either showing your photo ID or by stating your established security passphrase. 
                                        Your passphrase can be up to 50 alphabetic characters (numbers, symbols and special characters are not accepted) and should 
                                        be easy to remember but difficult to guess. To foster a safe and welcoming environment, please do not use lewd, intimidating, 
                                        abusive or threatening language. If you do, UCSC staff have the right to refuse service and refer you to the Office of Student Conduct.
                                        The security passphrase is intended to protect your privacy, so do not use your CruzID Blue or Gold password and do not share your passphrase with anyone. 
                                        Only share your passphrase verbally when asked to do so by UC Santa Cruz staff or faculty, and do not include it in emails, chats or other written communication.</p>
                                </div>

                                <div className="hstack">
                                    <input className="bar"type="text" placeholder="Enter Passphrase" style={{width:'83%'}}></input>
                                    <button className="submit"> Save </button>
                                </div>
                            </div>
                        </div>

                    </div>
            </div>


        </div>
            
    )
}