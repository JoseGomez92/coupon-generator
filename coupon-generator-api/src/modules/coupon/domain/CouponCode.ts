import StringValueObject from '../../shared/domain/value-object/StringValueObject'
import _ from 'lodash'
import InvalidArgumentError from '../../shared/domain/error/InvalidArgumentError'

export default class CouponCode extends StringValueObject {
    public static readonly MAX_CHARACTER_LENGTH = 6

    constructor(readonly value: string) {
        super(value)
        this.guard()
    }

    private guard(): void {
        if (_.isEmpty(this.value)) throw new InvalidArgumentError(`The coupon code is empty`)
        if (this.value.length !== CouponCode.MAX_CHARACTER_LENGTH)
            throw new InvalidArgumentError(`The code: <${this.value}> is not valid for a Coupon`)
    }
}
