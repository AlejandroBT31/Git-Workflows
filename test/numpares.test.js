const chai = require('chai'); 
const expect = chai.expect;

const numpar = require('../src/numpares')

describe('Numeros', () => {
    describe('numero par' ,() => {
        it('numeroPar',() => {
            expect(numpar.isEven(2)).to.equal('Si')
            expect(numpar.isEven(4)).to.equal('Si')
            expect(numpar.isEven(6)).to.equal('Si')
            expect(numpar.isEven(5)).to.equal('No')
            expect(numpar.isEven(8)).to.equal('Si')
            expect(numpar.isEven(5)).to.equal('No')
        });
    });

    describe('Array' ,() => {
        it('arraydepares',() => {
            expect(numpar.ArrayPar[2,3,4,5,6]).to.equal('No')
            expect(numpar.ArrayPar[2,2,4,4,6]).to.equal('Si')
            expect(numpar.ArrayPar[9,5,4,3,2]).to.equal('No')
            expect(numpar.ArrayPar[2,3,4,5,6]).to.equal('No')
            expect(numpar.ArrayPar[2,3,4,5,6]).to.equal('No')
            expect(numpar.ArrayPar[2,2,2,2,2]).to.equal('si')
           
        });
    });
   
    describe('Array' ,() => {
        it('numeros ordenados',() => {
            expect(numpar.Numeros([9,8,7,6])).equal(6,7,8,9)
            expect(numpar.Numeros([8,7,6,5])).equal(5,6,7,8)
            expect(numpar.Numeros([2,3,4,5])).equal(2,3,4,5)
            expect(numpar.Numeros([3,4,5,6])).equal(3,4,5,6)
            expect(numpar.Numeros([2,5,5,6])).equal(2,5,5,6)
            expect(numpar.Numeros([2,4,5,6])).equal(2,4,5,6)

        });
    });

})
    