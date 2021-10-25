export default class InvalidArgumentError extends Error {
    static readonly ERROR_NAME = 'InvalidArgumentError'

    constructor(message: string) {
        super(message)
        this.name = InvalidArgumentError.ERROR_NAME
    }
}
