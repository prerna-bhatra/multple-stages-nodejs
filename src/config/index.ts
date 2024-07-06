import dotenv from 'dotenv';
import path from 'path';

const envFile = `.env.${process.env.NODE_ENV || 'development'}`;

console.log({envFile});

dotenv.config({ path: path.resolve(process.cwd(), envFile) });

export const PORT = process.env.PORT || 3000;
export const JWT_SECRET = process.env.JWT_SECRET || 'default_secret';
export const MONGO_URI = process.env.MONGO_URI || 'mongodb://localhost:27017/defaultdatabase';
