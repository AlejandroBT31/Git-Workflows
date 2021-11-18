function isEven(num){
    if (num % 2 == 0)
        return 'Si';
    else
        return 'No';
};

function ArrayPar(){
    let array = [];
    par = num % 2 == 0
    for (var i = 0; i < array.length; i++) 
    {
        if (par == array[i])
        {
            return 'Si'
        }
        else {
            return 'No'
        }    
    }
};

function Numeros(){
    let numeros = [6,5,4,3,2]
    numeros.sort()
}

module.exports = {
    isEven,
    ArrayPar,
    Numeros
}