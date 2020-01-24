import dbPromise from '../../db-connection';
import { Router } from 'express';

const router = Router();

router.get('/', async (req, res) => {
  try {
    const db = await dbPromise;
    const data = await db.all('SELECT * FROM Users');
    
    res.status(200).send(data);
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
});
  1
export default router;