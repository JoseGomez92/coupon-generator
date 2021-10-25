import Coupon from '../domain/Coupon'
import FillerUtil from '../../shared/domain/tools/FillerTool'
import Coupons from '../domain/Coupons'
import CouponCode from '../domain/CouponCode'
import CouponGeneratorHandler from './CouponGeneratorHandler'

export default class SequentialNumericCouponsGenerator implements CouponGeneratorHandler {
    getAlgorithm(): string {
        return 'sequential_numbers'
    }

    async generate(amount: number): Promise<Coupons> {
        const coupons: Array<Coupon> = []
        for (let i = 1; i <= amount; i++) {
            coupons.push(this.generateCoupon(i))
        }

        return new Coupons(coupons)
    }

    private generateCoupon(rawCode: number): Coupon {
        const code = FillerUtil.fillText({
            value: String(rawCode),
            character: '0',
            length: CouponCode.MAX_CHARACTER_LENGTH,
        })

        return Coupon.create({ code })
    }
}
