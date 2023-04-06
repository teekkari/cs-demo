import express, { Express, Request, Response } from 'express';
import cors from 'cors';
import mongoose from 'mongoose';

import dotenv from 'dotenv';
dotenv.config();

import analysisRouter from './routes/route.analysis';
import jobsRouter from './routes/route.jobs';

// Initialize express with CORS and PORT
const app: Express = express();

app.use(cors());
app.use(express.json())
app.use('/analysis', analysisRouter);
app.use('/jobs', jobsRouter);

// Connect MongoDB with default db 'cs-demo'
mongoose.connect(process.env.mongoURI || '', { dbName: 'cs-demo'})
.then(res => console.log(`Connection Succesful ${res}`))
.catch(err => console.log(`Error in DB connection ${err}`));


const PORT: Number = 8000;
app.listen(PORT, () => {
    console.log(`Listening on ${PORT}`)
});