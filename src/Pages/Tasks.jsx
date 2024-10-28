import React from "react";
import '../App.css';
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import Box from '@mui/material/Box';
import Backdrop from '@mui/material/Backdrop';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Typography from '@mui/material/Typography';

const tasks_titles = [
    {
        title:'From',
    },
    {
        title:'Date Sent',
    },
    {
        title:'Date Read',
    },
    {
        title:'Expiration Date',
    },
    {
        title:'Subject',
    },
]

//style for modal
const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    width: '60%',
    height: '80%',
    overflow: 'auto',
    transform: 'translate(-46%, -50%)',
    bgcolor: 'background.paper',
    border: '2px solid #000',
    borderRadius: '16px',
    boxShadow: 24,
    p: 4,
};

export default function Tasks() {

    let navigate = useNavigate();
    const [open, setOpen] = useState(null);
    const handleOpen = (id) => setOpen(id);
    const handleClose = () => setOpen(null);

    

    var tasks_data = [
        {
           id: 0, 
           from: 'Financial Services',
           sent: 'April 1',
           read: 'New Message',
           expiration: '05/05/2024',
           subject: 'Tuition Fees'
        },
        {
            id: 1, 
            from: 'Financial Services',
            sent: 'April 1',
            read: 'New Message',
            expiration: '05/05/2024',
            subject: 'Tuition Fees'
         },
         {
            id: 2, 
            from: 'Financial Services',
            sent: 'April 1',
            read: 'New Message',
            expiration: '05/05/2024',
            subject: 'Tuition Fees'
         },
         {
            id: 3, 
            from: 'Financial Services',
            sent: 'April 1',
            read: 'New Message',
            expiration: '05/05/2024',
            subject: 'Tuition Fees'
         },
         {
            id: 4, 
            from: 'Financial Services',
            sent: 'April 1',
            read: 'New Message',
            expiration: '05/05/2024',
            subject: 'Tuition Fees'
         },
    ]

    return (
            <div className="container">

                <main class="table" id="table">
                    <section class="table__header">
                        <h1>Tasks </h1>
                    </section>
                    <section class="table__body">
                        <table>
                            <thead>
                                <tr>
                                    {tasks_titles.map((item) => {
                                            return (
                                                <th> {item.title} </th>
                                            )
                                    })}        
                                </tr>
                            </thead>
                            <tbody>
                                {tasks_data.map((item) => {
                                    return (
                                        <>
                                            <tr onClick={() => handleOpen(item.id)}>
                                                <td> {item.from} </td>
                                                <td> {item.sent} </td>
                                                <td> {item.read} </td>
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