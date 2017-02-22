/**
 * Created by brunop on 21-02-17.
 */
//fecha actual
function formatDate() {
    var date = new Date();
    var monthNames = [
        "Enero", "Febrero", "Marzo",
        "Abril", "Mayo", "Junio", "Julio",
        "Agosto", "Septiembre", "Octubre",
        "Noviembre", "Diciembre"
    ];

    var day = date.getDate()<10 ? "0"+date.getDate():date.getDate();
    var monthIndex = date.getMonth()<10 ? "0"+(date.getMonth()+1): date.getMonth();
    var year = date.getFullYear();
    var actual_date = ""+ day + " de " + monthNames[monthIndex] + " " + year;
    console.log("fecha Actual",actual_date);
    //$("#date_actual").html(actual_date);
    //document.getElementById('date_actual').innerHTML = actual_date;
    $("#date_actual").text(day+'/'+monthIndex+'/'+year);
}
//convert number to words
function Unidades(num){

    switch(num)
    {
        case 1: return "UN";
        case 2: return "DOS";
        case 3: return "TRES";
        case 4: return "CUATRO";
        case 5: return "CINCO";
        case 6: return "SEIS";
        case 7: return "SIETE";
        case 8: return "OCHO";
        case 9: return "NUEVE";
    }

    return "";
}//Unidades()

function Decenas(num){

    decena = Math.floor(num/10);
    unidad = nu - (decena * 10);

    switch(decena)
    {
        case 1:
            switch(unidad)
            {
                case 0: return "DIEZ";
                case 1: return "ONCE";
                case 2: return "DOCE";
                case 3: return "TRECE";
                case 4: return "CATORCE";
                case 5: return "QUINCE";
                default: return "DIECI" + Unidades(unidad);
            }
        case 2:
            switch(unidad)
            {
                case 0: return "VEINTE";
                default: return "VEINTI" + Unidades(unidad);
            }
        case 3: return DecenasY("TREINTA", unidad);
        case 4: return DecenasY("CUARENTA", unidad);
        case 5: return DecenasY("CINCUENTA", unidad);
        case 6: return DecenasY("SESENTA", unidad);
        case 7: return DecenasY("SETENTA", unidad);
        case 8: return DecenasY("OCHENTA", unidad);
        case 9: return DecenasY("NOVENTA", unidad);
        case 0: return Unidades(unidad);
    }
}//Unidades()

/**
 * @return {string}
 */
function DecenasY(strSin, numUnidades) {
    if (numUnidades > 0)
        return strSin + " Y " + Unidades(numUnidades);

    return strSin;
}//DecenasY()

/**
 * @return {string}
 */
function Centenas(num) {
    centenas = Math.floor(num / 100);
    decenas = num - (centenas * 100);

    switch(centenas)
    {
        case 1:
            if (decenas > 0)
                return "CIENTO " + Decenas(decenas);
            return "CIEN";
        case 2: return "DOSCIENTOS " + Decenas(decenas);
        case 3: return "TRESCIENTOS " + Decenas(decenas);
        case 4: return "CUATROCIENTOS " + Decenas(decenas);
        case 5: return "QUINIENTOS " + Decenas(decenas);
        case 6: return "SEISCIENTOS " + Decenas(decenas);
        case 7: return "SETECIENTOS " + Decenas(decenas);
        case 8: return "OCHOCIENTOS " + Decenas(decenas);
        case 9: return "NOVECIENTOS " + Decenas(decenas);
    }

    return Decenas(decenas);
}//Centenas()

/**
 * @return {string}
 */
function Seccion(num, divisor, strSingular, strPlural) {
    cientos = Math.floor(num / divisor);
    resto = num - (cientos * divisor);

    letras = "";

    if (cientos > 0)
        if (cientos > 1)
            letras = Centenas(cientos) + " " + strPlural;
else
    letras = strSingular;

    if (resto > 0)
        letras += "";

    return letras;
}//Seccion()

/**
 * @return {string}
 */
function Miles(num) {
    divisor = 1000;
    cientos = Math.floor(num / divisor);
    resto = num - (cientos * divisor);

    strMiles = Seccion(num, divisor, "UN MIL", "MIL");
    strCentenas = Centenas(resto);

    if(strMiles == "")
    return strCentenas;

    return strMiles + " " + strCentenas;
}//Miles()

/**
 * @return {string}
 */
function Millones(num) {
    divisor = 1000000;
    cientos = Math.floor(num / divisor);
    resto = num - (cientos * divisor);

    strMillones = Seccion(num, divisor, "UN MILLON DE", "MILLONES DE");
    strMiles = Miles(resto);

    if(strMillones == "")
    return strMiles;

    return strMillones + " " + strMiles;
}//Millones()

/**
 * @return {string}
 */
function NumeroALetras() {
    var num = 500;
    var data = {
        numero: num,
        enteros: Math.floor(num),
        centavos: (((Math.round(num * 100)) - (Math.floor(num) * 100))),
        letrasCentavos: "",
        letrasMonedaPlural: 'BOLIVIANOS',//"PESOS", 'Dólares', 'Bolívares', 'etcs'
        letrasMonedaSingular: 'BOLIVIANO', //"PESO", 'Dólar', 'Bolivar', 'etc'

        letrasMonedaCentavoPlural: "CENTAVOS",
        letrasMonedaCentavoSingular: "CENTAVO"
    };

    if (data.centavos > 0) {
        data.letrasCentavos = "CON " + (function (){
                if (data.centavos == 1)
                    $("#number_to_word").html(Millones(data.centavos) + " " + data.letrasMonedaCentavoSingular);
                else
                    $("#number_to_word").html(Millones(data.centavos) + " " + data.letrasMonedaCentavoPlural);
            })();
    }

    if(data.enteros == 0)
        $("#number_to_word").html("CERO " + data.letrasMonedaPlural + " " + data.letrasCentavos);
    if (data.enteros == 1)
        $("#number_to_word").html( Millones(data.enteros) + " " + data.letrasMonedaSingular + " " + data.letrasCentavos);
    else
        $("#number_to_word").html( Millones(data.enteros) + " " + data.letrasMonedaPlural + " " + data.letrasCentavos);
}

$( document ).ready(function() {
    formatDate();
});