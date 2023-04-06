import { Request, Response } from 'express';

import parseRequest from '../utils/requestParser';
import handleError from '../utils/errorHandler';

import Jobs from '../models/Jobs';

const getAllJobs = async (req: Request, res: Response) => {
    try {
        const jobs = await Jobs.find({})
        res.json(jobs);
        return;
    } catch (e) { 
        handleError(e);
        res.sendStatus(500);
    }
};

const getJob = async (req: Request, res: Response) => {
    const { id } = req.params;
    try {
        const jobs = await Jobs.find({ _id: id })
        res.json(jobs);
        return;
    } catch (e) { 
        handleError(e);
        res.sendStatus(500);
    }
};

const createJob = async (req: Request, res: Response) => {
    const data = parseRequest(req, Jobs);
    try {
        Jobs.insertMany(data);
        res.json(data);
    } catch (e) {
        handleError(e);
        res.sendStatus(500);
    }
};

const updateJob = async (req: Request, res: Response) => {
    const { id } = req.params;

    try {
        const data = parseRequest(req, Jobs);
        const updatedJob = Jobs.findByIdAndUpdate(id, data, { returnDocument: 'after' });
        res.json(updatedJob);
    } catch (e) {
        handleError(e);
        res.sendStatus(500);
    }
};

const deleteJob = async (req: Request, res: Response) => {
    const { id } = req.params;

    try {
        Jobs.findByIdAndDelete(id);
        res.sendStatus(200);
    } catch (e) {
        handleError(e);
        res.sendStatus(500);
    }
}

export {
    getAllJobs,
    getJob,
    createJob,
    updateJob,
    deleteJob
}