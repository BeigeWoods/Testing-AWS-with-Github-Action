import dotenv from "dotenv";
import express from "express";
import mysql from "mysql2";

dotenv.config();
const app = express();

app.listen(process.env.PORT, () => {
  console.log("connect!");
});

// const pool = mysql.createPool({
//   host: process.env.HOST,
//   user: process.env.USERNAME,
//   password: process.env.PASSWORD,
//   database: process.env.DATABASE,
// });

// const db = pool.promise();

// db.getConnection()
//   .then(() => {
//     app.listen(process.env.PORT, () => {
//       console.log("connect!");
//     });
//   })
//   .catch((err: any) => console.error(err));
