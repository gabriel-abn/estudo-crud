import { Request, Response } from "express";
import CreateUserService from "../services/CreateUserService";

export class CreateUserController {
    async handler(request: Request, response: Response) {
        const { nome, email } = request.body;

        const service = new CreateUserService();

        const result = await service.exec({ nome, email });

        return response.json(result);
    }
}
