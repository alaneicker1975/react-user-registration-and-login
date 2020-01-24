import { Router } from 'express';
import jwt from 'jsonwebtoken';
import jwtSignature from '../../jwt-signature';
import passwordHash from 'bcrypt-password-hash';
import dbPromise from '../../db-connection';

const router = Router();

const authenticationError = 'Username or password is invalid';

router.post('/authenticate', async (req, res) => {
  try {
    const { username, password } = req.body;

    const db = await dbPromise;
    const data = await db.get('SELECT password, isAdmin FROM Users WHERE username = ?', username);
    
    if (!data) {
      throw new Error(authenticationError);
    }
    
    const isLoggedIn = await passwordHash.compare(password, data.password);
    const isAdmin = data.isAdmin;

    const token = jwt.sign({ username, isAdmin }, jwtSignature, {
      expiresIn: 1800,
    });

    res
      .cookie('token', token, { httpOnly: true })
      .status(200)
      .send({ isLoggedIn, username, isAdmin });
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
});

export default router;