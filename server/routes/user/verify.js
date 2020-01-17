import { Router } from 'express';
import jwt from 'jsonwebtoken';
import jwtSignature from '../../jwt-signature';

const router = Router();

router.post('/verify', (req, res) => {
  const token = req.body.token;

  if (token) {
    jwt.verify(token, jwtSignature, (err, decoded) => {
      if (!err && decoded !== undefined) {
        return res.send({ isLoggedIn: true, decoded });
      }
    });
  }

  return res.send({ isLoggedIn: false, decoded: null });
});

export default router;