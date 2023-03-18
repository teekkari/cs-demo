import mongoose, { Schema } from 'mongoose';

// Set all required to allow mongoose validator to be used when saving document
const positionSchema = new Schema({
    x:              { type: Number, required: true },                   // x position of player from demofile (needs to be translated based on map)
    y:              { type: Number, required: true },                   // y position of player from demofile (-- || --)
    timestamp:      { type: Number, required: true },                   // seconds from round beginning
    mapName:        { type: String, required: true },                   // map name e.g. 'de_mirage'
    player:         { type: Schema.Types.ObjectId, ref: 'Player', required: true },     // reference to player
    match:          { type: Schema.Types.ObjectId, ref: 'Match', required: true },      // reference to match
});

// Associate schema with 'positions' collection
const Position = mongoose.model('Position', positionSchema, 'positions');

export default Position;