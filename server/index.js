import './dotenv';
import bodyParser from 'body-parser';
import cors from 'cors';
import express from 'express';

import loginRoute from './routes/user/login';
import validateRoute from './routes/user/validate';

const baseUrl = '/api/v1';
const PORT = process.env.PORT || 6060;
const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(express.static('dist'));

app.use(`${baseUrl}/user`, loginRoute);
app.use(`${baseUrl}/user`, validateRoute);

app.listen(PORT, () => {
  console.log('App listening on:', PORT);
});