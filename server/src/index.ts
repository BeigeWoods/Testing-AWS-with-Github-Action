import dotenv from "dotenv";
dotenv.config();

const a: string = "Hi";
const b: number = 2023;

function sayHello(A: string, B: number): string {
  return `${A} ${B}! ${process.env.SECRET}`;
}

console.log(sayHello(a, b));
