import mongoose, { Schema } from 'mongoose';

const matchSchema = new Schema({
    matchId: { type: String, required: true },          // matchId given by faceit
    startedAt: Date,                                    // DateTime of match beginning
    duration: Number,                                   // How long match took in secondss
    team_1: {                                          // List of all players in team 1 and require 5 players in team
        type: [Schema.Types.ObjectId],
        ref: 'Player',
        required: true,
        validate: (v: Object[]) => v.length == 5
    }, 
    team_2: {                                          // List of all players in team 2 and require 5 players in team
        type: [Schema.Types.ObjectId],
        ref: 'Player',
        required: true,
        validate: (v: Object[]) => v.length == 5
    }, 
    team_1_won: { type: Boolean, required: true },      // Store match winner with boolean indicating if team 1 won or lost
    mapName: { type: String, required: true},           // Which map was played e.g. 'de_mirage'
    averageElo: Number,                                 // Average ELO of all players
    averageLevel: Number,                               // Average Faceit level of all players
});

// Associate schema with 'matches' collection
const Match = mongoose.model('Match', matchSchema, 'matches');

export default Match;
