import express, { Request, Response, Router, NextFunction } from 'express'
import container from '../config/dependency-injection'
import httpStatus from 'http-status'
import CouponsGenerator from '../modules/coupon/application/CouponsGenerator'

const router: Router = express.Router()

const SERVICE_PATH = '/coupons'

router.get(`${SERVICE_PATH}/generate`, async (req: Request, res: Response, _next: NextFunction) => {
    const couponGenerator: CouponsGenerator = container.get('Coupon.Generator')
    const coupons = await couponGenerator.run(Number(req.query.amount))
    res.status(httpStatus.OK).json(coupons.get().map((coupon) => coupon.toPrimitives()))
})

export { router }
