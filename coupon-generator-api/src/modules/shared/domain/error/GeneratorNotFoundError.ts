export default class GeneratorNotFoundError extends Error {
    static readonly ERROR_NAME = 'GeneratorNotFoundError'

    constructor(name: string) {
        super(`Generator for algorithm: <${name}> not found`)
        this.name = GeneratorNotFoundError.ERROR_NAME
    }
}
