import 'reflect-metadata';
import 'express-async-errors';
import router from "./routes";
import { errorHandler } from "./middlewares";

require('typeorm').createConnection();

const express = require('express');

const app = express();

app.use(express.json());
app.use(router);

app.use(errorHandler);

const PORT = 3000;

app.listen(PORT, () => console.log(`App rodando na porta ${PORT}`));
