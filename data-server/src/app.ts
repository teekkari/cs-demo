import express, { Express, Request, Response } from 'express';
import cors from 'cors';
import mongoose from 'mongoose';

import dotenv from 'dotenv';
dotenv.config();

// Initialize express with CORS and PORT
const app: Express = express();
app.use(cors());
const PORT: Number = 8000;

// Connect MongoDB with default db 'cs-demo'
mongoose.connect(process.env.mongoURI || '', { dbName: 'cs-demo'})
.then(res => console.log(`Connection Succesful ${res}`))
.catch(err => console.log(`Error in DB connection ${err}`));


app.listen(PORT, () => {
    console.log(`Listening on ${PORT}`)
});