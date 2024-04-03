import React from "react";
import '../App.css';
import { FiExternalLink } from "react-icons/fi";

export default function Forms() {

const form_data = [
    {   
        title: 'Part Time Application',
        info: [<p>• <a href="https://registrar.ucsc.edu/enrollment/part-time-program/" target="_blank" rel="noreferrer"> Undergraduate Part Time Program</a> Regularly matriculated undergraduate students in their final quarter, or those unable to carry a full course load due to employment, family responsibilities, or health, are eligible to apply for a 50% reduction in the  Tuition Fee and, if applicable, a 50% reduction in the Nonresident Supplemental Tuition portions of quarterly fees. Approved program participants are limited to enrolling in no more than 10 credits per quarter. </p>,
                <p>• <a href="https://isss.ucsc.edu/" target="_blank" rel="noreferrer">Reduced Course Load</a> (RCL) Federal immigration regulations require F-1/J-1 students to be enrolled full-time for the duration of their program at UCSC to maintain their visa status. In very specific circumstances, students can be authorized by International Student and Scholar Services (ISSS) to drop below full-time enrollment. Any drop below full-time for a program requires this application. If you are under-enrolled and do not have an approved RCL from ISSS, you cannot maintain F-1/J-1 status, your immigration status will be terminated, and you will be required to depart the U.S. immediately.</p>],
        btn: 'Part Time Application',
        link: ''
    },
    {
        title: 'Petition for Major/Minor',
        info: [<p>• Use this form to add, remove or change majors, minors or concentrations. Before you submit this form, review the <a href="https://advising.ucsc.edu/planning/your-major/declaration/" target="_blank" rel="noreferrer">procedures for declaring your chosen major</a>. Some programs will ask that you attend an orientation or meet with an advisor before or after submitting this petition; make sure to complete the various aspects of the process as outlined in the catalog.</p>],
        btn: 'Major/Minor Petition',
        link: ''
    },
    {
        title: 'Request Legal Name Change',
        info: [<p>• Request an update to your legal name in MyUCSC. Documentation supporting a name change or correction is required.</p>],
        btn: 'Legal Name Change',
        link: ''
    },
    {
        title: 'Request Letter of Reciprocity',
        info: [<p>• A Letter of Reciprocity is an official document that confirms that a student has satisfied all of the UCSC lower-division general education and University requirements. Students who are transferring to another UC campus may request a Letter of Reciprocity from the Office of the Registrar free of charge. Students who have satisfied their general education requirements by IGETC are not eligible for a Letter of Reciprocity. Please do not submit a request if you have General Education courses still in progress.</p>],
        btn: 'Letter of Reciprofity',
        link: ''
    },
    {
        title: 'Request Stop Payment',
        info: [<p>• In the event that a check issued to you or your parent by UCSC was lost or accidentally destroyed, use this form to request that UCSC stop payment on it and have a replacement check issued to you.</p>],
        btn: 'Stop Payment',
        link: ''
    },
    {
        title: 'Request Work-Study or LAEP',
        info: [<p>• Students who have interest in either the Learning-Aligned Employment Program (LAEP) or work-study positions can fill out this form to request access to review positions in Handshake.</p>],
        btn: 'Work-Study or LAEP',
        link: ''
    },
    {
        title: 'Tuition Deferred Payment Plan',
        info: [<p>• Submit an application for the Student Business Services (SBS) Tuition Deferred Payment Plan (TDPP). If eligible, the plan will break your Registration fees (Tuition/Non resident Tuition/Student Services fee and Campus fees) for the quarter into separate installments to be paid throughout the quarter. Review <a href="https://sbs.ucsc.edu/payments_billing/tuition_deferred_payment_plan.html" target="_blank" rel="noreferrer">Tution Deferred Payment</a> plan for details about the plan.</p>],
        btn: 'Tuition Deferred Payment Plan',
        link: ''
    },
    {
        title: 'UCSA Fee Opt In/Out',
        info: [<p>• Undergraduates may use this form to opt out or opt in to the $7 UC Student Association Systemwide fee: $3 fall, $2 winter, and $2 spring quarters. Form must be submitted prior to the third week in the quarter (Add/Drop/Swap deadline in the <a href="https://my.ucsc.edu/psp/csprd/EMPLOYEE/SA/c/SCR_SR_MENU.SCX_ACAD_CALENDAR.GBL" target="_blank" rel="noreferrer">Academic and Administrative Calendar</a>). Opting out or in after the Add/Drop/Swap deadline will apply to the next quarter. Refunds for the current quarter are handled through the <a href="https://ucsa.org/ucsa-fee/" target="_blank" rel="noreferrer">UCSC</a>.</p>],
        btn: 'UCSA Fee Opt In/Out',
        link: ''
    },
    {
        title: 'VA Intake',
        info: [<p>• The VA Intake form must be filled out once per academic career by students who plan to use veteran education benefits while pursuing their undergraduate or graduate degree.</p>],
        btn: 'VA Intake',
        link:''
    },
    ]

    return (
        <div className="container">
            <div className="info-card" style={{maxWidth:'none'}}>
                <h1> Undergraduate eForms </h1>
                <hr></hr>

                <div className="info-body">
                    <p>
                        Select an eForm to start from scratch, 
                        Update an eForm to continue an eForm you started and saved, 
                        or View an eForm to view any forms you started or completed. 
                        Note that not all eForms will allow you to save your work to 
                        continue at a later time.
                    </p>

                    <hr></hr>
                    
                    {form_data.map((item) => {
                        return (
                            <div className="form">
                                <h2> {item.title} </h2>
                                {item.info}   
                                <button className="form-btn" onClick={item.link}> <div className="btn-text">{item.btn} ‎ ‎ <FiExternalLink size={20} /></div> </button>
                            </div>
                        )
                    })} 
                </div>
            </div>
        </div>
    )
}