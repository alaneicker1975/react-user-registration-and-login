import { Router } from 'express';

const router = Router();

router.post('/logout', async (req, res) => {
  res.clearCookie('token');
  res.send({ isLoggedOut: true });
});
  1
export default router;