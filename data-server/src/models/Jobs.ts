import mongoose, { Schema } from 'mongoose';

const jobSchema = new Schema({
    jobId: { type: String, default: 0 },
    matchCount: { type: Number, required: true },
    playerName: { type: String, required: true },
    matchesProcessed: { type: Number, default: 0 } 
});

// Associate schema with 'players' collection
const Jobs = mongoose.model('Jobs', jobSchema, 'jobs');

export default Jobs;