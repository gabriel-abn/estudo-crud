import { getRepository } from "typeorm";
import User from "../entities/User";

export class GetAllUsersService {
    async exec() {
        const rep = getRepository(User);
        const users = await rep.find();

        return users;
    }
}
