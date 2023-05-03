import { Example } from './example'
import { type Validator } from './example-protocol'

const makeSut = (): Validator => {
    const sut = Example
    return sut
}

describe('Example', () => {
    test('Handle should return true', () => {
        const sut = makeSut()
        expect(sut.handle()).toBe(true)
    })
})
