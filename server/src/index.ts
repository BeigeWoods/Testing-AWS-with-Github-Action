import dotenv from "dotenv";
import express from "express";
import mysql from "mysql2";

dotenv.config();
const app = express();

function required(key: string): string {
  const value = process.env[key];
  if (!value) {
    throw Error(`${key} is undefined!`);
  }
  return value;
}

const config = {
  port: Number(required("PORT")),
  here: required("HERE"),
};

if (config.port > 8000) {
  app.listen(config.port, () => {
    console.log("connect!");
  });
}

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
