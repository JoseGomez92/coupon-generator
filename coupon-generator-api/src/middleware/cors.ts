import { Express, Request, Response, NextFunction } from 'express'

export const enableCors = (app: Express) => {
    app.use(function (req: Request, res: Response, next: NextFunction) {
        res.setHeader('Access-Control-Allow-Origin', '*')
        res.setHeader('Access-Control-Allow-Headers', '*')
        next()
    })
}