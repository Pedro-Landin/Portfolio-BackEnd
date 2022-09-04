import { Router } from "express";
import cors from "cors"

import { CreateCategoryController } from "./controllers/CreateCategoryController";
import { GetAllCategoriesController } from "./controllers/GetAllCategoriesController";
import { DeleteCategoryController } from "./controllers/DeleteCategoryController";
import { UpdateCategoryController } from "./controllers/UpdateCategoryController";
import { GetOneCategoriesController } from "./controllers/GetOneCategoryController";
import { CreateUserController } from "./controllers/CreateUserController"; 
import { GetOneUserController } from "./controllers/GetOneUserController";
import { GetAllUserController } from "./controllers/GetAllUserController";
import { UpdateUserController } from "./controllers/UpdateUserController";

const routes = Router();
routes.use(cors())

routes.put("/user/:id", new UpdateUserController().handle);
routes.post("/user", new CreateUserController().handle);
routes.get("/user", new GetAllUserController().handle);
routes.get("/user/:id", new GetOneUserController().handle);
routes.post("/categories", new CreateCategoryController().handle);
routes.get("/categories", new GetAllCategoriesController().handle);
routes.get("/categories/:id", new GetOneCategoriesController().handle);
routes.delete("/categories/:id", new DeleteCategoryController().handle);
routes.put("/categories/:id", new UpdateCategoryController().handle);

export { routes };