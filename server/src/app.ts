import  appConfig  from 'config';
import connect from './utils/connect';
import logger from './utils/logger';
import createServer from './utils/server';

const port = appConfig.get<number>("port");

console.log('NODE_ENV: ' + appConfig.util.getEnv('NODE_ENV'));
console.log('NODE_CONFIG_DIR: ' + appConfig.util.getEnv('NODE_CONFIG_DIR'));

export const app = createServer();

const PORT = process.env.PORT || port

app.listen(PORT, async () => {
  logger.info(`Server running on port ${PORT}`);

  await connect();
 
});



