import { NextFunction, Request, Response } from "express"

export default async function errorHandler(
    error,
    req: Request,
    res: Response,
    next: NextFunction
) {
    // Validation Error, in case file is not present
    if (error.type === "validationError") {
        return res.status(422).send(error.message)
    }

    // Database Error, something unexpected went wrong
    if (error.type === "databaseError") {
        return res.status(500).send(error.message)
    }

    console.log(error)
    return res.sendStatus(500)
}
