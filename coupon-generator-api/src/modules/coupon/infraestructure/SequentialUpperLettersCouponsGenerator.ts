import Coupon from '../domain/Coupon'
import FillerUtil from '../../shared/domain/tools/FillerTool'
import CouponsGenerator from '../domain/CouponGenerator'
import CouponCode from '../domain/CouponCode'
import Coupons from '../domain/Coupons'

export default class SequentialUpperLettersCouponsGenerator implements CouponsGenerator {
    private readonly letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'

    getAlgorithm(): string {
        return 'sequential_upper_letters'
    }

    async generate(amount: number): Promise<Coupons> {
        const coupons: Coupon[] = []
        for (let i = 0; i < amount; i++) {
            const rawCouponValue = this.generateCode(i, '')
            coupons.push(this.createCoupon(rawCouponValue))
        }

        return new Coupons(coupons)
    }

    private generateCode(i: number, value: string): string {
        const rawValue = this.letters[i % this.letters.length] + value
        if (i >= this.letters.length) {
            return this.generateCode(Math.floor(i / this.letters.length) - 1, rawValue)
        }

        return rawValue
    }

    private createCoupon(rawCode: string) {
        const code = FillerUtil.fillText({
            value: rawCode,
            character: '-',
            length: CouponCode.MAX_CHARACTER_LENGTH,
            fillingFromLeft: false,
        })

        return Coupon.create({ code })
    }
}
