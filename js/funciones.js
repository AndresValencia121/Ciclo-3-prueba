function consultar() {

    $.ajax (
               {
                        url          : 'https://g23bfb99f5036e6-bdpais.adb.sa-santiago-1.oraclecloudapps.com/ords/admin/planeta/planeta',
                        type         : 'GET',
                        dataType     : 'json',
                        success      :  function(json){
                                            $("#idDivConsulta").empty();
                                            for (i=0 ; i < json.items.length; i++){
                                                $("#idDivConsulta").append(json.items[i].codigo + json.items[i].nombre + " ");
                                            }
                                            console.log(json)
                                        },
                        error        :   function(xhr,status){
                                            console.log(xhr)
                                        }

               }

           );

}

function insertar() {
    var planeta;

    planeta = { codigo:40 , nombre:'CORE X'};

    $.ajax (
        {

            url          : 'https://g23bfb99f5036e6-bdpais.adb.sa-santiago-1.oraclecloudapps.com/ords/admin/planeta/planeta',
            type         : 'POST',
            data         :  planeta,

            success      :  function(response){
                               console.log(response);
                            },
            error       :   function(xhr,status){
                            console.log( xhr);

                            }


        }
    );



}

function borrar() {

    var planeta,datosEnvio;

    planeta      = {codigo : 40};
    datosEnvio   = JSON.stringify(planeta);

    $.ajax (
        {

            url          : 'https://g23bfb99f5036e6-bdpais.adb.sa-santiago-1.oraclecloudapps.com/ords/admin/planeta/planeta',
            type         : 'DELETE',
            data         :  datosEnvio,
            contentType  : 'application/json',

            success      :  function(response){
                                console.log(response);

                            },
            error       :   function(xhr,status){
                                console.log(xhr);

                            }
        }
    );
}


function actualizar() {

    var planeta,datosEnvio;

    planeta      = {codigo : 330, planeta: 'STAR X'};
    datosEnvio   = JSON.stringify(planeta);

    $.ajax (
        {

            url          : 'https://g23bfb99f5036e6-bdpais.adb.sa-santiago-1.oraclecloudapps.com/ords/admin/planeta/planeta',
            type         : 'PUT',
            data         :  datosEnvio,
            contentType  : 'application/json',

            success      :  function(response){
                                console.log(response);

                            },
            error       :   function(xhr,status){
                                console.log(xhr);

                            }
        }
    );
}
