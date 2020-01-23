import './dotenv';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import express from 'express';
import path from 'path';

import authenticateUserRoute from './routes/user/authenticate';
import createUserRoute from './routes/user/create';
import logoutUserRoute from './routes/user/logout';
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
app.use(`${baseUrl}/user`, logoutUserRoute);
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

app.listen(PORT, () => {
  console.log('App listening on:', PORT);
});