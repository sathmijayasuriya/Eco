import { Router } from "express";
import userController from "../controllers/user.js";

const userRoute = Router();

userRoute.get("/api/user/get/:id", userController.getOneUser);
userRoute.get("/api/user/getAll", userController.getUsers);
userRoute.post("/api/user/register", userController.createUser);
//admin/user login  
userRoute.post("/api/user/login", userController.login);
userRoute.put("/api/user/update/:id", userController.updateUser);
userRoute.delete("/api/user/delete/:id", userController.deleteUser);

export default userRoute;

