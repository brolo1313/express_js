import express from "express";

const userRouter = express.Router();

userRouter.use((req, res, next) => {
    console.log('Обработчик юзерс');
    next();
})

userRouter.post("/login", (req, res) => {
  res.send("login page");
});

userRouter.post("/register", (req, res) => {
  res.send("register");
});

export { userRouter };
