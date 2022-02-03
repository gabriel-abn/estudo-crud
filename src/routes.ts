import { Router } from "express";
import { CreateUserController } from "./controllers/CreateUserController";

const routes = Router();

routes.post("/user", new CreateUserController().handler);

export { routes };