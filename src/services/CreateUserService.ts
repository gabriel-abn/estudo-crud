import { getRepository } from "typeorm";
import User from "../entities/User";

type CreateUserReq = {
    nome: string;
    email: string;
};

export default class CreateUserService {
    async exec({ nome, email }: CreateUserReq): Promise<User> {
        const rep = getRepository(User);

        const user = rep.create({
            nome,
            email,
        });

        await rep.save(user);

        return user;
    }
}
