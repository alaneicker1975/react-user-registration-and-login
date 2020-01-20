import db from 'sqlite';
import { Router } from 'express';
import jwt from 'jsonwebtoken';
import jwtSignature from '../../jwt-signature';
import passwordHash from 'bcrypt-password-hash';

const router = Router();

const invalidAuthError = 'Username or password is invalid';

router.post('/authenticate', async (req, res) => {
  try {
    const { username, password } = req.body;
    const data = await db.get('SELECT password FROM Users WHERE username = ?', username);

    if (!data) {
      throw new Error(invalidAuthError);
    }

    const isValid = await passwordHash.compare(password, data.password);
    
    if (!isValid) {
      throw new Error(invalidAuthError);
    }

    const token = jwt.sign({ username }, jwtSignature, {
      expiresIn: 1800, // expires in 30 minutes
    });

    res
      .cookie('token', token, { httpOnly: true })
      .status(200)
      .send({ isLoggedIn: true });
  } catch (error) {
    res
      .status(500)
      .send({ error: error.message });
  }
});

export default router;