import mongoose from 'mongoose';
import appConfig from 'config';
import logger from './logger';

const connect = async () => {
  const dbUri = appConfig.get<string>("dbUri");  

  try {
    await mongoose.connect(dbUri);
    logger.info("You have connected to db");
  } catch (error) {
    logger.error("Could not connect to db");
    process.exit(1);
  }
};

export default connect;