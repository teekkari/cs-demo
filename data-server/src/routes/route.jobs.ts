import { Router } from "express";

import {
    getAllJobs,
    getJob,
    createJob,
    updateJob,
    deleteJob,
} from '../controllers/controller.jobs';

const router = Router();

router.get('/', getAllJobs);
router.get('/:id', getJob);
router.post('/', createJob);
router.put('/:id', updateJob);
router.delete('/:id', deleteJob);


const jobsRouter = router;
export default jobsRouter;