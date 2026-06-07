const express = require("express");
const cors = require("cors");

const app = express();

const db = require("./db");

app.use(cors());
app.use(express.json());

app.get("/projectsData",(req,res)=>{

    db.query(
        "SELECT * FROM portfolio_projects",
        (err,result)=>{
            if(err) throw err;
            res.json(result);
        }
    );

});

app.post("/feedback",(req,res)=>{

    const {name,email,message}=req.body;

    db.query(
        "INSERT INTO portfolio_feedback(name,email,message) VALUES(?,?,?)",
        [name,email,message],
        (err,result)=>{
            if(err) throw err;
            res.send("Feedback Saved");
        }
    );

});

app.listen(5000,()=>{
    console.log("Application Running");
});
