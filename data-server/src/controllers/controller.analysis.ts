import { Request, Response } from 'express';

import parseRequest from '../utils/requestParser'

import Match from '../models/Match';
import Player from '../models/Player';
import Position from '../models/Position';

const addMatchInformation = async (req: Request, res: Response) => {
    const data = parseRequest(req, Match);

    try {
        Match.insertMany(data);
        res.status(200).send(data);
    } catch (error) {
        res.status(500).send(error);
    }

};

const addPlayerInformation = async (req: Request, res: Response) => {
    const data = parseRequest(req, Player);

    try {
        Player.insertMany(data);
        res.status(200).send(data);
    } catch (error) {
        res.status(500).send(error);
    }
};

const addPositionInformation = async (req: Request, res: Response) => {
    const data = parseRequest(req, Position);

    try {
        Position.insertMany(data);
        res.status(200).send(data);
    } catch (error) {
        res.status(500).send(error);
    }
};

export {
    addMatchInformation,
    addPlayerInformation,
    addPositionInformation,
};