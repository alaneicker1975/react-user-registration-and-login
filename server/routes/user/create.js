import passwordHash from 'bcrypt-password-hash';
import dbPromise from '../../db-connection';
import { Router } from 'express';

const router = Router();

router.post('/create', async (req, res) => {
  try {
    const { username, password } = req.body;

    const db = await dbPromise;
    const { lastID } = await db.run(
      'INSERT INTO Users (username, password, isAdmin) VALUES (?,?,0)',
      [username, await passwordHash.hash(password, { saltRounds: 14 })]
    );

    res.status(200).send({ lastID });
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
});
  1
export default router;