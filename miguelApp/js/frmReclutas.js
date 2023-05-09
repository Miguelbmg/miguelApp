document.querySelector('#btnguardar').addEventListener('click', guardarRfrm);
viwesReclutas();


function guardarRfrm(){
    var sId = document.querySelector('#IdR1').value;
        sNombre = document.querySelector('#NombreR').value;
        sedad = document.querySelector('#edadR1').value;
        scorreo = document.querySelector('#emailR1').value;
        sdireccion = document.querySelector('#direccionR1').value;
        sfechaNacimiento = document.querySelector('#fNacimientoR1').value;
        sNidentificacion = document.querySelector('#NidentificacionR1').value;
        sfechaRegistro = document.querySelector('#fechaIngresoR1').value;
        sIdTeam = document.querySelector('#IdTeamR1').value;

    guardarR(sId, sNombre, sedad, scorreo, sdireccion, sfechaNacimiento, sNidentificacion, sfechaRegistro, sIdTeam);
    viwesReclutas();
} 

function viwesReclutas(){
    var list = tablaListR();
    tbody = document.querySelector('#tablaReclutas tbody');

    tbody.innerHtml = '';

    for(var i = 0; i < list.length; i++){
        var row = tbody.insertRow(i);
        var Id = row.insertCell(0);
            nombre = row.insertCell(1);
            edad = row.insertCell(2);
            correo = row.insertCell(2);
            IdTeam = row.insertCell(4);



        Id.innerHtml = list[i].Id;
        nombre.innerHtml = list[i].nombre;
        edad.innerHtml = list[i].detalles;
        correo.innerHtml = list[i].detalles;
        IdTeam = innerHtml = list[i].IdTeam;



        tbody.appendChild(row);
    }
}