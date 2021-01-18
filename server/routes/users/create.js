import passwordHash from 'bcrypt-node';
import dbPromise from '../../db-connection';
import { Router } from 'express';

const router = Router();

router.put('/create', async (req, res) => {
  try {
    const { username, password } = req.body;

    const db = await dbPromise;

    const {
      lastID,
    } = await db.run(
      'INSERT INTO Users (username, password, isAdmin) VALUES (?,?,0)',
      [username, passwordHash.hashSync(password)],
    );

    res.status(201).send({ lastID });
  } catch (error) {
    res.status(500).send({
      error:
        error.code === 'SQLITE_CONSTRAINT'
          ? 'Username already exists'
          : error.message,
    });
  }
});
1;
export default router;
