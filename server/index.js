import './dotenv';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import express from 'express';
import path from 'path';

import allUsersRoute from './routes/users/all';
import authenticateUserRoute from './routes/users/authenticate';
import createUserRoute from './routes/users/create';
import logoutUserRoute from './routes/users/logout';
import verifyUserRoute from './routes/users/verify';

const baseUrl = '/api/v1';
const PORT = process.env.PORT || 6060;
const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(cookieParser());
app.use(express.static('dist'));

app.use(`${baseUrl}/users`, allUsersRoute);
app.use(`${baseUrl}/users`, authenticateUserRoute);
app.use(`${baseUrl}/users`, createUserRoute);
app.use(`${baseUrl}/users`, logoutUserRoute);
app.use(`${baseUrl}/users`, verifyUserRoute);

// Catchs all errors thrown and sends them
// as part of the response object
app.use((error, req, res, next) => {
  res.status(500).send({ error: error.message });
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