import { Router } from 'express'
import { addRoutes as healthRoutes } from './health-check.routes'
import { addRoutes as couponRoutes } from './coupon.routes'

export const chargeRoutes = (app: any) => {
    const router: Router = Router()

    healthRoutes(router)
    couponRoutes(router)

    app.use(router)
}
