import { Router } from 'express';
import jwt from 'jsonwebtoken';

const router = Router();

router.get('/verify', (req, res) => {
  const { cookies: { token } } = req;

  jwt.verify(token, process.env.JWT_SIGNATURE, (error, decoded) => {
    res.send({ 
      isValid: error || decoded === undefined ? false : true, 
      user: { username: decoded.username, isAdmin: decoded.isAdmin },
    });
  });
});
  
export default router;
