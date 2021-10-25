import Coupons from './Coupons'

export default interface CouponsGenerator {
    generate(amount: number): Promise<Coupons>
}
