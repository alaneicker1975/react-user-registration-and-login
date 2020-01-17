import { Router } from 'express';
import * as jwt from 'jsonwebtoken';
import jwtSignature from '../../jwt-signature';

const router = Router();

router.post('/validate', (req, res) => {
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