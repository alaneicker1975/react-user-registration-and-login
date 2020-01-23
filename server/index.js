import './dotenv';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import express from 'express';
import path from 'path';

import authenticateUserRoute from './routes/user/authenticate';
import createUserRoute from './routes/user/create';
import verifyUserRoute from './routes/user/verify';

const baseUrl = '/api/v1';
const PORT = process.env.PORT || 6060;
const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(cookieParser());
app.use(express.static('dist'));

app.use(`${baseUrl}/user`, authenticateUserRoute);
app.use(`${baseUrl}/user`, createUserRoute);
app.use(`${baseUrl}/user`, verifyUserRoute);

// Catchs all errors thrown and sends them
// as part of the response object
app.use((error, req, res, next) => {
  res.status(500).json({ error: error.message });
});

// Allows React routes to render is page is refreshed.
// This will only apply to the paths specified in the route regex.
app.get('/:type(dashboard|login|register)', (req, res) => {
  res.sendFile(path.join(process.cwd(), 'dist/index.html'), (error) => {
    if (error) {
      res.status(500).send(error)
    }
  })
});

// app.get('/set-token', (req, res) => {
//   console.log('token set');
//   res
//     .cookie('token', 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJPbmxpbmUgSldUIEJ1aWxkZXIiLCJpYXQiOjE1NzkyOTI4MTEsImV4cCI6MTYxMDgyODgxMSwiYXVkIjoid3d3LmV4YW1wbGUuY29tIiwic3ViIjoianJvY2tldEBleGFtcGxlLmNvbSIsIkdpdmVuTmFtZSI6IkpvaG5ueSIsIlN1cm5hbWUiOiJSb2NrZXQiLCJFbWFpbCI6Impyb2NrZXRAZXhhbXBsZS5jb20iLCJSb2xlIjpbIk1hbmFnZXIiLCJQcm9qZWN0IEFkbWluaXN0cmF0b3IiXX0.khqDGt2n7FPMmgToEE_aNIZkTvOdn6UeVQnSjaD6waw')
//     .send({ foo: 'bar' });
// });

app.get('/clear-token', (req, res) => {
  res.clearCookie('token');
  res.send({ foo: 'bar' });
});

app.listen(PORT, () => {
  console.log('App listening on:', PORT);
});