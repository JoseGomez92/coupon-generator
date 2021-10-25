import AggregateRoot from '../../shared/domain/AggregateRoot'
import CouponCode from './CouponCode'

export type CouponParams = {
    code: string
}

export default class Coupon extends AggregateRoot {
    readonly code: CouponCode

    private constructor({ code }: CouponParams) {
        super()
        this.code = new CouponCode(code)
    }

    static create({ code }: CouponParams): Coupon {
        return new Coupon({ code })
    }

    toPrimitives() {
        return {
            code: this.code.value,
        }
    }
}
