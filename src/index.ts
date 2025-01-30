import express, { Express, Request, Response } from "express";
import cors from "cors";
import morgan from "morgan";
import basic from "@/routes/basic.routes";

const app: Express = express();

app.use(morgan("dev"));
app.use(cors());
app.use(express.json());

app.use("/api", basic);

app.get("/test", (_req: Request, res: Response) => {
  res.json({ message: "Test successful" });
});

export default app;
