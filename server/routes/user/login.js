import db from 'sqlite';
import { Router } from 'express';
import jwt from 'jsonwebtoken';
import jwtSignature from '../../jwt-signature';
import passwordHash from 'bcrypt-password-hash';

const router = Router();

outes.post('/login', async (req, res) => {
  const { username, password } = req.body;
  const data = await db.get('SELECT password FROM Users WHERE username = ?', username);
  
  if (data === undefined) {
    res.status(200).send({ isLoggedIn: false });
  } else {
    const isValid = await passwordHash.compare(password, data.password);
    
    if (isValid) {
      const token = jwt.sign({ username }, jwtSignature, {
        expiresIn: 1800, // expires in 30 minutes
      });

      const now = new Date();
      now.setTime(now.getTime() + 1 * 3600 * 1000);

      return res
        .status(200)
        .send({ isLoggedIn: true, token });
    }

    return res.status(200).send({ isLoggedIn: false });
  }
});

export default router;