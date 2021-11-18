const chai = require('chai'); 
const expect = chai.expect;

const cadena = require('../src/cadena')

describe('Cadena', () => {
    describe('Cadena de string' ,() => {
        it('total',() => {
            expect(cadena.cadena('hola')).to.equal(4)
            expect(cadena.cadena('esto_es')).to.equal(7)
            expect(cadena.cadena('una')).to.equal(3)
            expect(cadena.cadena('prueba')).to.equal(6)
            expect(cadena.cadena('una')).to.equal(3)
            expect(cadena.cadena('prueba')).to.equal(6)
        });
    });

    describe('Cadena de Mayuculas' ,() => {
        it('Mayuscula',() => {
            expect(cadena.mayus('hola')).toString('HOLA')
            expect(cadena.mayus('esto_es')).toString('ESTO_ES')
            expect(cadena.mayus('una')).toString('UNA')
            expect(cadena.mayus('prueba')).to.equal('prueba')
            expect(cadena.mayus('una')).toString('UNA')
            expect(cadena.mayus('prueba')).to.equal('prueba')
        });
    });
})

    