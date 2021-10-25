import express, { Request, Response, Router, NextFunction } from 'express'

const router: Router = express.Router()

router.get('/health-check', (req: Request, res: Response, _next: NextFunction) => {
    res.json({ status: 'OK' })
})

export { router }
