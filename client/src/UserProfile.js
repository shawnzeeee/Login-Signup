import React from 'react';
import "./App.css";
import { render } from 'react-dom';
import {useState} from 'react';
import Axios from 'axios'
import {BrowserRouter as Router, Switch, Route, useParams} from 'react-router-dom';

function UserProfile(props){
    
    let {userID} = useParams();

    const username = props.username;
    const password = props.password;
    console.log(username);
return(
    <div>
        <h1>{username}</h1>
    </div>
    
);

}

export default UserProfile;