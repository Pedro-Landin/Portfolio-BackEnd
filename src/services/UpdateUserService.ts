import { getRepository } from "typeorm";
import { User } from "../entities/User";

type UserUpdateRequest = {
    id: string,
    name: string,
    description: string;
}

export class UpdateUserService {
    async execute({id, name, description}: UserUpdateRequest) {
        const repo = getRepository(User);

        const user = await repo.findOne(id);
        if(!User) {
            return new Error("Category does not exist!")
        }
   
        user.name = name ? name : user.name;
        user.description = description ? description : user.description;

        await repo.save(user);

        return user;
    }
}