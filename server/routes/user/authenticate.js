import db from 'sqlite';
import { Router } from 'express';
import jwt from 'jsonwebtoken';
import jwtSignature from '../../jwt-signature';
import passwordHash from 'bcrypt-password-hash';

const router = Router();

outes.post('/authenticate', async (req, res) => {
  try {
    const { username, password } = req.body;
    const data = await db.get('SELECT password FROM Users WHERE username = ?', username);

    if (!data) {
      throw new Error('username not found');
    }

    const isValid = await passwordHash.compare(password, data.password);
    
    if (isValid) {
      const token = jwt.sign({ username }, jwtSignature, {
        expiresIn: 1800, // expires in 30 minutes
      });

      res.status(200).send({ token, username });
    }

    res.status(200).send({});
  } catch (err) {
    res.status(500).send({ err });
  }
});

export default router;