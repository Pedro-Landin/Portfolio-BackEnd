import { getRepository } from "typeorm";
import { Category } from "../entities/Category";


export class GetOneCategoriesService {
    async execute(id: string) {
        const repo = getRepository(Category);
       
        const category = await repo.findOne(id);
        if(!category) {
            return new Error("Category does not exist!")
        }

        await repo.save(category);

        return category;
    }
}