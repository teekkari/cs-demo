import { Request } from 'express';
import mongoose, { InferSchemaType, Schema } from 'mongoose';

// tell TS that Model in parseRequest has schema.paths property
// schema.paths is used for parsing request body
interface HasSchema {
    schema: Schema
}

// Parse values from request.body based on given model
const parseRequest = <Model extends HasSchema>(req: Request, model: Model) => {

    // Grab model properties from schema.paths
    const fields = Object.keys(model.schema.paths);

    // Convert body to array, if not already
    const bodyArray = [req.body].flat();

    // filter each entry of body params
    bodyArray.map((body) => {
        // Filter request body against fields
        const filteredEntries = Object.entries(body)
        .filter(([key, value]) => fields.includes(key) );

        // Construct object again
        const filteredBody = Object.fromEntries(filteredEntries);

        return filteredBody;
    })

    return bodyArray;
};


export default parseRequest;