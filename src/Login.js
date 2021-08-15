import React from 'react'
import './Login.css'
import {Button} from "@material-ui/core";
import { auth , provider} from "./firebase";
import { useStateValue } from './StateProvider';
import {actionTypes} from "./reducer"
// import LinkedInIcon from '@material-ui/icons/LinkedIn';
// import GitHubIcon from '@material-ui/icons/GitHub';

function Login() {
    const [{} , dispatch] =useStateValue(); 
    const signIn = () => {
        auth.signInWithPopup(provider).then((result) =>  {
            dispatch({
            type: actionTypes.SET_USER,
            user: result.user,
        });
       })
        .catch(error => alert(error.message) )
    };


    return (
        <div className="login"> 
            <div className="login_container">
            <img src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" alt=""/> 
                <div className="login_text">
                    <h1>Sign-In to WhatsApp</h1>
                </div>
                <Button onClick={signIn}>Sign in With Google</Button>
                <div className="bottom">
                <h5>Developed by Aditya Patil</h5>
                <h6>-----------------------------</h6>
                <a href="https://www.linkedin.com/in/adityap817/" target="_blank">
                <img src="https://img.icons8.com/ios-filled/36/000000/linkedin-circled--v4.png"/>          
                </a>
                <a href="https://github.com/adityap817"  target="_blank">
                <img src="https://img.icons8.com/material-sharp/36/000000/github.png"/>
                </a>
                </div>
            </div>
        </div>
    )
}

export default Login
