import { Router } from "express";

import {
    addMatchInformation,
    addPlayerInformation,
    addPositionInformation,
} from '../controllers/controller.analysis';

/*
    Endpoint for getting data from flask server
    Usage is only adding information
    CRUD operations (will be) defined later in their own routes with authentication for management purposes
*/

const router = Router();
/*
 *  Parameters
        <matchId: String>
        <team_1: ObjectId[]>
        <team_2: ObjectId[]>
        <team_1_won: Boolean>
        <mapName: String>
        startedAt: Date
        duration: Number
        averageElo: Number
        averageLevel: Number
 */
router.post('/addMatchInfo', addMatchInformation);


router.post('/addPlayerInfo', addPlayerInformation);
router.post('/addPositionInfo', addPositionInformation);

const analysisRouter = router;
export default analysisRouter;