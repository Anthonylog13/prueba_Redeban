import express, { Application } from 'express';
import cors from 'cors';
import { config } from './config';
import routes from './routes';
import { errorHandler } from './middlewares/errorHandler';
import { notFoundHandler } from './middlewares/notFound';

const app: Application = express();


app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.use(config.apiPrefix, routes);


app.use(notFoundHandler);
app.use(errorHandler);


const PORT = config.port;
app.listen(PORT, () => {
  console.log(` Servidor ejecutándose en el puerto ${PORT}`);
  console.log(` variable: ${config.nodeEnv}`);
  console.log(` API Base: http://localhost:${PORT}${config.apiPrefix}`);
});

export default app;