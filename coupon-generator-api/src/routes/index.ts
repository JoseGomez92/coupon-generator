import { Router } from 'express'
import { router as healthRoutes } from './health-check.routes'
import { router as couponRoutes } from './coupon.routes'

const router: Router = Router()

export const chargeRoutes = (app: any) => {
    router.use(healthRoutes)
    router.use(couponRoutes)

    app.use(router)
}
