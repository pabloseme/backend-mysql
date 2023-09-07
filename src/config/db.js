import mysql from "mysql2";
import dotenv from "dotenv";

dotenv.config();

//const connection = mysql.createConnection(process.env.DATABASE_URL);
const connection = mysql.createConnection({    
    host:process.env.HOST,
    database:process.env.DATABASE,
    user:process.env.USER,
    password:process.env.PASSWORD,
  });

export default connection.promise();
