const express = require("express");
const app = express();
const mysql = require("mysql");
const cors = require("cors");
const db = mysql.createConnection({
        user: "root",
        host: "localhost",
        password: "***********",
        database: "studentappsystem"
    }
);

app.use(cors());
app.use(express.json());

app.listen(3001, ()=>{
    console.log("Server runnning on port 3001")
})

db.connect(function(err){
    if(err){
        throw err;
    }else{
        console.log("Connect success");
    }
});

app.post('/create-account', (req,res) => {
    //console.log(req.body.username + " " + req.body.password);
    const username = req.body.username;
    const password = req.body.password;
    var retrieveData = false;
    console.log(username);
    db.query(
        "SELECT username FROM users WHERE username LIKE ? LIMIT 1;",[username],
        (err, result) => {
            if(err){
                console.log(err);
            }else{
                //Checking if a row exists with the given username
                if(result.length == 0){  
                    retrieveData = true;
                    db.query(  
                        "INSERT INTO users(username, password) VALUES(?,?);", [username, password],
                        (err, result) => {
                            if(err){
                                console.log(err);
                            }
                        }
                    );
                    res.send("Account has been created")
                }else{
                    //If row doesn't exists send message
                    res.send("User name already exists")
                }
            }
        });
})

app.post('/sign-in', (req,res) => {
    const username = req.body.username;
    const password = req.body.password;
    db.query(
        "SELECT * FROM users WHERE username LIKE ? LIMIT 1;", [username],
        (err, result)=>{
            if(err){
                console.log(err);
            }else{
                if(result.length == 0){
                    res.send("User name does not exist");
                }else{
                    console.log(result[0].password);
                    if(result[0].password == req.body.password){
                        res.send(result);
                    }else{
                        res.send("Incorrect password")
                    }
                }
            }
        }
    )

});
