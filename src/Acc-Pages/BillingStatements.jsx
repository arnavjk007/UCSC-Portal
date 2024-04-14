import React from "react";

export default function BillingStatements() {

    var statments = [
        {
            statment: 'Your Statement of Account is available for on-line viewing. Subsequent statements will be made available on a monthly basis. If a Statement of Account was not generated for any given month, you will not see a link for that month. On-line billing statements will be deleted within twelve months and cannot be recreated on-line.'
        },
        {
            statement: 'Click a date link below to view the statement for the displayed date. When viewing the statement, use the View Back of Bill Button to view the information that is on the backside of the paper billing statement. Here you will find important billing deadlines, contact information and other instructions.'
        },
        {
            statement: 'The Office of Student Business Services is unable to reproduce previous billing statements. Please keep your statements for your personal records.'
        },
        {
            statement: 'When mailing in payments, please print your statement, detach, and include the upper portion (above the dotted line) of the remittance with your payment. Include your account number on your payment. Do NOT send cash.'
        },
        {
            statement: 'If you need help accessing or understanding your bill please contact Student Business Services at sbs@ucsc.edu.'
        }
    ]

    return (
        <div className="container">
            <div className="info-card" style={{maxWidth:'none', padding:'3%'}}>
                    <h1> Billing Statements </h1>
                    <hr></hr>

                    <div className="info-body">
                        {statments.map((item) => {
                            return (
                                <p style={{margin:'0% 0% 2% 0%'}}> {item.statement} </p>
                            )
                        })}
                    </div>
            </div>
        </div>
    )
}