import { Router } from "express";
import { CreateUserController } from "./controllers/CreateUserController";
import { GetAllUsersController } from "./controllers/GetAllUsersController";

const routes = Router();

routes.post("/user", new CreateUserController().handler);
routes.get("/user/all", new GetAllUsersController().handler);

export { routes };
