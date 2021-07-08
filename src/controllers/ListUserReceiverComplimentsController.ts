import { Request, Response } from "express";
import { ListUserReceiverComplimentsService } from "../services/ListUserReceiverComplimentsService";

class ListUserReceiverComplimentsController {
  async handle(req: Request, res: Response) {
    const { user_id } = req;

    const listUserReceiverComplimentsService = new ListUserReceiverComplimentsService();

    const compliments = await listUserReceiverComplimentsService.execute(user_id);

    if (compliments === undefined || compliments.length == 0) {
      return res.status(204).json(compliments);
    }

    return res.status(200).json(compliments);
  }
}

export { ListUserReceiverComplimentsController };
