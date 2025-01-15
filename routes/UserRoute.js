import express from "express";
import { createUser, deleteUser, fetchUser, updateUser } from "../controllers/UserController.js";

const userRouter=express.Router();

userRouter.get('/users',fetchUser);
userRouter.post('/create',createUser);
userRouter.put('/update/:id',updateUser);
userRouter.delete('/delete/:id',deleteUser);

export default userRouter;