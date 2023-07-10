import mongoose from 'mongoose';

type TInput = {
  DB: string;
};

export default ({DB}: TInput) => {
  
  const connect = () => {
    mongoose
      .connect(
        DB
      )
      .then(() => {
        return console.info(`Successfully connected to ${DB}`);
      })
      .catch(error => {
        console.error('Error connecting to database: ', error);
        return process.exit(1);
      });
  };
  connect();

  mongoose.connection.on('disconnected', connect);
};
