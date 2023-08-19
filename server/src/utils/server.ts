/* eslint-disable @typescript-eslint/no-unsafe-call */
import express from 'express';
import routes from '../routes';
import cors from 'cors';



const createServer = () => {
    const app = express();

    app.use(cors());
   
    app.use(express.json());
    routes(app);

    return app;
};

export default createServer;