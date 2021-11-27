import React from 'react';
import "./App.css";
import UserProfile from './UserProfile';
import { render } from 'react-dom';
import {useState} from 'react';
import Axios from 'axios'
import {BrowserRouter as Router, Switch, Route, Link, useParams, useRouteMatch} from 'react-router-dom';
function SignIn(){

    let {path, url} = useRouteMatch();

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    var login = false;
    const test = () =>{
        console.log("success");
    }

    //salt and hash
    function retrieveUser() {
        Axios.post('http://localhost:3001/sign-in', {
            username: username,
            password: password
        }).then((response)=>{
            console.log(response.data);
            if(response.data == "User name does not exist" || response.data == "Incorrect password"){  //if comparison does not work, try 3 equal operators
                console.log(response.data);
            }else{
                return(
                    <div>
                        <Router>
                        <Switch>
                            <Route path= {`${path}/:userID`} >
                            <test/>
                            <UserProfile  username = {username}/>  
                            </Route>
                        </Switch>
                        </Router>
                    </div>    
                );   
            }
        });
    }
    

        return(
            <div>
                <retrieveUser/>
                <h1> Sign In </h1>
                <label> Username: </label>
                <input type = "text" onChange={(event) => {setUsername(event.target.value);}}/>
                <label> Password: </label>
                <input type = "text" onChange={(event) => {setPassword(event.target.value);}}/>
                <nav>               
                    <button onClick ={retrieveUser}>
                    <Link to={`${url}/${username}`}/>
                        Sign In                   
                    </button>
                    
                </nav>
    
                </div>
         
        );
    

    
    

}
export default SignIn;