import express from "express";
import { userRouter } from "./users/users.js";

const host = "127.0.0.1";
const port = 8000;
const app = express();

app.use((req, res, next) => {
    console.log('Время' , Date.now() );
    next();
})

app.get("/hello", (req, res) => {
    throw new Error('Error')
});

app.use('/users', userRouter)

app.listen(port, () => {
  console.log(`Сервер запущен на ${host} : ${port} `);
});
