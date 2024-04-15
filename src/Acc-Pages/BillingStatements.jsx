import React from "react";
import { useState } from "react";
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Typography from '@mui/material/Typography';


export default function BillingStatements() {

    const statements_info = [
        {
            statement: 'Your Statement of Account is available for on-line viewing. Subsequent statements will be made available on a monthly basis. If a Statement of Account was not generated for any given month, you will not see a link for that month. On-line billing statements will be deleted within twelve months and cannot be recreated on-line.'
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

    const billing_statements = [
        {
            statements: [<p>Please make checks payable to:  UC REGENTS</p>, <p>Account Number: </p>, <p>Statement Date: </p>, <p>Late After: </p>, <p>Amount Due: </p>, <p>Amount Enclosed: ________________</p>  ]
        },
        {
            statements: [<p>RETURN TO: </p>, <p>SBS Financial Service Center</p>, <p>UNIVERSITY OF CALIFORNIA</p>, <p>1156 HIGH STREET</p>, <p>SANTA CRUZ, CA 95064-1077</p>]
        },
        {
            statements: [<p>Some or all instruction for all or part of the Academic Year may be delivered remotely.
                Tuition and fees have been set regardless of the method of instruction and will not be
                refunded in the event instruction occurs remotely for any part of the Academic Year.  Figures
                for tuition and fees represent currently approved or proposed amounts and may not be final.
                Actual tuition and fees are subject to change by the University of California as determined to
                be necessary or appropriate.  Final approved tuition and fee levels may differ from the
                amounts presented.</p>,
                <p>As the final approved tuition and fee levels may differ from the amounts shown, your final
                balance due may also differ from the balance due shown here.</p>]
        },
        {
            statements: [<p>For detailed information about UC Santa Cruz Registration Fees go to:
                <a href="http://registrar.ucsc.edu/fees/registration/" target="_blank" rel="noreferrer">http://registrar.ucsc.edu/fees/registration/</a>
                For any other fees, please contact the originating department.</p>]
        }
    ]

    const student_billing_statements = [
        {
            statements: [<p>Detach and return top portion with payment. Keep bottom portion for your records.</p>, <p>Do NOT send cash or correspondence with your payment.</p>]
        },
    ]


    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        width: '80%',
        height: '90%',
        overflow: 'auto',
        transform: 'translate(-50%, -50%)',
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 24,
        p: 4,
    }

    var billing_statments_data = [
        {
            date: '07/27/2023',
            name: 'Arnav Kumar',
            address: 'Somewhere in California',
            accountNumber: '',
            statementDate: '',
            lateAfter: '',
            amountDue: '100',
        }
    ]

    var table_data = [
        {
            date: '02/21/24',
            desc: 'UCSA Systemwide Fee',
            amount: '100'
        }
    ]

    return (
        <div className="container">
            <div className="info-card" style={{maxWidth:'none', padding:'3%'}}>
                    <h1> Billing Statements </h1>
                    <hr></hr>

                    <div className="info-body">
                        {statements_info.map((item) => {
                            return (
                                <p style={{margin:'0% 0% 2% 0%'}}> {item.statement} </p>
                            )
                        })}

                        {billing_statments_data.map((item) => {
                            return (
                                <>
                                    <button className="submit"onClick={handleOpen}> {item.date} </button>
                                    <Modal
                                        aria-labelledby="transition-modal-title"
                                        aria-describedby="transition-modal-description"
                                        open={open}
                                        onClose={handleClose}
                                        closeAfterTransition
                                        slots={{ backdrop: Backdrop }}
                                        className="modal"
                                        slotProps={{
                                        backdrop: {
                                            timeout: 500,
                                        },
                                        }}
                                    >
                                        <Fade in={open}>
                                        <Box sx={style}>
                                            <Typography id="transition-modal-title" variant="h6" component="h2">
                                            Billing Statement for {item.date}
                                            <hr></hr>
                                            </Typography>
                                            <Typography id="transition-modal-description" sx={{ mt: 2 }}>

                                            <p>{item.name}</p>
                                            <p>{item.address}</p>
                                            {billing_statements.map((value) => {
                                                return (
                                                    <div className="bill">                                          
                                                        {value.statements} 
                                                    </div>
                                                )
                                            })}
                                            <hr className="dotted"></hr>
                                            
                        
                                            {student_billing_statements.map((value) => {
                                                return (
                                                    <div className="bill">
                                                        {value.statements}
                                                    </div>
                                                )
                                            })}

                                            <div className="bill">
                                                <p>{item.name}</p>
                                                <p>Account Number: {}</p>
                                                <p>Invoice ID: {}</p>
                                                <p>Statement Date: {}</p>
                                                <p>Late After: {}</p>
                                                <p>Amount Due: {}</p>
                                            </div>

                                            <table>
                                                <thead>
                                                    <th>Charges/Adjustments</th>
                                                    <th>Description</th>
                                                    <th>Amount</th>
                                                </thead>
                                                <tbody className="no-hover">
                                                    {table_data.map((value) => {
                                                        return (
                                                            <tr>
                                                                <td>{value.date}</td>
                                                                <td>{value.desc}</td>
                                                                <td>$ {value.amount}</td>
                                                            </tr>
                                                        )
                                                    })}
                                                    <tr>
                                                        <td>Total Current Charges/Adjustments: </td>
                                                        <td></td>
                                                        <td>$ {item.amountDue}</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Account Balance: </td>
                                                        <td></td>
                                                        <td>$ {item.amountDue}</td>
                                                    </tr>
                                                </tbody>
                                            </table>
  
                                            </Typography>
                                        </Box>
                                        </Fade>
                                    </Modal>
                                </>
                            )
                        })}

                    
                    </div>
            </div>
        </div>
    )
}