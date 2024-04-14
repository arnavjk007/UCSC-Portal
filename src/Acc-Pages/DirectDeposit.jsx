import React from "react";

export default function DirectDeposit() {

    return (
        <div className="container">
            <div className="info-card" style={{maxWidth:'none', padding:'3%'}}>
                <h1> Direct Deposit </h1>
                <hr></hr>

                <div className="info-body">
                    <p>Routing Number: </p>
                    <p>Account Number: </p>
                    <p>Account Type: </p>
                    <hr></hr>

                    <p>	To Create/Update your EFT (Electronic Funds Transfer) authorization:</p>
                    <p>• Enter your bank routing number</p>
                    <p>• Enter your account number (Credit Union users: do not use the 'member' number here)</p>
                    <p>• Select the account type: checking or savings (checking recommended)</p>
                    <p>• Click the authorization box to certify your information</p>
                    <p>• Click Save at the bottom of the screen</p>

                    <p>
                        Your account number/routing number can be found on your check in the example below. 
                        Do NOT use a deposit slip for this information. Please contact your bank/financial 
                        institution in order to obtain this information if you do not have it. 
                        Most online banking sites/apps will provide you with these details.
                    </p>
                    
                    <div className="image-box">
                        <img src="https://www.tax.state.oh.us/email/IFileHelp/images/check_440x202.jpg" alt="check"></img>
                    </div>
                    

                    <h3>Routing Number: <input className="bar"type="text" placeholder="Enter Routing Number" style={{width:'300px'}}></input></h3>
                    <h3>Account Number: <input className="bar"type="text" placeholder="Enter Account Number" style={{width:'300px'}}></input></h3>
                    <h3>Account Type: 
                        <select className="dropdown">
                            <option value="Checkings"> Checkings </option>
                            <option value="Savings"> Savings </option>
                        </select> 
                    </h3>
                    <p><input type="checkbox" style={{margin:'0% 2% 0% 2%'}}></input>
                        I understand and agree to the following:
                        I certify that it is my name at the top of this page 
                        and that I wish to set my bank information to the values entered above this statement.

                        I certify that the refund will be made to a domestic financial 
                        institution, and will not be part of a back to back transaction to a 
                        foreign institution. For more information regarding refund transactions 
                        with foreign financial institutions click <a href="https://sbs.ucsc.edu/refunds_new.html#OFAC" target="_blank" rel="noreferrer">here</a>.

                        I understand that I must inform Student Business Services if I withdraw 
                        from the University. If I receive money that I am not entitled to, I understand 
                        that I am responsible for repayment.
                    </p>

                    <h3>
                        I understand that this is a very important financial document and affects my current 
                        and future refunds from UCSC. This authorization will remain in effect until canceled, 
                        or changed by me. A new authorization must be completed if I change accounts, close my 
                        account, or change banks. Failure to do so will cause a delay in receiving my refunds.
                        I understand that this EFT authorization is only for refunds from my MyUCSC account.
                    </h3>

                    <p>I hereby authorize:</p>
                    <p>1. The University of California, Santa Cruz to deposit my refund via electronic transfer of funds, and to initiate, if necessary, debit entries and adjustments for any credit entries in error.</p>
                    <p>2. My financial institution to credit my refund to my account.</p>

                    <hr></hr>

                    <p> To cancel your EFT authorization, click the checkbox to the left of the statement below. Then click the Save button.</p>

                    <p><input type="checkbox" style={{margin:'0% 2% 0% 2%'}}></input>
                        I certify that it is my name at the top of this page and that I wish to cancel my EFT authorization and remove myself from direct deposit.
                    </p>

                    <hr></hr>

                    <h3>WARNING: To prevent unauthorized access or loss of your banking information on this page, be sure to click the "save" button and logout of the UCSC Student Portal when you are done.</h3>

                    <button className="submit"> Save </button>
                </div>
            </div>
        </div>
    )
}