import express, { Request, Response } from "express";
import FooCepAPI from "./models/FooCepAPI";
import CepService from "./services/CepService";

const app = express();
app.use(express.json());

const cepAPI = new FooCepAPI();
const cepService = new CepService(cepAPI);

app.get("/search/address", async (req: Request, res: Response) => {
  const { cep, number } = req.body;
  const result = await cepService.addressByCep(cep, number)
  res.status(200).json({ message: result });
});

export default app;
