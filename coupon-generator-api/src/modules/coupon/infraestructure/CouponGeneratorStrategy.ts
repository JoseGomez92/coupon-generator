import GeneratorNotFoundError from '../../shared/domain/error/GeneratorNotFoundError'
import Config from '../../shared/infraestructure/Config'
import CouponsGenerator from '../domain/CouponGenerator'
import Coupons from '../domain/Coupons'
import CouponGeneratorHandler from './CouponGeneratorHandler'

export default class CouponGeneratorStrategy implements CouponsGenerator {
    constructor(private generators: Array<CouponGeneratorHandler>, private config: Config) {}

    generate(amount: number): Promise<Coupons> {
        const generator = this.generators.find((generatorInstance) => {
            return generatorInstance.getAlgorithm() === this.config.coupon.algorithm
        })
        if (!generator) throw new GeneratorNotFoundError(this.config.coupon.algorithm)

        return generator.generate(amount)
    }
}
