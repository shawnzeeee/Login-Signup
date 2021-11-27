import React from 'react';
//import { render } from 'react-dom';
import "./App.css";
import {useState} from 'react';
//import {Route,Navigate} from "react-router-dom";
import Axios from 'axios'
function CreateAccount(){
    const[username, setUsername] = useState("");
    const[password, setPassword] = useState("");
    const[school, setSchool] = useState("");

    const displayInfo = () => {
        console.log(username + " " + password);
    };


    const newUser = () =>{

        Axios.post('http://localhost:3001/create-account',{
            username: username,
            password: password
        
        }).then((response) => {
            console.log(response);
        });  
    }

return(
    <div>
        <h1>Create Account </h1>
        <label>User Name</label>
        <input type = "text" onChange={(event)=> {setUsername(event.target.value);}}/>
        <label>Password</label>
        <input type = "text" onChange={(event)=> {setPassword(event.target.value);}}/>
        <button onClick = {newUser}>
            Submit
        </button>
    </div>

);

}

export default CreateAccount;