import { Request, Response } from "express";
import { GetAllUserService } from "../services/GetAllUserService";

export class GetAllUserController {
    async handle(request: Request, response: Response) {
        const service = new GetAllUserService();

        const user = await service.execute();

        return response.json(user)
    }
}
