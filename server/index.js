import './dotenv';
import bodyParser from 'body-parser';
import cors from 'cors';
import express from 'express';

const PORT = process.env.PORT || 6060;
const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(express.static('dist'));

app.listen(PORT, () => {
  console.log('App listening on:', PORT);
});