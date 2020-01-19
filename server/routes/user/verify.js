import { Router } from 'express';
import jwt from 'jsonwebtoken';
import jwtSignature from '../../jwt-signature';

const router = Router();

router.post('/verify', (req, res) => {
  const trustedOrigin = 'http://localhost:1234'; // TODO: Store this value as environment variable
  const { body: { token }, headers: { origin, referer } } = req;
  
  if (origin !== trustedOrigin || !referer.includes(trustedOrigin)) {
    res.send({ isValid: false });
  }
  
  jwt.verify(token, jwtSignature, (err, decoded) => {
    if (err || decoded === undefined) {
      res.send({ isValid: false });
    }

    res.send({ isValid: true });
  });
});

export default router;