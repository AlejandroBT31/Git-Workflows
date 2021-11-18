const chai = require('chai'); 
const expect = chai.expect;

const calculator = require('../src/calculator');

describe('Calculator', () => {
    describe('Suma' ,() => {
        it('suma de dos numeros',() => {
            expect(calculator.add(2,4)).to.equal(6);
            expect(calculator.add(4,4)).to.equal(8);
            expect(calculator.add(12,102)).to.equal(114);
            expect(calculator.add(32,30))
            .to.equal(62)
            .to.be.a('number');
        });

        it('suma 14 + 14 = 28',() => {
            expect(calculator.add(14,14))
            .to.equal(28)
            .to.be.a('number');
        });
    });

    describe('Multiplicacion' ,() => {
        it('mltiplicacion de dos numeros',() => {
            expect(calculator.multiply(2,2)).to.equal(4);
            expect(calculator.multiply(3,2)).to.equal(6);
            expect(calculator.multiply(1,2)).to.equal(2);
            expect(calculator.multiply(90,87)).to.equal(7830);
        });
    });


    describe('Division' ,() => {
        it('division de dos numeros',() => {
            expect(calculator.divide(2,2)).to.equal(1);
            expect(calculator.divide(6,2)).to.equal(3);
            expect(calculator.divide(8,4)).to.equal(2);
            expect(calculator.divide(90,10)).to.equal(9);
        });
    });

    describe('Subtraccion' ,() => {
        it('subtraccion de dos numeros',() => {
            expect(calculator.subtract(5,2)).to.equal(3);
            expect(calculator.subtract(3,2)).to.equal(1);
            expect(calculator.subtract(8,2)).to.equal(6);
            expect(calculator.subtract(90,87)).to.equal(3);
        });
    });

})



