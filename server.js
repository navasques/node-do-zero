import express from 'express';
import routes from './routes.js';
import { DatabasePostgres } from './database-postgres.js';

const app = express();
const port =  process.env.PORT;

app.use('/routes', routes);

const database = new DatabasePostgres()

app.listen({
    host: '0.0.0.0',
    port: port ?? 3333
})