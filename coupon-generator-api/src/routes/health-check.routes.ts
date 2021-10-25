import { Request, Response, Router, NextFunction } from 'express'

export const addRoutes = (router: Router) => {
    router.get('/health-check', (req: Request, res: Response, _next: NextFunction) => {
        res.json({ status: 'OK' })
    })
}
