import { Express, Request, Response, NextFunction } from 'express'
import httpStatus from 'http-status'
import InvalidArgumentError from '../modules/shared/domain/error/InvalidArgumentError'

export const errorHandler = (app: Express) => {
    app.use((err: Error, _req: Request, res: Response, _next: NextFunction) => {
        switch (true) {
            case err.name === InvalidArgumentError.ERROR_NAME:
                res.status(httpStatus.BAD_REQUEST).send(err.message)
                break
            default:
                res.status(httpStatus.INTERNAL_SERVER_ERROR).send()
                break
        }
    })
}
