import InvalidArgumentError from '../../shared/domain/error/InvalidArgumentError'
import CouponGenerator from '../domain/CouponGenerator'
import Coupons from '../domain/Coupons'

export default class CouponsGenerator {
    readonly MIN_AMOUNT = 1
    readonly MAX_AMOUNT = 999999

    constructor(private generator: CouponGenerator) {}

    async run(amount: number): Promise<Coupons> {
        this.guard(amount)

        return this.generator.generate(amount)
    }

    private guard(amount: number) {
        if (isNaN(amount)) throw new InvalidArgumentError(`The amount must be a number`)
        if (amount < this.MIN_AMOUNT || amount > this.MAX_AMOUNT)
            throw new InvalidArgumentError(
                `The amount <${amount}> is not valid (must be between ${this.MIN_AMOUNT} and ${this.MAX_AMOUNT})`
            )
    }
}
