import { Request, Response } from "express";
import { ListUserSenderComplimentsService } from "../services/ListUserSenderComplimentsService";

class ListUserSenderComplimentsController {
  async handle(req: Request, res: Response) {
    const { user_id } = req;

    const listUserSenderComplimentsService = new ListUserSenderComplimentsService();

    const compliments = await listUserSenderComplimentsService.execute(user_id);

    if (compliments === undefined || compliments.length == 0) {
      return res.status(204).json(compliments);
    }

    return res.status(200).json(compliments);
  }
}

export { ListUserSenderComplimentsController };
