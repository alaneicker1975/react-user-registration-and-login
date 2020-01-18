import { Router } from 'express';
import jwt from 'jsonwebtoken';
import jwtSignature from '../../jwt-signature';

const router = Router();

router.post('/verify', (req, res) => {
  const token = req.body.token;

  jwt.verify(token, jwtSignature, (err, decoded) => {
    if (err || decoded === undefined) {
      res.send({ isLoggedIn: false });
    }

    res.send({ isLoggedIn: true });
  });
});

export default router;