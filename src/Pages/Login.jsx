import React from "react";
import '../App.css';
import { useNavigate } from "react-router-dom";

export default function Login() {

    const navigate = useNavigate();
    
    return (

        <div className="login-background">

            <div className="wrapper-login">
                <form onSubmit={() => navigate("/home")}>
                    <img src="https://forestgeo.si.edu/sites/default/files/institutions/logo_-_uc_santa_cruz.png" alt="UCSC"></img>
                    <div className="input-box">
                        <input type="text" placeholder="CruzID" required />
                    </div>

                    <div className="input-box">
                        <input type="text" placeholder="Password" required />
                    </div>

                    <div className="forgot">
                        <a href="#">Forgot Password?</a>
                    </div>
            
                    <button type="submit">Login</button>

                    <hr
                    style={{
                    background: "black",
                    height: "4px",
                    borderRadius: '16px',
                    marginTop: '15px',
                    border: 'none',
                    }}
                    />

                </form>

            <a href="https://canvas.ucsc.edu/"> 
                <button style={{
                    marginTop: '15px',
                    background: 'black',
                    color: 'red',
                }}><img style={{maxWidth:'110px',}}src="https://financesonline.com/uploads/2019/08/canvas-logo1.png" alt="Canvas"></img></button>
            </a>
            

        </div>
    </div>
        
    )
}