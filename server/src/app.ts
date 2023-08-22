import  appConfig  from 'config';
import connect from './utils/connect';
import logger from './utils/logger';
import createServer from './utils/server';

const port = appConfig.get<number>("port");
process.env["NODE_CONFIG_DIR"] = __dirname + "../config/";

console.log(process.env["NODE_CONFIG_DIR"])

export const app = createServer();

const PORT = process.env.PORT || port

app.listen(PORT, async () => {
  logger.info(`Server running on port ${PORT}`);

  await connect();
 
});



