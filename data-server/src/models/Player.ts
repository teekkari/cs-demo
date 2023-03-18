import mongoose, { Schema } from 'mongoose';

const playerSchema = new Schema({
    name: { type: String, required: true },             // name of the player (can change)
    faceitId: { type: String,  required: true },        // faceit id of the player (does not change, use for grouping)
    created: Date,                                      // when account was created
});

// Associate schema with 'players' collection
const Player = mongoose.model('Player', playerSchema, 'players');

export default Player;