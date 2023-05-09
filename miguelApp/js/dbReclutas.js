var listReclutas = [];



function guardarR(pId, pnombre, pedad, pcorreo, pdireccion, pfnacimiento, pNidenficacion, pfregistro, pIdTeam){
    
    var newRecluta = {
        id : pId,
        nombre:pnombre,
        edad : pedad,
        correo : pcorreo,
        direccion : pdireccion,
        fechaNacimiento : pfnacimiento,
        Nidenficacion : pNidenficacion,
        fechaRegisto : pfregistro,
        IdTeam : pIdTeam
    };
    listReclutas.push(newRecluta);
    console.log(newRecluta)
}

function tablaListR(){
    return listReclutas;
}