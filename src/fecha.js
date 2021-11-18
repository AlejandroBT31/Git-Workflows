function fecha(n)
{

    if (n == 1)
        return 'Domingo'

    else if (n == 2)
        return 'Lunes'

    else if (n == 3)
        return 'Martes'

    else if (n == 4)
        return 'Miercoles'
    
    else if (n == 5)
        return 'Jueves'

    else if (n == 6)
        return 'Viernes'

    else if (n == 7)
        return 'Sabado'

};

function hora(){
    const d = new Date();
    const hora = d.getHours() + ":" + d.getMinutes() + ":" + d.getSeconds()
}

module.exports={
    fecha,
    hora
}