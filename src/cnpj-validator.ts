export class CnpjValidator {
    /**
     * Validates a cnpj.
     * @param {string} cnpj
     * @returns {boolean}
    */
    static validate(cnpj: string): boolean {
        const cnpjRegex = /^\d{2}\.\d{3}\.\d{3}\/\d{4}-\d{2}$/
        return cnpjRegex.test(cnpj)
    }
}
