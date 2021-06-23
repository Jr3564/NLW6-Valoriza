import { NextFunction, Request, Response } from "express";

require('reflect-metadata');

require('typeorm').createConnection();

const express = require('express');

require('express-async-errors');

const { router } = require('./routes');

const app = express();

app.use(express.json());
app.use(router);

app.use((err: Error, _req: Request, res: Response, _next: NextFunction) => {
  if (err instanceof Error) {
    return res.status(400).json({ error: err.message })
  }
  return res.status(500).json({
    status: "error",
    message: "Internal Server Error"
  })
})

const PORT = 3000;

app.listen(PORT, () => console.log(`App rodando na porta ${PORT}`));
