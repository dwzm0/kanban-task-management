import express from 'express';
import  appConfig  from 'config';
import connect from './utils/connect';
import logger from './utils/logger';
import routes from './routes';


const port = appConfig.get<number>("port");
const app = express();

app.use(express.json());


// eslint-disable-next-line @typescript-eslint/no-misused-promises
app.listen(port, async () => {
  logger.info(`Server running on port ${port}`);

  await connect();
 
  routes(app);
});



