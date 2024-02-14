import express from "express";

import db from "./config/db.js";
import indexRouter from "./routes/index.route.js";
import cors from "cors";

//const cors=require('cors');


const app = express();

// middleware
app.use(express.json());


app.use(cors({
  origin :["http://127.0.0.1:5173"],
  methods:["GET","POST"]
}));

app.set("port", process.env.PORT || 3000);


// routes
//app.use("/", (req, res)=>{
//      res.send("404 - not found");
//    }
//);
app.use("/", indexRouter);
//app.use("*", (req, res) => {
//  res.send("404 - not found");
//});

// start server
app.listen(app.get("port"), () => {
  console.log("Server is running on port", app.get("port"));
});

// connect to database
db.connect()
  .then(() => {
    console.log("Connected to database");
})
.catch((err) => {
    console.log("Error: ", err);
  });
