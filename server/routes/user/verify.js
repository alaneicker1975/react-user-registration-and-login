import { Router } from 'express';
import jwt from 'jsonwebtoken';
import jwtSignature from '../../jwt-signature';

const router = Router();

router.post('/verify', (req, res) => {
  const token = req.body.token;

  jwt.verify(token, jwtSignature, (err, decoded) => {
    if (err || decoded === undefined) {
      res.send({ isValid: false });
    }

    res.send({ isValid: true });
  });
});

export default router;