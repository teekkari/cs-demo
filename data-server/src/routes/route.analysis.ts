import { Router } from "express";

import {
    addMatchInformation,
    addPlayerInformation,
    addPositionInformation,
} from '../controllers/controller.analysis';

const router = Router();
/*
 *  Parameters
        <matchId: String>
        <team_1: String[]>
        <team_2: String[]>
        <team_1_won: Boolean>
        <mapName: String>
        startedAt: Date
        duration: Number
        averageElo: Number
        averageLevel: Number
 *  
 */
router.post('/addMatchInfo', addMatchInformation);
router.post('/addPlayerInfo', addPlayerInformation);
router.post('/addPositionInfo', addPositionInformation);

export default router;