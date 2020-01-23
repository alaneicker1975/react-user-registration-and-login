import { Router } from 'express';
import jwt from 'jsonwebtoken';
import jwtSignature from '../../jwt-signature';

const router = Router();

router.get('/verify', (req, res) => {
  const { cookies: { token } } = req;

  jwt.verify(token, jwtSignature, (error, decoded) => {
    res.send({ isValid: error || decoded === undefined ? false : true, username: decoded.username });
  });
});
  1
export default router;