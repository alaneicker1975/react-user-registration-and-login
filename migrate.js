const sqlite = require('sqlite');
const dbPromise = sqlite.open('./server/database.sqlite');

(async () => {
  try {
    const db = await dbPromise;
    db.migrate({ force: 'last' });
    console.log('Migration complete.');
  } catch (err) {
    console.log('Error connection to database', err);
  }
})();