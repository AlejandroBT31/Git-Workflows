const chai = require('chai'); 
const expect = chai.expect;

const dia = require('../src/fecha')

describe('Fecha', () => {
    describe('Dia' ,() => {
        it('Numero de Dia',() => {
            expect(dia.fecha(2)).to.equal('Lunes')    
            expect(dia.fecha(1)).to.equal('Domingo')  
            expect(dia.fecha(3)).to.equal('Martes')
            expect(dia.fecha(4)).to.equal('Miercoles') 
            expect(dia.fecha(5)).to.equal('Jueves') 
            expect(dia.fecha(6)).to.equal('Viernes') 
        });
    });

    describe('Hora' ,() => {
        it('Hora Actual',() => {
            expect(dia.hora(0)) 
            expect(dia.hora(0)) 
            expect(dia.hora(0)) 
            expect(dia.hora(0)) 
            expect(dia.hora(0)) 
            expect(dia.hora(0)) 
           
        });
    });


});
