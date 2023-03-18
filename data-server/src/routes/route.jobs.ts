import { Router } from "express";

import {
    startJob,
    getJobStatus,
    finishJob,
} from '../controllers/controller.jobs';

const router = Router();

router.post('/startJob', startJob);
router.post('/getJobStatus', getJobStatus);
router.post('/finishJob', finishJob);

export default router;