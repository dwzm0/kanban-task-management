import  appConfig  from 'config';
import connect from './utils/connect';
import logger from './utils/logger';
import createServer from './utils/server';

const port = appConfig.get<number>("port");


export const app = createServer();

const PORT = process.env.PORT || port

app.listen(PORT, async () => {
  logger.info(`Server running on port ${PORT}`);

  await connect();
 
});



