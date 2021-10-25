import Coupon from './Coupon'

export default class Coupons {
    constructor(private coupons: Array<Coupon>) {}

    get() {
        return this.coupons
    }
}
