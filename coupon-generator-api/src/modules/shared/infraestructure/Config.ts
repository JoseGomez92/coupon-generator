import fs from 'fs'
import nconf from 'nconf'

export default class Config {
    readonly server!: { port: number }
    readonly coupon!: { algorithm: string }

    private readonly filePath = process.cwd() + '/etc/config.json'

    constructor() {
        this.checkIfFileExists()
        this.loadFileConfig()
        this.server = this.readServer()
        this.coupon = this.readCoupon()
    }

    private checkIfFileExists(): void {
        if (!fs.existsSync(this.filePath)) throw new Error(`Config file has not been found in the expected path: <${this.filePath}>`)
    }

    private loadFileConfig() {
        try {
            nconf.argv().env().file({ file: this.filePath })
        } catch (error) {
            throw new Error(`Config file cannot be parsed`)
        }
    }

    private readServer() {
        const server = nconf.get('server')
        if (!server) throw new Error('Server config not found')
        if (!server.port) throw new Error('Server port is required')

        return server
    }

    private readCoupon() {
        const coupon = nconf.get('coupon')
        if (!coupon) throw new Error('Coupon config not found')
        if (!coupon.algorithm) throw new Error('Coupon algorithm not found')

        return coupon
    }
}
