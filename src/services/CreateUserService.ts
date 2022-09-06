//Criação de repositório que é a camada que vai fazer a comunicação com o banco de dados

import { getRepository } from "typeorm";
import { User } from "../entities/User";

type UserRequest = {
    name: string,
    description: string;
    interests: string
}

export class CreateUserService {
    async execute({
        name,
        description,
        interests
    }: UserRequest): Promise<User | Error> {
        const repo = getRepository(User);
        
        // SELECT * FROM CATEGORIES WHERE NAME = "NAME" LIMIT 1
        if(await repo.findOne({name})) {
            return new Error("User already exists");
        }

        const user = repo.create({
            name,
            description,
            interests
        })

        await repo.save(user);

        return user;
    }
}