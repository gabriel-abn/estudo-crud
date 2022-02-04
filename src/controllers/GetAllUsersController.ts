import { Request, Response } from "express";
import { GetAllUsersService } from "../services/GetAllUsersService";

export class GetAllUsersController {
    async handler(request: Request, response: Response) {
        const serv = new GetAllUsersService();
        const result = await serv.exec();

        return response.json(result);
    }
}
