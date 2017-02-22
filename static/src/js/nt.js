/**
 * Created by brunop on 21-02-17.
 */
//aqu&iacute; el anuncio.

<!-- Convertidor de numeros a letras - pfont -->
function nt(gg)
{
    aa=gg.toString().split(",");
    bb=[];
    ax=0;
    while (aa[ax])
    {
        a=aa[ax];

        x=a.length;
        l="";
//-------------- unidades -----------------
        if(a.length>0)
        {
            u=a.substr(x-1,1);
            //alert("u="+u)
            switch (u)
            {
                case "0": l="cero";
                    break;
                case "1": if (ax==0){l="uno";}else{l="una";}
                    break;
                case "2": l="dos";
                    break;
                case "3": l="tres";
                    break;
                case "4": l="cuatro";
                    break;
                case "5": l="cinco";
                    break;
                case "6": l="seis";
                    break;
                case "7": l="siete";
                    break;
                case "8": l="ocho";
                    break;
                case "9": l="nueve";
                    break;
            }
        }

//--------------------- decenas -----------------
        if(a.length>1)
        {
            x--;
            d=a.substr(x-1,1);
//alert("d="+d)
            switch (d)
            {
                case "1":
                    switch (u)
                    {
                        case "0": l="diez";
                            break;
                        case "1": l="once";
                            break;
                        case "2": l="doce";
                            break;
                        case "3": l="trece";
                            break;
                        case "4": l="catorce";
                            break;
                        case "5": l="quince";
                            break;
                        default: l="dieci"+l;
                    }
                    break;
                case "2":
                    switch (u)
                    {
                        case "0": l="veinte";
                            break;
                        default: l="veinti"+l;
                    }
                    break;
                case "3":
                    switch (u)
                    {
                        case "0": l="treinta";
                            break;
                        default: l="treinta y "+l;
                    }
                    break;
                case "4":
                    switch (u)
                    {
                        case "0": l="cuarenta";
                            break;
                        default: l="cuarenta y "+l;
                    }
                    break;
                case "5":
                    switch (u)
                    {
                        case "0": l="cincuenta";
                            break;
                        default: l="cincuenta y "+l;
                    }
                    break;
                case "6":
                    switch (u)
                    {
                        case "0": l="sesenta";
                            break;
                        default: l="sesenta y "+l;
                    }
                    break;
                case "7":
                    switch (u)
                    {
                        case "0": l="setenta";
                            break;
                        default: l="setenta y "+l;
                    }
                    break;
                case "8":
                    switch (u)
                    {
                        case "0": l="ochenta";
                            break;
                        default: l="ochenta y "+l;
                    }
                    break;
                case "9":
                    switch (u)
                    {
                        case "0": l="noventa";
                            break;
                        default: l="noventa y "+l;
                    }
                    break;
            }
        }

//------------------------------------------------ centenas -------------------------------------
        if(a.length>2)
        {
            x--;
            c=a.substr(x-1,1);
//alert("c="+c)
            switch (c)
            {
                case "1":
                    switch (l)
                    {
                        case "cero": l="cien";
                            break;
                        default: l="ciento "+l;
                    }
                    break;
                case "2":
                    switch (l)
                    {
                        case "cero": if (ax==0){l="doscientos";}else{l="doscientas";}
                            break;
                        default: if (ax==0){l="doscientos "+l;}else{l="doscientas "+l;}
                    }
                    break;
                case "3":
                    switch (l)
                    {
                        case "cero": if (ax==0){l="trescientos";}else{l="trescientas";}
                            break;
                        default: if (ax==0){l="trescientos "+l;}else{l="trescientas "+l;}
                    }
                    break;
                case "4":
                    switch (l)
                    {
                        case "cero": if (ax==0){l="cuatrocientos";}else{l="cuatrocientas";}
                            break;
                        default: if (ax==0){l="cuatrocientos "+l;}else{l="cuatrocientas "+l;}
                    }
                    break;
                case "5":
                    switch (l)
                    {
                        case "cero": if (ax==0){l="quinientos";}else{l="quinientas";}
                            break;
                        default: if (ax==0){l="quinientos "+l;}else{l="quinientas "+l;}
                    }
                    break;
                case "6":
                    switch (l)
                    {
                        case "cero": if (ax==0){l="seiscientos";}else{l="seiscientas";}
                            break;
                        default: if (ax==0){l="seiscientos "+l;}else{l="seiscientas "+l;}
                    }
                    break;
                case "7":
                    switch (l)
                    {
                        case "cero": if (ax==0){l="setecientos";}else{l="setecientas";}
                            break;
                        default: if (ax==0){l="setecientos "+l;}else{l="setecientas "+l}
                    }
                    break;
                case "8":
                    switch (l)
                    {
                        case "cero": if (ax==0){l="ochocientos";}else{l="ochocientas";}
                            break;
                        default: if (ax==0){l="ochocientos "+l;}else{l="ochocientas "+l}
                    }
                    break;
                case "9":
                    switch (l)
                    {
                        case "cero": if (ax==0){l="novecientos";}else{l="novecientas";}
                            break;
                        default: if (ax==0){l="novecientos "+l;}else{l="novecientas "+l;}
                    }
                    break;
            }
        }

//----------------------------------- unidades de millar ----------------------------
        if(a.length>3)
        {
            x--;
            um=a.substr(x-1,1);
//alert("um="+um)
            switch (um)
            {
                case "1":
                    pcm="una mil";
                    switch (l)
                    {
                        case "cero": l="mil";
                            break;
                        default: l="mil "+l;
                    }
                    break;
                case "2":
                    switch (l)
                    {
                        case "cero": l="dos mil";
                            break;
                        default: l="dos mil "+l;
                    }
                    break;
                case "3":
                    switch (l)
                    {
                        case "cero": l="tres mil";
                            break;
                        default: l="tres mil "+l;
                    }
                    break;
                case "4":
                    switch (l)
                    {
                        case "cero": l="cuatro mil";
                            break;
                        default: l="cuatro mil "+l;
                    }
                    break;
                case "5":
                    switch (l)
                    {
                        case "cero": l="cinco mil";
                            break;
                        default: l="cinco mil "+l
                    }
                    break;
                case "6":
                    switch (l)
                    {
                        case "cero": l="seis mil";
                            break;
                        default: l="seis mil "+l
                    }
                    break;
                case "7":
                    switch (l)
                    {
                        case "cero": l="siete mil";
                            break;
                        default: l="siete mil "+l
                    }
                    break;
                case "8":
                    switch (l)
                    {
                        case "cero": l="ocho mil";
                            break;
                        default: l="ocho mil "+l
                    }
                    break;
                case "9":
                    switch (l)
                    {
                        case "cero": l="nueve mil";
                            break;
                        default: l="nueve mil "+l
                    }
                    break;
            }
        }
//******************************* decenas de millar ----------------------------------------------------
        if(a.length>4)
        {
            x--;
            dm=a.substr(x-1,1);
            if (l=="cero"){l="";}
//alert("d="+d)
            switch (dm)
            {
                case "1":
                    switch (um)
                    {
                        case "0": l="diez mil "+l;
                            break;
                        case "1": l=l.replace("mil","once mil");
                            break;
                        case "2": l=l.replace("dos mil","doce mil");
                            break;
                        case "3": l=l.replace("tres mil","trece mil");
                            break;
                        case "4": l=l.replace("cuatro mil","catorce mil");
                            break;
                        case "5": l=l.replace("cinco mil","quince mil");
                            break;
                        default: l="dieci"+l;
                    }
                    break;
                case "2":
                    switch (um)
                    {
                        case "0": l="veinte mil "+l;
                            break;
                        case "1": if (ax==0){l="veintiun "+l;}else{l="veintiuna "+l;}
                            break;
                        default: l="veinti"+l;
                    }
                    break;
                case "3":
                    switch (um)
                    {
                        case "0": l="treinta mil "+l;
                            break;
                        case "1": if (ax==0){l="treinta y un "+l;}else{l="treinta y una "+l;}
                            break;
                        default: l="treinta y "+l;
                    }
                    break;
                case "4":
                    switch (um)
                    {
                        case "0": l="cuarenta mil "+l;
                            break;
                        case "1": if (ax==0){l="cuarenta y un "+l;}else{l="cuarenta y una "+l;}
                            break;
                        default: l="cuarenta y "+l;
                    }
                    break;
                case "5":
                    switch (um)
                    {
                        case "0": l="cincuenta mil "+l;
                            break;
                        case "1": if (ax==0){l="cincuenta y un "+l;}else{l="cincuenta y una "+l;}
                            break;
                        default: l="cincuenta y "+l;
                    }
                    break;
                case "6":
                    switch (um)
                    {
                        case "0": l="sesenta mil "+l;
                            break;
                        case "1": if (ax==0){l="sesenta y un "+l;}else{l="sesenta y una "+l;}
                            break;
                        default: l="sesenta y "+l;
                    }
                    break;
                case "7":
                    switch (um)
                    {
                        case "0": l="setenta mil "+l;
                            break;
                        case "1": if (ax==0){l="setenta y un "+l;}else{l="setenta y una "+l}
                            break;
                        default: l="setenta y "+l;
                    }
                    break;
                case "8":
                    switch (um)
                    {
                        case "0": l="ochenta mil "+l;
                            break;
                        case "1": if (ax==0){l="ochenta y un "+l;}else{l="ochenta y una "+l;}
                            break;
                        default: l="ochenta y "+l;
                    }
                    break;
                case "9":
                    switch (um)
                    {
                        case "0": l="noventa mil "+l;
                            break;
                        case "1": if (ax==0){l="noventa y un "+l;}else{l="noventa y una "+l;}
                            break;
                        default: l="noventa y "+l;
                    }
                    break;
            }
        }
//------------------------------------- centenas de millar --------------------------------------------
        if(a.length>5)
        {
            x--;
            cm=a.substr(x-1,1);
//alert("cm="+dm+um)
            switch (cm)
            {
                case "1":
                    switch (""+dm+um)
                    {
                        case "00": l="cien mil "+l;
                            break;
                        case "01": if (ax==0){l="ciento un "+l;}else{l="ciento una "+l;}
                            break;
                        default: l="ciento "+l;
                    }
                    break;
                case "2":
                    switch (""+dm+um)
                    {
                        case "00": if (ax==0){l="doscientos mil "+l;}else{l="doscientas mil "+l;}
                            break;
                        default: if (ax==0){l="doscientos "+l;}else{l="doscientas "+l;}
                    }
                    break;
                case "3":
                    switch (""+dm+um)
                    {
                        case "00": if (ax==0){l="trescientos mil "+l;}else{l="trescientas mil "+l;}
                            break;
                        default: if (ax==0){l="trescientos "+l;}else{l="trescientas "+l;}
                    }
                    break;
                case "4":
                    switch (""+dm+um)
                    {
                        case "00": if (ax==0){l="cuatrocientos mil "+l;}else{l="cuatrocientas mil "+l;}
                            break;
                        default: if (ax==0){l="cuatrocientos "+l;}else {l="cuatrocientas "+l;}
                    }
                    break;
                case "5":
                    switch (""+dm+um)
                    {
                        case "00": if (ax==0){l="quinientos mil "+l;}else{l="quinientas mil "+l;}
                            break;
                        default: if (ax==0){l="quinientos "+l;}else{l="quinientas "+l;}
                    }
                    break;
                case "6":
                    switch (""+dm+um)
                    {
                        case "00": if (ax==0){l="seiscientos mil "+l;}else{l="seiscientas mil "+l;}
                            break;
                        default: if (ax==0){l="seiscientos "+l;}else{l="seiscientas "+l;}
                    }
                    break;
                case "7":
                    switch (""+dm+um)
                    {
                        case "00": if (ax==0){l="setecientos mil "+l;}else{l="setecientas mil "+l;}
                            break;
                        default: if (ax==0){l="setecientos "+l;}else{l="setecientas "+l;}
                    }
                    break;
                case "8":
                    switch (""+dm+um)
                    {
                        case "00": if (ax==0){l="ochocientos mil "+l;}else{l="ochocientas mil "+l;}
                            break;
                        default: if (ax==0){l="ochocientos "+l;}else{l="ochocientas "+l;}
                    }
                    break;
                case "9":
                    switch (""+dm+um)
                    {
                        case "00": if (ax==0){l="novecientos mil "+l;}else{l="novecientas mil "+l;}
                            break;
                        default: if (ax==0){l="novecientos "+l;}else{l="novecientas "+l;}
                    }
                    break;
            }
        }
//-------------------------------------------- unidades de millon -------------------------
        if(a.length>6)
        {
            x--;
            ul=a.substr(x-1,1);
            //alert("ul="+ul)
            switch (ul)
            {
                case "1": l="un mill&oacute;n "+l;
                    break;
                case "2": l="dos millones "+l;
                    break;
                case "3": l="tres millones "+l;
                    break;
                case "4": l="cuatro millones "+l;
                    break;
                case "5": l="cinco millones "+l;
                    break;
                case "6": l="seis millones "+l;
                    break;
                case "7": l="siete millones "+l;
                    break;
                case "8": l="ocho millones "+l;
                    break;
                case "9": l="nueve millones "+l;
                    break;
            }
        }
//--------------------- decenas de millon-----------------
        if(a.length>7)
        {
            x--;
            dl=a.substr(x-1,1);
//alert("dl="+dl)
            switch (dl)
            {
                case "1":
                    switch (ul)
                    {
                        case "0": l="diez millones "+l;
                            break;
                        case "1": l=l.replace("un mill&oacute;n ","once millones ");
                            break;
                        case "2": l=l.replace("dos millones ","doce millones ");
                            break;
                        case "3": l=l.replace("tres millones ","trece millones ");
                            break;
                        case "4": l=l.replace("cuatro millones ","catorce millones ");
                            break;
                        case "5": l=l.replace("cinco millones ","quince millones ");
                            break;
                        default: l="dieci"+l;
                    }
                    break;
                case "2":
                    switch (ul)
                    {
                        case "0": l="veinte millones "+l;
                            break;
                        default: l="veinti"+l;
                    }
                    break;
                case "3":
                    switch (ul)
                    {
                        case "0": l="treinta millones "+l;
                            break;
                        default: l="treinta y "+l;
                    }
                    break;
                case "4":
                    switch (ul)
                    {
                        case "0": l="cuarenta millones "+l;
                            break;
                        default: l="cuarenta y "+l;
                    }
                    break;
                case "5":
                    switch (ul)
                    {
                        case "0": l="cincuenta millones "+l;
                            break;
                        default: l="cincuenta y "+l;
                    }
                    break;
                case "6":
                    switch (ul)
                    {
                        case "0": l="sesenta millones "+l;
                            break;
                        default: l="sesenta y "+l;
                    }
                    break;
                case "7":
                    switch (ul)
                    {
                        case "0": l="setenta millones "+l;
                            break;
                        default: l="setenta y "+l;
                    }
                    break;
                case "8":
                    switch (ul)
                    {
                        case "0": l="ochenta millones "+l;
                            break;
                        default: l="ochenta y "+l;
                    }
                    break;
                case "9":
                    switch (ul)
                    {
                        case "0": l="noventa millones "+l;
                            break;
                        default: l="noventa y "+l;
                    }
                    break;
            }
        }
//------------------------------------- centenas de millon --------------------------------------------
        if(a.length>8)
        {
            x--;
            cl=a.substr(x-1,1);
//alert("cm="+dm+um)
            switch (cl)
            {
                case "1":
                    switch (""+dl+ul)
                    {
                        case "00": l="cien millones "+l;
                            break;
                        case "01": l=l.replace("un mill&oacute;n ","ciento un millones ");
                            break;
                        default: l="ciento "+l;
                    }
                    break;
                case "2":
                    switch (""+dl+ul)
                    {
                        case "00": l="doscientos millones "+l;
                            break;
                        case "01": l=l.replace("un mill&oacute;n ","doscientos un millones ");
                            break;
                        default: l="doscientos "+l;
                    }
                    break;
                case "3":
                    switch (""+dl+ul)
                    {
                        case "00": l="trescientos millones"+l;
                            break;
                        case "01": l=l.replace("un mill&oacute;n ","trescientos un millones ");
                            break;
                        default: l="trescientos "+l;
                    }
                    break;
                case "4":
                    switch (""+dl+ul)
                    {
                        case "00": l="cuatrocientos millones"+l;
                            break;
                        case "01": l=l.replace("un mill&oacute;n ","cuatrocientos un millones ");
                            break;
                        default: l="cuatrocientos "+l;
                    }
                    break;
                case "5":
                    switch (""+dl+ul)
                    {
                        case "00": l="quinientos millones"+l;
                            break;
                        case "01": l=l.replace("un mill&oacute;n ","quinientos un millones ");
                            break;
                        default: l="quinientos "+l;
                    }
                    break;
                case "6":
                    switch (""+dl+ul)
                    {
                        case "00": l="seiscientos millones"+l;
                            break;
                        case "01": l=l.replace("un mill&oacute;n ","seiscientos un millones ");
                            break;
                        default: l="seiscientos "+l;
                    }
                    break;
                case "7":
                    switch (""+dl+ul)
                    {
                        case "00": l="setecientos millones"+l;
                            break;
                        case "01": l=l.replace("un mill&oacute;n ","setecientos un millones ");
                            break;
                        default: l="setecientos "+l;
                    }
                    break;
                case "8":
                    switch (""+dl+ul)
                    {
                        case "00": l="ochocientos millones"+l;
                            break;
                        case "01": l=l.replace("un mill&oacute;n ","ochocientos un millones ");
                            break;
                        default: l="ochocientos "+l;
                    }
                    break;
                case "9":
                    switch (""+dl+ul)
                    {
                        case "00": l="novecientos millones"+l;
                            break;
                        case "01": l=l.replace("un mill&oacute;n ","novecientos un millones ");
                            break;
                        default: l="novecientos "+l;
                    }
                    break;
            }
        }
//----------------------------------- unidades de millar de millon----------------------------
        if(a.length>9)
        {
            x--;
            um=a.substr(x-1,1);
//alert("um="+um)
            switch (um)
            {
                case "1":
                    pcm="una mil";
                    switch (l)
                    {
                        case "cero": l="mil";
                            break;
                        default: l="mil "+l;
                    }
                    break;
                case "2":
                    switch (l)
                    {
                        case "cero": l="dos mil";
                            break;
                        default: l="dos mil "+l;
                    }
                    break;
                case "3":
                    switch (l)
                    {
                        case "cero": l="tres mil";
                            break;
                        default: l="tres mil "+l;
                    }
                    break;
                case "4":
                    switch (l)
                    {
                        case "cero": l="cuatro mil";
                            break;
                        default: l="cuatro mil "+l;
                    }
                    break;
                case "5":
                    switch (l)
                    {
                        case "cero": l="cinco mil";
                            break;
                        default: l="cinco mil "+l
                    }
                    break;
                case "6":
                    switch (l)
                    {
                        case "cero": l="seis mil";
                            break;
                        default: l="seis mil "+l
                    }
                    break;
                case "7":
                    switch (l)
                    {
                        case "cero": l="siete mil";
                            break;
                        default: l="siete mil "+l
                    }
                    break;
                case "8":
                    switch (l)
                    {
                        case "cero": l="ocho mil";
                            break;
                        default: l="ocho mil "+l
                    }
                    break;
                case "9":
                    switch (l)
                    {
                        case "cero": l="nueve mil";
                            break;
                        default: l="nueve mil "+l
                    }
                    break;
            }
        }
        bb[ax]=l;
        ax++;
    }
    var deci=[""," d&eacute;cimas"," cent&eacute;simas"," mil&eacute;simas"," diezmil&eacute;simas"," cienmil&eacute;simas"," millon&eacute;simas"," diezmillon&eacute;simas"," cienmillon&eacute;simas"," milmillon&eacute;simas"];
    ax=0;
    while(bb[ax])
    {
        if (ax==0){l=bb[0];}
        if(ax==1){if (bb[1]!='cero'){l+=" con "+bb[1]+deci[aa[1].length];}}
        ax++
    }
    l=l.toUpperCase();
    $("#number_to_word").html(l);
}
