import { Request, Response } from "express";
import { GetOneCategoriesService } from "../services/GetOneCategoriesService";

export class GetOneCategoriesController {
    async handle(request: Request, response: Response) {
       const { id } = request.params
        const service = new GetOneCategoriesService();

        const categories = await service.execute(id);

        return response.json(categories)
    }
}