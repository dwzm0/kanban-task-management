import express, { Request, Response, Application } from 'express';
import bodyParser from 'body-parser';
import connect from './connect';
import 'dotenv/config';
const app: Application = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (_req: Request, res: Response) =>
  res.send('hi there')
);

const PORT = process.env.PORT;
const DB = `mongodb+srv://dwzm00:${process.env.PASSWORD}@cluster0.ii6blwz.mongodb.net/Dashboard?retryWrites=true&w=majority`;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

connect({DB});

