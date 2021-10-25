import InvalidArgumentError from '../../shared/domain/error/InvalidArgumentError'
import CouponGenerator from '../domain/CouponGenerator'
import Coupons from '../domain/Coupons'

export default class CouponsGenerator {
    constructor(private generator: CouponGenerator) {}

    async run(amount: number): Promise<Coupons> {
        this.guard(amount)

        return this.generator.generate(amount)
    }

    private guard(amount: number) {
        if (isNaN(amount)) throw new InvalidArgumentError(`The amount must be a number`)
        if (amount < 1 || amount > 999999) throw new InvalidArgumentError(`The amount: <${amount}> is not valid`)
    }
}
