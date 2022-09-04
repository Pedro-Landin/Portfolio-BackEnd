import { Request, Response } from "express";
import { GetOneUserService } from "../services/GetOneUserService";

export class GetOneUserController {
    async handle(request: Request, response: Response) {
       const { id } = request.params
        const service = new GetOneUserService();

        const categories = await service.execute(id);

        return response.json(categories)
    }
}