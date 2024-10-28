import React from "react";
import '../App.css';
import { useNavigate } from "react-router-dom";
import { GrUserManager } from "react-icons/gr";
import { MdHealthAndSafety } from "react-icons/md";
import { LiaChalkboardTeacherSolid } from "react-icons/lia";
import { IoIosNavigate } from "react-icons/io";


const login_titles = [
    {
        title: 'CruzID Manager',
        icon: <GrUserManager size={125}/>,
        path: '',
        link: 'https://cruzid.ucsc.edu/idmuser_login'
    },
    {
        title: "Health e-Messanger",
        icon:  <MdHealthAndSafety size={125}/>,
        path: '',
        link: 'https://login.ucsc.edu/idp/profile/SAML2/Redirect/SSO?execution=e2s1'
    },
    {
        title: "LSS Tutor Hub",
        icon: <LiaChalkboardTeacherSolid size={125}/>,
        path: '',
        link: 'https://traccloud.go-redrock.com/ucsc/trac/entryinc.php?tbl=main&form=dashboard&recNum=1&recNums=~qd&shoutbox=WW91IGhhdmUgYmVlbiBsb2dnZWQgYmFjayBpbg&_ttoken=eyJ0cmFjZSI6ImE0YWVhMGFmYmNjODQ1Mzk4NDhiYTEzOTlhYTE4OGIwLTc3YjI1ZWUyNjBiNTRmYjUtMCIsImJhZ2dhZ2UiOiJzZW50cnktdHJhY2VfaWQ9YTRhZWEwYWZiY2M4NDUzOTg0OGJhMTM5OWFhMTg4YjAsc2VudHJ5LXNhbXBsZV9yYXRlPTAuMDA3NSxzZW50cnktdHJhbnNhY3Rpb249QWpheC1zc29fdmFsaWRhdGUsc2VudHJ5LXB1YmxpY19rZXk9YTM1YzM3ZmNlMjA2NDFlYmE1NDhhYmY0ZmNlZGMwY2Usc2VudHJ5LXJlbGVhc2U9djEuMy4xMGctNjU3NjE0NyxzZW50cnktZW52aXJvbm1lbnQ9cHJvZHVjdGlvbixzZW50cnktc2FtcGxlZD1mYWxzZSJ9'
    },
    {
        title: "Navigate360",
        icon: <IoIosNavigate size={125}/>,
        path: '',
        link: 'https://ucsc.navigate.eab.com/app/#/authentication/remote/'
    },
    {
        title: "Slug Success",
        icon: <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d8/SDS_UCSantaCruz_RedwoodSlug_WhiteGround.png/1200px-SDS_UCSantaCruz_RedwoodSlug_WhiteGround.png" alt="Slug Success" style={{maxWidth:'60%'}}/>,
        path: '',
        link: 'https://login.ucsc.edu/idp/profile/SAML2/Redirect/SSO?execution=e3s1'
    },
    
];

function openLink(link) {
    if (link === '') {
        return 
    }
    return window.open(link);
}



export default function LoginS() {
    
    let navigate = useNavigate();

    

    return (
        <div className="container">
                <div className="cards">
                    <div className="grid">
                    {login_titles.map((item) => {
                    return (
                        <div className="card" onClick={() => {navigate(item.path); openLink(item.link)}}>
                            <h1 style={{fontSize:'30px'}}>{item.title}</h1>
                            {item.icon}
                        </div>
                    )
                })}
                    </div>
                </div>  
            </div>   
    )
}