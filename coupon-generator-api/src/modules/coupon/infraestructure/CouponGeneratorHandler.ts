import CouponsGenerator from '../domain/CouponGenerator'

export default interface CouponGeneratorHandler extends CouponsGenerator {
    getAlgorithm(): string
}
