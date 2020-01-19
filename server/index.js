import './dotenv';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import express from 'express';

import authenticateUserRoute from './routes/user/authenticate';
import verifyUserRoute from './routes/user/verify';

const baseUrl = '/api/v1';
const PORT = process.env.PORT || 6060;
const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(cookieParser());
app.use(express.static('dist'));

app.use(`${baseUrl}/user`, authenticateUserRoute);
app.use(`${baseUrl}/user`, verifyUserRoute);

// app.get('/clearCookie', (req, res) => {
//   res.clearCookie('token');
//   res.send('foo');
// });

app.listen(PORT, () => {
  console.log('App listening on:', PORT);
});