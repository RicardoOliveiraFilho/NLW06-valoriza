import { Request, Response } from "express";
import { ListTagsService } from "../services/ListTagsService";

class ListTagsController {
  async handle(req: Request, res: Response) {
    const listTagsService = new ListTagsService();
    
    const tags = await listTagsService.execute();

    if (tags === undefined || tags.length == 0) {
      return res.status(204).json(tags);
    }

    return res.status(200).json(tags);
  }
}

export { ListTagsController };
