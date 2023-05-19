import { Router } from "express";
import adminController from "../controllers/admin.js";

const adminRoute = Router();

adminRoute.get("/users", adminController.getAllUsers);
adminRoute.get("/users/get/:id", adminController.getUserById);
adminRoute.put("/users/update/:id", adminController.updateUser);
adminRoute.delete("/users/delete/:id", adminController.deleteUser);

export default adminRoute;
