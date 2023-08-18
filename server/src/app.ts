import  appConfig  from 'config';
import connect from './utils/connect';
import logger from './utils/logger';
import createServer from './utils/server';

const port = appConfig.get<number>("port");


export const app = createServer();

// eslint-disable-next-line @typescript-eslint/no-misused-promises
app.listen(port, async () => {
  logger.info(`Server running on port ${port}`);

  await connect();
 
});



