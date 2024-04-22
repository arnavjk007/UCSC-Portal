import React from "react";
import '../App.css';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Typography from '@mui/material/Typography';
import { useState } from "react";

const holds_titles = [
    {
        title:'From',
    },
    {
        title:'Date Sent',
    },
    {
        title:'Due Date',
    },
    {
        title:'Subject',
    },
]
export default function Holds() {

    const [open, setOpen] = useState(null);
    const handleOpen = (id) => setOpen(id);
    const handleClose = () => setOpen(null);

    //style for modal
    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        width: '60%',
        height: '80%',
        overflow: 'auto',
        transform: 'translate(-50%, -50%)',
        bgcolor: 'background.paper',
        border: '2px solid #000',
        borderRadius: '16px',
        boxShadow: 24,
        p: 4,
    };

    var holds_data = [
        {
           id:0, 
           from: 'Financial Services',
           sent: 'April 1',
           expiration: '05/05/2024',
           subject: 'Tuition Fees'
        },
        {   
            id:1,
            from: 'Financial Services',
            sent: 'April 1',
            expiration: '05/05/2024',
            subject: 'Tuition Fees'
         },
         {
            id:2,
            from: 'Financial Services',
            sent: 'April 1',
            expiration: '05/05/2024',
            subject: 'Tuition Fees'
         },
         {
            id:3,
            from: 'Financial Services',
            sent: 'April 1',
            expiration: '05/05/2024',
            subject: 'Tuition Fees'
         },
         {
            id:4,
            from: 'Financial Services',
            sent: 'April 1',
            expiration: '05/05/2024',
            subject: 'Tuition Fees'
         },
    ]

    return (
            <div className="container">
                <main class="table" id="table">
                    <section class="table__header">
                        <h1>Holds </h1>
                    </section>
                    <section class="table__body">
                        <table>
                            <thead>
                                <tr>
                                    {holds_titles.map((item) => {
                                        return (
                                            <th> {item.title} </th>
                                        )
                                    })}
                                </tr>
                            </thead>
                            <tbody>
                                {holds_data.map((item) => {
                                    return (
                                        <>
                                        <tr onClick={() => handleOpen(item.id)}>
                                            <td> {item.from} </td>
                                            <td> {item.sent} </td>
                                            <td> {item.expiration} </td>
                                            <td> {item.subject} </td>
                                        </tr>
                                        <Modal
                                            open={open === item.id}
                                            onClose={handleClose}
                                            closeAfterTransition
                                            slots={{ backdrop: Backdrop }}
                                            key={item.id}
                                            slotProps={{
                                            backdrop: {
                                                timeout: 500,
                                            },
                                            }}
                                        >
                                            <Fade in={open===item.id}>
                                            <Box sx={style}>
                                                <Typography variant="h6" component="h2">
                                                {item.subject}
                                                <hr></hr>
                                                </Typography>
                                                <Typography sx={{ mt: 2 }}>
                                                <div className="modal">
                                                    <div className="modal-tb">
                                                        <h4>{item.from}</h4>
                                                        <h4>{item.sent}</h4>
                                                    </div>
                                                    <div className="modal-body">
                                                        {item.desc}
                                                    </div>
                                                </div>
                                                </Typography>
                                            </Box>
                                            </Fade>
                                        </Modal>
                                        
                                        </>
                                    )
                                })}
                            </tbody>
                        </table>
                    </section>
                </main>
            </div>
            
    )
}