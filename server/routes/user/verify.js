import { Router } from 'express';
import jwt from 'jsonwebtoken';
import jwtSignature from '../../jwt-signature';

const router = Router();

router.get('/verify', (req, res) => {
  const { cookies: { token } } = req;

  jwt.verify(token, jwtSignature, (err, decoded) => {
    res.send({ isValid: err || decoded === undefined ? false : true });
  });
});
  1
export default router;