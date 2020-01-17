import './dotenv';
import bodyParser from 'body-parser';
import cors from 'cors';
import express from 'express';

import userLoginRoute from './routes/user/login';
import userVerifyRoute from './routes/user/validate';

const baseUrl = '/api/v1';
const PORT = process.env.PORT || 6060;
const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(express.static('dist'));

app.use(`${baseUrl}/user`, userLoginRoute);
app.use(`${baseUrl}/user`, userVerifyRoute);

app.listen(PORT, () => {
  console.log('App listening on:', PORT);
});