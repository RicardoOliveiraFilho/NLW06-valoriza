import 'reflect-metadata';
import express from 'express';
import cors from 'cors';
import 'express-async-errors';
import swaggerUi from 'swagger-ui-express';

import { router } from './routes';
import { handleErrors } from './middlewares/handleErrors';

import swaggerDocs from './swagger.json';

import './database';

const app = express();

app.use(cors());

app.use(express.json());

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));

app.use(router);

app.use(handleErrors);

app.listen(3000, () => console.log('Server is running...'));
