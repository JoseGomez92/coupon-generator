export type FillerParams = {
    value: string
    character: string
    length: number
    fillingFromLeft?: boolean
}

export default class FillerTool {
    static fillText({ value, character, length, fillingFromLeft = true }: FillerParams): string {
        const filler = this.generateFiller(character, length)
        const fullString = fillingFromLeft ? filler + value : value + filler

        return fillingFromLeft ? fullString.slice(-length) : fullString.slice(0, length)
    }

    private static generateFiller(character: string, length: number): string {
        let filler = ''
        for (let i = 0; i < length; i++) filler += character

        return filler
    }
}
