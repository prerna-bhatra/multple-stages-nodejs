import express from 'express';
import mongoose from 'mongoose';
// import authRoutes from './routes/authRoutes';
import { MONGO_URI, PORT } from './config';

const app = express();

app.use(express.json());

// app.use('/api/auth', authRoutes);

mongoose.connect(MONGO_URI,{})
    .then(() => {
        app.listen(PORT, () => {
            console.log(`Server running on port ${PORT}`);
        });
    })
    .catch(err => {
        console.error('Database connection error:', err);
    });
