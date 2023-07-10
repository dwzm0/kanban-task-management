import express, { Application } from 'express';
import  appConfig  from 'config';
import connect from './utils/connect';
import logger from './utils/logger';
/* import bodyParser from 'body-parser'; */

const port = appConfig.get<number>("port");

const app: Application = express();

/* app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true })); */




// eslint-disable-next-line @typescript-eslint/no-misused-promises
app.listen(port, async () => {
  logger.info(`Server running on port ${port}`);

  await connect();
});



