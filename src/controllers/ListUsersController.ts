import { Request, Response } from "express";
import { ListUsersService } from "../services/ListUsersService";

class ListUsersController {
  async handle(req: Request, res: Response) {
    const listUsersService = new ListUsersService();

    const users = await listUsersService.execute();

    if (users === undefined || users.length == 0) {
      return res.status(204).json(users);
    }

    return res.status(200).json(users);
  }
}

export { ListUsersController };
