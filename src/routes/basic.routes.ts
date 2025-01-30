import { Router, Request, Response } from "express";

const router: Router = Router();

router.get("/", (_req: Request, res: Response) => {
  const response = {
    email: "pchidireeze@gmail.com",
    current_datetime: new Date().toISOString(),
    github_url: "https://github.com/princeeze/basic-api",
  };
  res.status(200).json(response);
});

export default router;
