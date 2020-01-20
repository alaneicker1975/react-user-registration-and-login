import db from 'sqlite';
import { Router } from 'express';
import jwt from 'jsonwebtoken';
import jwtSignature from '../../jwt-signature';
import passwordHash from 'bcrypt-password-hash';

const router = Router();

router.post('/authenticate', async (req, res) => {
  try {
    const { username, password } = req.body;
    const data = await db.get('SELECT password FROM Users WHERE username = ?', username);

    if (!data) {
      throw new Error('Username does not exist');
    }

    const isValid = await passwordHash.compare(password, data.password);
    
    if (!isValid) {
      throw new Error('Username or password is invalid');
    }

    const token = jwt.sign({ username }, jwtSignature, {
      expiresIn: 1800, // expires in 30 minutes
    });

    res
      .cookie('token', token)
      .status(200)
      .send({ isLoggedIn: true });
  } catch (err) {
    res.status(500).send({ err });
  }
});

export default router;