import sqlite from 'sqlite';

const dbPromise = sqlite.open(`${process.env.BASE_URL}/database.sqlite`);

export default dbPromise