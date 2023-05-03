import { CnpjValidator } from './cnpj-validator'
import { type Validator } from './cnpj-validator-protocol'

const makeSut = (): Validator => {
    const sut = CnpjValidator
    return sut
}

describe('Cnpj Validator', () => {
    test('should return false if an invalid cnpj is provided', () => {
        const sut = makeSut()
        expect(sut.validate('12.345.678/9123')).toBe(false)
    })

    test('should return false if an empty cnpj is provided', () => {
        const sut = makeSut()
        expect(sut.validate('')).toBe(false)
    })

    test('should return true if a valid cnpj is provided', () => {
        const sut = makeSut()
        expect(sut.validate('12.345.678/9123-45')).toBe(true)
    })
})
